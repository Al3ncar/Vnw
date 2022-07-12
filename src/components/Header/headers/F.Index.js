import React,{useState} from "react";
import * as S from "./styled"
import MiniLog from "./img_header/MiniLog.svg"
import menu from "./img_header/menu.jpg"
import MenuBurg from "./mod"

export default function FirHeader(){
    const [mod, setMod] = useState(false)
    const openMod = () => {
        setMod(true)
    }
    return(
        <section>
            <S.ContNav>
                <S.BoxLog>
                    <S.Log src={MiniLog} alt="Logo VainaWeb"/>
                </S.BoxLog>
                <S.BoxNav>
                    <S.Navg>
                        <S.NavList>
                            <S.Anc href="#sob"><S.List>Sobre</S.List></S.Anc>
                            <S.Anc href="#for"><S.List>Formação</S.List></S.Anc>              
                            <S.Anc href="#eq"><S.List>Equipe</S.List></S.Anc>   
                            <S.Anc href="#ev"><S.List>Eventos</S.List></S.Anc>   
                            <S.Anc href="#con"><S.List>Contatos</S.List></S.Anc>  
                            <S.Anc href="https://al3ncar.github.io/Academia/" target="_blank"><S.List>Academia</S.List></S.Anc>  
 
                        </S.NavList>
                    </S.Navg>
                </S.BoxNav>
                <S.CardMod>
                
                    <S.bordMod  onClick={()=>{openMod()}}>
                        <S.Menu src={menu} alt=""/>
                    </S.bordMod>
                    {mod ? ( <MenuBurg onClose={() => {setMod(false)}}/>):null}
                </S.CardMod>
         </S.ContNav>
        </section>
    )
}