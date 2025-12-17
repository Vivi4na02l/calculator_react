export default function Keys({nbrClicked, symbolClicked}) {
    function eachRow() {
        let rows = []
        let operator = [
            {
                display: "+",
                op: "+",
                name: "Plus"
            },
            {
                display: "-",
                op: "-",
                name: "Minus"
            },
            {
                display: "÷",
                op: "/",
                name: "Division"
            }
        ];

        for (let i = 1; i <= 3; i++) {
            let buttons = [];

            for (let j = 1; j <= 4; j++) {
                if (j != 4) {
                    buttons.push(
                        <button key={`btn${j + (i-1) * 3}`}
                                onClick={() => nbrClicked((j + (i-1) * 3).toString())}>
                            {j + (i-1) * 3}
                        </button>
                    );
                } else {
                    buttons.push(
                        <button key={`op${operator.name}`}
                                onClick={() => symbolClicked(operator[i-1])}>
                            {operator[i-1].display}
                        </button>
                    );
                }
            }

            rows.push(
                <div key={`row${i}`} className="row">
                    {buttons}
                </div>
            )
        }

        return <>{rows}</>
    };

    return (
        <section>
            {eachRow()} {/* 1st, 2nd and 3rd row */}
            
            <div className="row"> {/* 4th row */}
                <button onClick={() => nbrClicked("0")}>0</button>
                <button onClick={() => nbrClicked(".")}>.</button>
                <button onClick={() => symbolClicked({display: "=",
                                                      op: "=",
                                                      name: "Equal"})}>=</button>
                <button onClick={() => symbolClicked({display: "×",
                                                      op: "*",
                                                      name: "Multiplication"})}>×</button>
            </div>
        </section>
    )
}