import Back from "./img_footer/BackFooter.png"
import styled from "styled-components"
    export const Cont = styled.section`
        width:100%;
        background-image: url(${Back});
        background-repeat: no-repeat;
        background-size: 100vw 100%;
    `
    export const TitlContato = styled.div`
        padding:3% 0  5% 8%;
        font-weight: bolder;
        font-size: 3vw;
        color: ${(props)=>props.theme.collors.cor8};
        @media(max-width:500px){
            padding:9% 8%;
            font-size: 5vw;
        }
    `
    export const ContRedes = styled.div`
        padding-left: 7%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    export const Perf = styled.p`
        width: 17%;
        margin: 2.5% 0 11% 0;
        font-size: 1.2vw;
        font-weight: bolder;
        color: white;
        @media(max-width:500px){
            width: 40%;
            font-size:3vw;
        }
    `
    export const ContIcon = styled.div`
        width:80%;
        margin-bottom:8%;
        @media(max-width:500px){
            
        }
    `
    export const BoxAnc = styled.a`
        width:30%;

    `
    export const Redes = styled.img`
        width: 6.5%;
        margin:0 1%;
        @media(max-width:500px){
            width:15%;
        }
    `