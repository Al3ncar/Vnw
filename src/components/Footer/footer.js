import React from 'react';
import * as S from "./styled"

import Face from "./img_footer/face.svg"
import Insta from "./img_footer/insta.svg"
import Link from "./img_footer/link.svg"
import Medium from "./img_footer/medium.svg"
import Tube from "./img_footer/tube.svg"

export default function Footer(){
    return(
        <S.Cont>
            <S.TitlContato>
                <h3>Contato</h3>
            </S.TitlContato>
            <S.ContRedes>
                <S.Perf>
                    Siga nossas redes sociais
                    e fique conectado com todas as atividades.
                </S.Perf>
                <S.ContIcon>
                    <S.BoxAnc href="https://www.facebook.com/vainaweb/" target="_blank">
                        <S.Redes src={Face} alt="Facebook"/>
                    </S.BoxAnc>
                    <S.BoxAnc href="https://www.instagram.com/vainaweb/" target="_blank">
                        <S.Redes src={Insta} alt="Instagram"/>
                    </S.BoxAnc>
                    <S.BoxAnc href="https://br.linkedin.com/company/vainaweb" target="_blank">
                        <S.Redes src={Link} alt="Linkedin"/>
                    </S.BoxAnc>
                    <S.BoxAnc href="https://medium.com/@olavainaweb" target="_blank">
                        <S.Redes src={Medium} alt="Medium"/>
                    </S.BoxAnc>
                    <S.BoxAnc href="https://www.youtube.com/c/VaiNaWeb/videos?app=desktop" target="_blank">
                        <S.Redes src={Tube} alt="Youtube"/>
                    </S.BoxAnc>
                </S.ContIcon>
            </S.ContRedes>
        </S.Cont>
    )
}
