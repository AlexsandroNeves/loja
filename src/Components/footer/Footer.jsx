import React, { Component } from 'react'
import './footer.css'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import linkedin from './img/linkedin.png'
import youtube from './img/youtube.png'
import visa from './img/visa.png'
import mastercard from './img/mastercard.png'
import powered from './img/powered.png'
const Footer = () => {

    return (
        <footer className='container--footer'>

            <div className='footer--description'>

                <div>
                    <h3>Informações</h3>
                    <div>
                        <p>Quem Somos</p>
                        <p>Prazo de Envio</p>
                        <p>Troca e Devolução</p>
                        <p>Promoções e Cupons</p>
                    </div>
                </div>

                <div>
                    <h3>Minha Conta</h3>
                    <div>
                        <p>Minha conta</p>
                        <p>Meus pedidos</p>
                        <p>Cadastra-se</p>
                    </div>
                </div>

                <div>
                    <h3>Onde nos Encontrar </h3>
                    <div>
                        <p>Lojas</p>
                        <p>Endereços</p>
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
