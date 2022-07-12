import React from 'react';
import * as S from "./styled"

export default function ModHeader({id=`modal`, onClose=()=>{}}){
    const Hand = (event) => {
        if (event.target.id === id) onClose();
      };
    return(
        <S.ContModal id={id} onClick={Hand}>
            <S.CardModal>
                <S.NavMod>
                    <S.BtnMod onClick={onClose}>x</S.BtnMod>
                    <ul>
                        <S.AncMod href="#sob">
                            <S.LinkMod>Sobre</S.LinkMod>
                        </S.AncMod>
                        <S.AncMod href="#for">
                            <S.LinkMod>Formação</S.LinkMod>
                        </S.AncMod>
                        <S.AncMod href="#eq">
                            <S.LinkMod>Equipe</S.LinkMod>
                        </S.AncMod>
                        <S.AncMod href="#ev">
                            <S.LinkMod>Evento</S.LinkMod>
                        </S.AncMod>
                        <S.AncMod href="#con">
                            <S.LinkMod>Contato</S.LinkMod>
                        </S.AncMod>
                    </ul>
                </S.NavMod>
            </S.CardModal>
        </S.ContModal>

    )
}

