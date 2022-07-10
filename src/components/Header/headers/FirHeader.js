import React from "react";
import * as S from "./styled"
import MiniLog from "../img_header/MiniLog.svg"

export default function FirHeader(){
    return(
        <>
            <section>
                <S.ContNav>
                    <S.BoxLog>
                        <S.Log src={MiniLog} alt=""/>
                    </S.BoxLog>
                    <S.BoxNav>
                        <S.Navg>
                            <S.NavList>
                                <S.Anc href=""><S.List>Sobre</S.List></S.Anc>
                                <S.Anc href=""><S.List>Formação</S.List></S.Anc>              
                                <S.Anc href=""><S.List>Equipe</S.List></S.Anc>   
                                <S.Anc href=""><S.List>Eventos</S.List></S.Anc>   
                                <S.Anc href=""><S.List>Contatos</S.List></S.Anc>   
                            </S.NavList>
                        </S.Navg>
                    </S.BoxNav>
                </S.ContNav>
            </section>
        </>
    )
}