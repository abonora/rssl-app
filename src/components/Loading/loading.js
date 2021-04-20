import './loading.scss';

function Loading(){
    return(
        <div className="loadingWrapper">
            <p>Hang tight fellas, grabbing the data.</p>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loading;