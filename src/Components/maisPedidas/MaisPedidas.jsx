import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, TitleSection } from '../../ComponentsStyles/Components'
import produto01 from './img/produto0.png'
import produto02 from './img/produto1.png'
import paleta1 from './img/paleta0.png'
import paleta2 from './img/paleta1.png'
import './maisPedidas.css'
export const MaisPedidas = () => {

    var settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };
    return (
        <>
                    <TitleSection marginBottom={'24px'}>As mais pedidas</TitleSection>
            <section className='container--mais-pedidas'>

                <div>
                </div>

                <Slider {...settings}>

                    <div className='box--product'>
                        <div>
                            <img src={produto01} alt="" />
                        </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta1} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 500,00
                            </div>

                            <p className='product-title'>
                                Faux Suede Mini Skirt
                            </p>

                            <legend className='product-description'>

                                A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>
                    <div className='box--product'>
                        <div>
                        <img src={produto02} alt="" />
                        </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta2} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 320,00
                            </div>
                            <p className='product-title'>
                                Ruched Rose Print Mini Skirt
                            </p>

                            <legend className='product-description'>

                                A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>
                    <div className='box--product'>
                    <div>
                        <img src={produto01} alt="" />
                    </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta1} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 500,00
                            </div>
                            <p className='product-title'>
                                Faux Suede Mini Skirt
                            </p>
                            <legend className='product-description'>

                                A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>
                    <div className='box--product'>
                        <div>
                            <img src={produto02} alt="" />
                        </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta2} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 320,00
                            </div>
                            <p className='product-title'>
                                Ruched Rose Print Mini Skirt
                            </p>
                            <legend className='product-description'>

                                A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>
                    <div className='box--product'>
                        <div>
                            <img src={produto01} alt="" />
                        </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta1} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 480,00
                            </div>
                            <p className='product-title'>
                                Faux Suede Mini Skirt
                            </p>
                            <legend className='product-description'>

                                A faux suede mini skirt featuring exposed button-front closures and panel seam construction.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>
                    <div className='box--product'>
                        <div>
                            <img src={produto02} alt="" />
                        </div>
                        <div className='container-description'>
                            <div>
                            <img src={paleta2} alt="" />
                            </div>
                            <div className='product--value'>
                                R$ 350,00
                                <p className='product-title'>
                                    Ruched Rose Print Mini Skirt
                                </p>
                            </div>

                            <legend className='product-description'>
                                A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.
                            </legend>
                            <Button width={'254px'} borda={'4px'}>Adicionar</Button>
                        </div>
                    </div>

                </Slider>
            </section >
        </>
    )
}
