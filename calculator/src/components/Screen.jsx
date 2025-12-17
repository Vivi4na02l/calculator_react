export default function Screen({screenDisplay}) {
    return (
        <section id="screenSection">
            <div id="screen"> {/* actual screen */}
                <p>{screenDisplay}</p>
            </div>
            <div id="acBtnDiv">
                <button>AC</button> {/* ALL CLEAR key */}
            </div>
        </section>
    )
}