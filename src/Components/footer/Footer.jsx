import React, { Component } from 'react'
import './footer.css'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import linkedin from './img/linkedin.png'
import youtube from './img/youtube.png'
import visa from './img/visa.png'
import mastercard from './img/mastercard.png'
import powered from './img/powered.png'
import { TitleFooter } from '../../ComponentsStyles/Components'
const Footer = () => {

    return (
        <footer className='container--footer'>

            <div className='footer--description'>

                <div>
                    <TitleFooter>Informações</TitleFooter>
                    <div>
                        <p className='footer-link'>Quem Somos</p>
                        <p className='footer-link'>Prazo de Envio</p>
                        <p className='footer-link'>Troca e Devolução</p>
                        <p className='footer-link'>Promoções e Cupons</p>
                    </div>
                </div>

                <div>
                    <TitleFooter>Minha Conta</TitleFooter>
                    <div>
                        <p className='footer-link'>Minha conta</p>
                        <p className='footer-link'>Meus pedidos</p>
                        <p className='footer-link'>Cadastra-se</p>
                    </div>
                </div>

                <div>
                    <TitleFooter>Onde nos Encontrar </TitleFooter>
                    <div>
                        <p className='footer-link'>Lojas</p>
                        <p className='footer-link'>Endereços</p>
                    </div>
                </div>

            </div>

            <section className='footer-copy'>
                <div className='footer--medias' >
                    <div>
                        <img src={facebook} alt="Facebook" />
                    </div>
                    <div>
                        <img src={linkedin} alt="Linkedin" />
                    </div>
                    <div>
                        <img src={instagram} alt="Instagram" />
                    </div>
                    <div>
                        <img src={youtube} alt=" Youtube" />
                    </div>
                </div>

                <div className='footer--payment'>
                    <div>
                        <img src={visa} alt="Visa" />
                    </div>
                    <div>
                        <img src={mastercard} alt="Master Card" />
                    </div>
                    <div>
                        <img src={visa} alt="Visa" />
                    </div>
                    <div>
                        <img src={mastercard} alt="Master Card" />
                    </div>
                </div>

                <div className='footer--logo'>
                    <div>
                        <img src={powered} alt="Powered" />
                    </div>
                </div>
            </section>

        </footer>
    )

}

export default Footer;
