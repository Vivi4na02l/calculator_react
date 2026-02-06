export default function Screen({screenDisplay, acClicked}) {
    return (
        <section id="screenSection">
            <div id="screen"> {/* actual screen */}
                <p>{screenDisplay}</p>
            </div>
            <div id="acBtnDiv">
                <button onClick={acClicked}>AC</button> {/* ALL CLEAR key */}
            </div>
        </section>
    )
}