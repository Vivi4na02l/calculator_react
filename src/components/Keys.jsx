import { styled } from "styled-components";

const BtnNbr = styled.button`
    background-color: #818181;
    margin: 0.2rem;
`;

const BtnSymbols = styled.button`
    background-color: #587113;
    color: #fff;
    margin: 0.2rem;
`;

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
                if (j != 4) { {/* if it isn't the last column = numbers */}
                    buttons.push(
                        <BtnNbr key={`btn${j + (i-1) * 3}`}
                                onClick={() => nbrClicked((j + (i-1) * 3).toString())}>
                            {j + (i-1) * 3}
                        </BtnNbr>
                    );
                } else { {/* last column = symbols */}
                    buttons.push(
                        <BtnSymbols key={`op${operator.name}`}
                                onClick={() => symbolClicked(operator[i-1])}>
                            {operator[i-1].display}
                        </BtnSymbols>
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
                <BtnNbr onClick={() => nbrClicked("0")}>0</BtnNbr>
                <BtnNbr onClick={() => nbrClicked(".")}>.</BtnNbr>
                <BtnSymbols onClick={() => symbolClicked({display: "=",
                                                      op: "=",
                                                      name: "Equal"})}>=</BtnSymbols>
                <BtnSymbols onClick={() => symbolClicked({display: "×",
                                                      op: "*",
                                                      name: "Multiplication"})}>×</BtnSymbols>
            </div>
        </section>
    )
}