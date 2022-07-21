import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from '../../ComponentsStyles/Components';
import '../banner/banner.css'
const Banner = () => {

    var settings = {
        dots: true,
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
                    dots: true,
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
            <div className="carousel--box">

                <Slider {...settings}>
                    <div className='banner--container'>
                        <h3>Promoções de Outono</h3>
                        <p> Confira os melhores look para combinar <br /> com  você nesse Outono</p>
                        <Button width={'128px'} borda={'10px'}>Conferir</Button>
                    </div>
                    <div className='banner--container'>
                        <h3>Promoções de Inverno</h3>
                        <p> Confira os melhores look para combinar <br /> com  você nesse Outono</p>
                        <Button width={'128px'} borda={'10px'}>Conferir</Button>
                    </div>
                    <div className='banner--container'>
                        <h3>Promoções de Primavera</h3>
                        <p> Confira os melhores look para combinar <br /> com  você nesse Outono</p>
                        <Button width={'128px'} borda={'10px'}>Conferir</Button>
                    </div>
                    <div className='banner--container'>
                        <h3>Promoções de Verão </h3>
                        <p> Confira os melhores look para combinar <br /> com  você nesse Outono</p>
                        <Button width={'128px'} borda={'10px'}>Conferir</Button>
                    </div>
                </Slider>
            </div>
        </>

    )
}

export default Banner;