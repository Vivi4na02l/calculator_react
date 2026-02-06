import { styled } from "styled-components";

const BtnAC = styled.button`
    background-color: #64b100;

    margin-left: 0.2rem;
    margin-right: 0.2rem;
`;

const DivScreen = styled.div`
    margin-left: 0.2rem;
    margin-right: 0.2rem;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    border-radius: 0.5rem;
    border: solid #64b100 1px;

    background-color: #1d1d1d;
`;

const DivAc = styled.div`
    display: flex;
`;

export default function Screen({screenDisplay, acClicked}) {
    return (
        <section id="screenSection">
            <DivScreen id="screen"> {/* actual screen */}
                <p>{screenDisplay}</p>
            </DivScreen>
            <DivAc id="acBtnDiv">
                <BtnAC onClick={acClicked}>AC</BtnAC> {/* ALL CLEAR key */}
            </DivAc>
        </section>
    )
}