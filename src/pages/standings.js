import React, { Component } from 'react';

class Standings extends Component{
    render(){
        return (
            <main id="stadings">
                <h1>{this.props.title}</h1>
                <div className="wrapper">
                    <img src="/rssl/teams/anaheim-ducks.svg" />
                </div>
            </main>
        )
    }
}

export default Standings;