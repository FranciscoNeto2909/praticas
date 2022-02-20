import styled from "styled-components";

export const Container = styled.div`
    background-color:${({color}) => color ? color : "#00f"};
    color:#000;
    display:flex;
    padding:10px 0;
    margin:10px 25px;
    margin-bottom:10px;
    border-radius:5px;
    justify-content:center;
    align-items:center;

    div{
        padding:5px 10px;
        background-color:red;
        text-align:center;
        margin:5px 10px;
        border:1px solid black;
        border-radius:5px;
    }
    @media(max-width:514px){
        width:100%;
        margin:auto;
        padding:5px;
        flex-direction:column;
        div{
            width:100%;
        }
    }
`