import styled from "styled-components"

export const ContNav = styled.div`
    width:100%;
    padding-top:1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const BoxLog = styled.div`
    width:5%;
    margin-left:2.5%;
    position: relative;
`
export const Log = styled.img`
    width:100%;
    height: 100%;
    position: sticky;
    &:hover{
        transform: scale(1.1);
    }
`   
export const BoxNav = styled.div`
    width:50%;
    margin-right:13%;
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
export const List = styled.li`
    width:97%;
    padding:1% 2%;
    font-size:1.2vw;
    border-radius:2vw ;
    list-style: none;
    outline: none;
    &:hover{
        transition: 0.2s;
        outline:solid 0.2vw #FFAC2D;
    }
`
export const Anc = styled.a`
    width:50%;
    text-align: center;
    text-decoration: none;
    color:white;
`

//


export const Cont = styled.div`
    width:100%;
    padding: 7% 0% 0 0; 
`
export const ContTitl = styled.div`
    margin-left: 10%;
`

export const Titl = styled.h1`
    width:79%;
    overflow: hidden;
    line-height:9vh;
    font-size: 3.5vw;
    text-shadow: 2px 0px 0px #FFAC2D;
    color:#FFAC2D;
`
export const Bars = styled.span`
    text-shadow: none;
    font-weight: lighter;
    color: orangered;
    padding:0 3% 0 0;
`

export const Card = styled.div`
    width:49%;
    height: 100%;
    margin: 2% 0 0 10%;
    padding:0 1.3%;
    background-color: #fff;
    border-radius:1vw;

`
export const ContBord = styled.div`
    width:100%;
`
export const BoxBord = styled.div`
    width:4vw;
    padding:2% 0;
    display: flex;
`
export const Close = styled.button`
    width: 100%;
    padding: 11% 0.1%;
    margin:0 5%;
    border: none;
    border-radius: 50%;
    background-color: #00145D;
    &:hover{
        transform:scale(1.1);
    }

`
export const Bord = styled.div`
    width:91%;
    height:0.8vh;
    border-radius: 1vw;
    background-color:#00145D ;
`
export const ContInscre= styled.div`
    width:100%;
    padding:3% 0;
`
export const Inscre = styled.h2`
    width:100%;
    font-size: 3.1vw;
    color:#00145D;
`
export const InscreParg = styled.p`
    font-size:1.9vw;
    padding:2.5% 0 ;
`
export const ContLink = styled.div`
    font-size: 1.7vw;
    margin-left: 9.8%;
`
export const BoxParg = styled.span`
    font-weight:bolder ;
    color:#FED5B2;
`
export const AncParg = styled.a`
    text-decoration: none;
    color:#FED5B2;
    font-weight: lighter;

`