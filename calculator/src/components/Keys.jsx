export default function Keys() {
    function eachRow() {
        let rows = []
        let operator;

        for (let i = 1; i <= 3; i++) {
            let buttons = [];

            if (i == 1) {
                operator = {
                    display: "+",
                    op: "+",
                    name: "Plus"
                }
            } else if (i == 2) {
                operator = {
                    display: "-",
                    op: "-",
                    name: "Minus"
                }
            } else {
                operator = {
                    display: "÷",
                    op: "/",
                    name: "Divide"
                }
            }

            for (let j = 1; j <= 4; j++) {
                if (j != 4) {
                    buttons.push(<button key={`btn${j + (i-1) * 3}`}>{j + (i-1) * 3}</button>);
                } else {
                    buttons.push(<button key={`op${operator.name}`}>{operator.display}</button>);
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
                <button>0</button>
                <button>.</button>
                <button>=</button>
                <button>×</button>
            </div>
        </section>
    )
}