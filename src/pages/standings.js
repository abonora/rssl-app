import React, { Component } from 'react';
import Loading from './../components/Loading/loading';
import './../styles/standings.scss';
import StandingTable from './../components/StandingsTable/standingsTable';
import PlayoffTree from './../components/PlayoffTree/playoffTree';

class Standings extends Component{
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            standings: [],
            selectedYear: 'Select a Season',
            selectedSeason: null,
            openstate: false
        };
        this.seasonChange = this.seasonChange.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.openstate;
        this.setState({ openstate: !currentState });
    };
    componentDidMount(){
        fetch("https://albertobonora.com/feeds/wp-json/wp/v2/seasons/")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    standings: result,
                    selectedYear: result[0].meta_box.year
                },()=>{
                    const yearchange = this.setYear(result[0].id);
                    this.setState({
                        selectedSeason: yearchange
                    });
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
    setYear(id){
        const selectedYear = this.state.standings.filter(
            year => year.id === parseInt(id, 10)
          );
          return selectedYear;
        
    }
    seasonChange(e) {
        const yearchange = this.setYear(e.target.dataset.yearid);
        this.setState({
            selectedYear: e.target.dataset.year,
            selectedSeason: yearchange,
            openstate: false
        });
    }
    render(){
        
        return (
            <main id="standings">
                
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
                <div className="wrapper">
                    <section className="standings-top">
                        <h1>{this.props.title}</h1>
                        <div className="dropdownWrapper">
                            <div onClick={this.toggleClass} className={this.state.openstate ? 'selectedSeason selectedSeason--open': 'selectedSeason'} >
                                {this.state.selectedYear}
                                <svg xmlns="http://www.w3.org/2000/svg" width="29.15" height="18" viewBox="0 0 29.15 18"><path id="ic_keyboard_arrow_down_24px" d="M9.425,7.84l11.15,11.126L31.725,7.84l3.425,3.425L20.575,25.84,6,11.265Z" transform="translate(-6 -7.84)"/></svg>

                            </div>
                            <ul className={this.state.openstate ? 'seasonDropdown seasonDropdown--open': 'seasonDropdown'}>
                                {this.state.standings.map((standing, index) => (
                                    <li key={index} data-yearid={standing.id} data-year={standing.meta_box.year} onClick={this.seasonChange}>
                                        {standing.meta_box.year}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    {
                        !this.state.selectedSeason &&
                        <div>
                            Select a season from dropdown
                        </div>
                    }
                    {
                        this.state.selectedSeason &&
                        <div>
                            <StandingTable standings={this.state.selectedSeason}/>
                            <PlayoffTree standings={this.state.selectedSeason}/>
                        </div>
                    }
                </div>
            }
            </main>
        )
    }
}

export default Standings;