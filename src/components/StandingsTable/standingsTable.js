import './standingsTable.scss';
function cleanString(text){
    var text = text.replace(/\s+/g, '-').toLowerCase();
    var text = text.replace("'","");
    return text;
}
function StandingsTable(props){
    //console.log(props.standings[0].meta_box.semiFinals[0][1]);
    return(
        <div className="standings-table">
            <div className="first">
                <div className="row">
                    Regular Season
                </div>
                <ul>
                    {props.standings[0].meta_box.standings.map((team,index) => (
                        <li key={index}>
                            <p>{team[0]}</p>
                            {/* <img src={`/rssl/team-logos/${cleanString(team[1])}.png`} onError="this.onerror=null; this.src='https://via.placeholder.com/140x100';"/> */}
                            <img 
    src={`/rssl/team-logos/${cleanString(team[1])}.png`}
    onError={(e) => (e.target.onerror = null, e.target.src = '/rssl/rssl-logo-2021.png')}/>
                            <p>{team[1]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="second">
                <div className="row">
                    <ul>
                        <li><p>Wins</p>
                        <p>Losses</p>
                        <p>Ties</p>
                        <p>Pts.</p>
                        <p>Win %</p>
                        </li>
                    </ul>
                </div>
                <ul>
                    {props.standings[0].meta_box.standings.map((team,index) => (
                        <li key={index}>
                            {/* <p>Rank: {team[0]}</p>
                            <p>Team: {team[1]}</p> */}
                            <p>{team[2]}</p>
                            <p>{team[3]}</p>
                            <p>{team[4]}</p>
                            <p>{team[5]}</p>
                            <p>{team[6]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <ul>
                {props.standings[0].meta_box.standings.map((team,index) => (
                    <li key={index}>
                        <p>Rank: {team[0]}</p>
                        <p>Team: {team[1]}</p>
                        <p>Wins: {team[2]}</p>
                        <p>Losses: {team[3]}</p>
                        <p>Ties: {team[4]}</p>
                        <p>Pts: {team[5]}</p>
                        <p>%: {team[6]}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
export default StandingsTable;