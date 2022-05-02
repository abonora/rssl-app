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
    // console.log("QF:",quarters);
    // console.log("SF:",semis);
    // console.log("F:",finals[0][4]);
    var showPlayoffTree = true;
    var showCupWinner = false;
    var cupWinner = '';
    if(quarters.length < 1){
        showPlayoffTree = false;
    }
    if(finals.length > 0){
        showCupWinner = true;
        cupWinner = finals[0][4];
    }
    return(
        <div className={showPlayoffTree ? 'playoff-tree': 'playoff-tree--hidden'}>
            <div className='row'>
                Playoffs
            </div>
            <div className='playoff-tree--bracketWrapper'>
                <div className='playoff-tree--bracket'>
                    <h3>Quarters</h3>
                    <ul>
                        {quarters.map((team,index) => (
                            <li key={index}>
                                <p className={"team " + (team[4] === team[1] ? 'winner' : '')}>({team[0]}) {team[1]}</p>
                                <p className={"team " + (team[4] === team[3] ? 'winner' : '')}>({team[2]}) {team[3]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='playoff-tree--bracket'>
                    <h3>Semis</h3>
                    <ul>
                        {semis.map((team,index) => (
                            <li key={index}>
                                <p className={"team " + (team[4] === team[1] ? 'winner' : '')}>({team[0]}) {team[1]}</p>
                                <p className={"team " + (team[4] === team[3] ? 'winner' : '')}>({team[2]}) {team[3]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='playoff-tree--bracket playoff-tree--bracket_finals'>
                    <h3>Finals</h3>
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
            <div className={showCupWinner ? 'playoff-tree--cupwinner': 'playoff-tree--cupwinner_hidden'}>
                <img src={`/rssl/teams/stanleycup.png`} />
                {/* <h1>{cupWinner}</h1> */}
                <div className="ribbon">
                    <div className="ribbon-stitches-top"></div>
                    <div className="ribbon-content"><h3>{cupWinner}</h3></div>
                    <div className="ribbon-stitches-bottom"></div>
                </div>
            </div>
            
        </div>
    )
}
export default PlayoffTree;