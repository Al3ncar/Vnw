import styled from "styled-components"

//@media (max-width:500px){}

export const Cont = styled.section`
    width:100%;
    display: flex;
    align-items:center;
    @media (max-width:500px){
        flex-direction: column-reverse;
        justify-content: center;
    }
`
export const BoxLog = styled.div`
    width:32%;
    margin:5% 5% 0 10.1%;
    @media (max-width:500px){margin: 0;}
`
export const Log = styled.img`
    width:100%;
    &:hover{
        transform:scale(1.1);
        opacity:95%;
    }
`
export const ContSob = styled.div`
    width:65%;
    margin:5% 2% 0  4.5% ;
    @media (max-width:500px){margin:0;}
`
export const ContTitl = styled.div`
    width:100%;
    text-align: center;
    padding: 3.5% 0 ;
`
export const Titl = styled.h2`
    width:100%;
    font-size: 3vw;
    font-weight: bolder;
    text-shadow:1px 0px 0px #00145D;
    color:#00145D;
    @media (max-width:500px){
        font-size:5vw;
        padding:9% 0 0% 0;
    }
`
export const ContParg = styled.div`
    width:100%;
    font-size:1.5vw;
    padding: 5% 0;
    @media (max-width:500px){font-size:2.9vw;}
`
export const Parg = styled.p`
    width:98%;
    font-weight: 400;
    margin-bottom:5%;

`

//

export const ContForm =styled.section`
    width:100%;
    display: flex;
    align-items:flex-end;
    @media (max-width:500px){flex-direction: column;}
`
export const BoxCont = styled.section`
    width:50%;
   margin-left: 10%;
   @media (max-width:500px){
        width: 100%;
        padding-left:10%;
    }
`
export const BoxFor = styled.div`
    padding:9% 0 3% 0;
    font-size: 2.5vw;
    font-weight: bolder;
    color:#00145D   ;
    @media (max-width:500px){
        width: 100%;
        font-size:4.5vw;
    }
`

export const ContsNote = styled.div`
    @media (max-width:500px){
        width:100%;
        display:flex;
        

    }

`
export const ContNote = styled.div`
    width:100%;
    display:flex; 
    @media (max-width:500px){
        padding: 1.5%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }   
`
export const BoxNote = styled.div`
    width:20%;
    margin: 5% 4% 0 2%;
    @media (max-width:500px){
        width:20%;
    }
    
`
export const Note = styled.img`
    width:100%;
    border-radius:50%;
    &:hover{
        transform:scale(1.1);
        box-shadow:0px 3px 2px rgba(0, 0, 0, 0.8);
    }
    
`
export const BoxBack = styled.div`
    width:100%;
    padding-top:5%;
    display: flex;
    justify-content:flex-end;
`
export const Back = styled.img`
    width:90%;
    &:hover{
        opacity:95%;
    }
`
export const FormParg = styled.div`
    width:61%;
    font-size:1.2vw;
    @media (max-width:500px){
        width:100%;
        font-size:2.5vw;
    }
`
export const ContTitlForm = styled.div`
    width:100%;
    padding:5% 0 5% 0;
    font-size:2.1vw;
    color:#00145D;
    @media (max-width:500px){
        text-align: center;
        font-size:4.6vw;

    }
`