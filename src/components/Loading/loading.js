import './loading.scss';

function Loading(){
    return(
        <div className="loadingWrapper">
            <p>Hang tight fellas, grabbing the data.</p>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loading;