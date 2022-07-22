import { ContainerTipBar } from "../../ComponentsStyles/Components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgEstoque from './img/estoque.png'
import imgTroca from './img/troca.png'
import imgGanhe from './img/ganhe.png'
import imgFrete from './img/frete.png'
import imgMundo from './img/Tipbar01.png'
import '../tipbar/tipbar.css'
const Tipbar = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <h5 className="title--tipbar">Por que comprar na Maeztra?</h5>
            <div className="container--tipbar desktop-tipbar">
                <ContainerTipBar marginLeft={'15px'}>
                    <img src={imgMundo} alt="" />
                    <div>
                        <h4>
                            Produtos importados
                        </h4>
                        <p className="description--tipbar">Produtos de alta qualidade</p>
                    </div>
                </ContainerTipBar>
                <ContainerTipBar marginLeft={'15px'}>
                    <img src={imgEstoque} alt="" />
                    <div>
                        <h4>
                            Estoque no Brazil
                        </h4>
                        <p className="description--tipbar">Produtos mais perto de você!</p>
                    </div>
                </ContainerTipBar>

                <ContainerTipBar marginLeft={'15px'}>
                    <img src={imgTroca} alt="" />
                    <div>
                        <h4>
                            Trocas Garantidas
                        </h4>
                        <p className="description--tipbar">Trocas em até 48 horas, vejas as regras</p>
                    </div>
                </ContainerTipBar >
                <ContainerTipBar marginLeft={'15px'}>
                    <img src={imgGanhe} alt="" />
                    <div>
                        <h4>
                            Ganhe 5% off
                        </h4>
                        <p className="description--tipbar">Pagando à vista no Cartão</p>
                    </div>
                </ContainerTipBar>
                <ContainerTipBar marginLeft={'15px'}>
                    <img src={imgFrete} alt="" />
                    <div>
                        <h4>
                            Frete Grátis
                        </h4>
                        <p className="description--tipbar">Em compras acima de R$ 499,00</p>
                    </div>
                </ContainerTipBar>

            </div>

            <div className="container--tipbar mobile-tipbar">
                <Slider {...settings}>
                    <ContainerTipBar marginLeft={'5%'}>
                        <img src={imgMundo} alt="" />
                        <div>
                            <h4>
                                Produtos importados
                            </h4>
                            <p className="description--tipbar">Produtos de alta qualidade</p>
                        </div>
                    </ContainerTipBar >
                    <ContainerTipBar  marginLeft={'5%'}>
                        <img src={imgEstoque} alt="" />
                        <div>
                            <h4>
                                Estoque no Brazil
                            </h4>
                            <p className="description--tipbar">Produtos mais perto de você!</p>
                        </div>
                    </ContainerTipBar>
                    <ContainerTipBar  marginLeft={'5%'}>
                        <img src={imgTroca} alt="" />
                        <div>
                            <h4>
                                Trocas Garantidas
                            </h4>
                            <p className="description--tipbar">Trocas em até 48 horas, vejas as regras</p>
                        </div>
                    </ContainerTipBar>
                    <ContainerTipBar  marginLeft={'5%'}>
                        <img src={imgGanhe} alt="" />
                        <div>
                            <h4>
                                Ganhe 5% off
                            </h4>
                            <p className="description--tipbar">Pagando à vista no Cartão</p>
                        </div>
                    </ContainerTipBar>
                    <ContainerTipBar  marginLeft={'5%'}>
                        <img src={imgFrete} alt="" />
                        <div>
                            <h4>
                                Frete Grátis
                            </h4>
                            <p className="description--tipbar">Em compras acima de R$ 499,00</p>
                        </div>
                    </ContainerTipBar>
                </Slider >
            </div>
        </>

    )
}

export default Tipbar