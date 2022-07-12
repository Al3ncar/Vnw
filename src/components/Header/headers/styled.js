import styled from "styled-components"

export const ContNav = styled.div`
    width:100%;
    padding-top:2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BoxLog = styled.div`
    margin-left:2.5%;
    position:relative;

`
export const Log = styled.img`
    width:5%;
    position: fixed;
    top:2%;
    &:hover{transform: scale(1.1);}
`   
export const BoxNav = styled.div`
    width:50%;

    margin-right: 13%;
    @media (max-width:800px){
        width:60%;
        padding-top:1%;
        display: none;
    }
`
export const Navg = styled.nav`
    width:100%;

`
export const NavList = styled.ul`
    width:100%;
    list-style:none;
    display: flex;
    justify-content: space-around;

`
export const Anc = styled.a`
    width:50%;
    text-align: center;
    text-decoration: none;
    color:white;
`
export const List = styled.li`
    width:100%;
    padding:1% 2%;
    font-size:1.2vw;
    border-radius:2vw ;
    list-style: none;
    outline: none;
    &:hover{
        transition: 0.2s;
        outline:solid 0.2vw  #FFAC2D;
    }
    @media (max-width:800px){
        font-size: 2vw;
    }
    @media (max-width:500px){
        width:100%;
        font-size:2.8vw;
    }   
`
export const CardMod = styled.div`
    width:5%;
    height:100%;
    margin-right:1%;
    display: none;

    @media(max-width:500px){
        display:flex;
        justify-content:center;

    }
`
export const bordMod = styled.button`
    width:100%;
    background-color:transparent;
    border: none;
`
export const Menu  = styled.img`
    width:100%;
`

export const ContModal = styled.section`
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: rgba(0, 0, 0, .5);
    position:absolute;
    top:0;
    left:0;
    right: 1%;

`
export const CardModal = styled.div`
    width:50%;
    margin-top: 8%;
    background-color: #00145D;
    border-radius: 2vw;

`
export const BtnMod = styled.button`
    padding:  1% 5%;
    border-radius: 50%;
    font-size: 5vw;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const NavMod = styled.nav`
    width: 100%;
    height: 100%;
`
export const AncMod = styled.a`
    width:100%;
    height: 100%;
    font-size: 3vw;
    list-style: none;
    text-decoration: none;
    color: black;
`

export const LinkMod = styled.li`
    width: 99%;
    height: 100%;
    padding: 5%;
    margin:1%;
    border-radius: 3vw;
    color: orange;
    font-weight:bolder;
    &:hover{
        outline:solid 0.2vw orange;
    }
`
//


export const Cont = styled.div`
    width:100%;
    padding: 13vh 0% 0 0; 
`
/* const Anime = keyframes`
    from{
        transform: translateX(30px);
        opacity:0%;
    }to{
        opacity: 100%;
        transform: translateX(0px)
    }
` */
export const BoxVnw = styled.div`
    width:90%;
    display: none;
    @media (max-width:800px){

    }
    @media (max-width:500px){
        width:100%;
        display: flex;
        justify-content: center;

    }

`
export const Vnw = styled.img`
    width:20%;
    @media (max-width:500px){
        width:50%;
    }
`
export const ContTitl = styled.div`
    margin-left: 10%;
    @media (max-width:800px){
        font-size: 5vw;
    }
`

export const Titl = styled.h1`
    width:83%;
    line-height:9vh;
    font-size: 3.5vw;
    text-shadow: 2px 0px 0px #FFAC2D;
    color: #FFAC2D;
    @media (max-width:800px){
        margin-top:7%;
        width: 95%;
        font-size: 4vw;
    }
    @media(max-width:500px){
        width:95%;
        margin-top:14%;
        font-size:5.5vw;
        line-height: 5vh;

    }

`


export const Bars = styled.span`
    text-shadow: none;
    font-weight: lighter;
    color: orangered;
    padding:0 3% 0 0;
`

export const Card = styled.div`
    width:45%;
    height: 100%;
    margin: 6vh 0 0 10%;
    padding:0 1.3%;
    background-color: ${(props) => props.theme.collors.cor1};
    
    border-radius:1vw;
    &:hover{
        transform: scale(1.01);
    }
    @media(max-width:800px){
        width:80%;
    }

`
export const ContBord = styled.div`
    width:100%;
`
export const BoxBord = styled.div`
    width:4vw;
    padding:2% 0;
    display: flex;
    @media(max-width:500px){
        width:10%;

    }

`
export const Close = styled.button`
    width: 100%;
    padding: 11% 0.1%;
    margin:0 5%;
    border: none;
    border-radius: 50%;
    background-color:${(props) => props.theme.collors.cor2};
    &:hover{
        transform:scale(1.15);
    }

`
export const Bord = styled.div`
    width:91%;
    height:0.8vh;
    border-radius: 1vw;
    background-color:${(props) => props.theme.collors.cor2} ;
`
export const ContInscre= styled.div`
    width:100%;
    padding:3% 0;
`
export const Inscre = styled.h2`
    width:100%;
    font-size: 3.1vw;
    color:${(props) => props.theme.collors.cor2};
    @media(max-width:500px){
        font-size:5vw;

    }

`
export const InscreParg = styled.p`
    font-size:1.9vw;
    padding:2.5% 0 ;
    color:${(props) => props.theme.collors.cor2};
    @media(max-width:500px){
        font-size:3vw;

    }
`
export const ContLink = styled.div`
    font-size: 1.7vw;
    margin-left: 9.8%;
    @media(max-width:500px){
        font-size:3vw;

    }

`
export const BoxParg = styled.span`
    font-weight:bolder ;
    color:#FED5B2;
`
export const AncParg = styled.a`
    text-decoration: none;
    color:#FED5B2;
    font-weight: lighter;
    &:hover{
        text-decoration: underline ;
    }

`