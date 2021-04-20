import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import Loading from './../components/Loading/loading';

// This is the feed to retrive the info from https://albertobonora.com/feeds/wp-json/wp/v2/pages/341

class Home extends Component{
    constructor() {
        super();

        this.state = {
            error: null,
            isLoaded: false,
            homeData: {
                title: null,
                content: null
            }
        };

    }

    componentDidMount(){
        fetch("https://albertobonora.com/feeds/wp-json/wp/v2/pages/341")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    //items: result
                    homeData:{
                        title: result.title.rendered,
                        content: result.content.rendered
                    }
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render(){
        return (
            <main>
                    {
                        this.state.error &&
                        <div>
                            <h1>{this.state.error}</h1>
                        </div>
                    }
                    {
                        !this.state.isLoaded &&
                        <Loading/>
                    }
                    {
                        !this.state.error && this.state.isLoaded &&
                        <div>
                            <h1>{this.state.homeData.title}</h1>
                            <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.homeData.content)}}></div>
                        </div>
                    }
            </main>
            
        )
    }
}

export default Home;