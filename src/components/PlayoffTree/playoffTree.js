import './playoffTree.scss';
function cleanString(text){
    var text = text.replace(/\s+/g, '-').toLowerCase();
    var text = text.replace("'","");
    return text;
}
function PlayoffTree(props){
    //console.log(props.standings[0].meta_box.semiFinals[0][1]);
    const quarters = props.standings[0].meta_box.quarterFinals;
    const semis = props.standings[0].meta_box.semiFinals;
    const finals = props.standings[0].meta_box.finals;
    console.log("QF:",quarters);
    console.log("SF:",semis);
    console.log("F:",finals);
    return(
        <div className="playoff-tree">
            <h1>Playoffs:</h1>
            <div>
                <h3>QFinals:</h3>
                <ul>
                    {quarters.map((team,index) => (
                        <li key={index}>
                            <p className={"team " + (team[4] === team[1] ? 'winner' : '')}>({team[0]}) {team[1]}</p>
                            <p className={"team " + (team[4] === team[3] ? 'winner' : '')}>({team[2]}) {team[3]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>SFinals:</h3>
                <ul>
                    {semis.map((team,index) => (
                        <li key={index}>
                            <p className={"team " + (team[4] === team[1] ? 'winner' : '')}>({team[0]}) {team[1]}</p>
                            <p className={"team " + (team[4] === team[3] ? 'winner' : '')}>({team[2]}) {team[3]}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Finals:</h3>
                <ul>
                    {finals.map((team,index) => (
                        <li key={index}>
                            <p className={"team " + (team[4] === team[1] ? 'winner' : '')}>({team[0]}) {team[1]}</p>
                            <p className={"team " + (team[4] === team[3] ? 'winner' : '')}>({team[2]}) {team[3]}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default PlayoffTree;