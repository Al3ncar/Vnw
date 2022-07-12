import React from "react";
import * as S from "./styled"
import MiniLog from "./img_header/MiniLog.svg"

export default function FirHeader(){
    
    return(
        <>
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
                            </S.NavList>
                        </S.Navg>
                    </S.BoxNav>
                </S.ContNav>
            </section>
        </>
    )
}