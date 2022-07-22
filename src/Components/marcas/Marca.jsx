
import { TitleSection } from '../../ComponentsStyles/Components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './marca.css';
import comma from './img/comma.png'
import melissa from './img/melissa.png'
import forever from './img/forever.png'
import zara from './img/zara.png'
import annTaylor from './img/annTaylor.png'
const Marca = () => {
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
            <TitleSection marginBottom={'24px'}>Marcas Parceiras</TitleSection>

            <div className='container--marcas marcas-desktop' >

                <div>
                    <img className='marca--img' src={comma} alt="Comma" />
                </div>
                <div>
                    <img className='marca--img' src={melissa} alt="Melissa" />
                </div>
                <div>
                    <img className='marca--img' src={forever} alt="Forever" />
                </div>
                <div>
                    <img className='marca--img' src={zara} alt="Zara" />
                </div>

                <div>
                    <img className='marca--img' src={annTaylor} alt="ann Taylor" />
                </div>

            </div>

            <div className='container--marcas marcas-mobile' >
                <Slider {...settings}>
                    <div>
                        <img className='marca--img' src={comma} alt="Comma" />
                    </div>
                    <div>
                        <img className='marca--img' src={melissa} alt="Melissa" />
                    </div>
                    <div>
                        <img className='marca--img' src={forever} alt="Forever" />
                    </div>
                    <div>
                        <img className='marca--img' src={zara} alt="Zara" />
                    </div>

                    <div>
                        <img className='marca--img' src={annTaylor} alt="ann Taylor" />
                    </div>
                </Slider>
            </div>
        </>
    )

}
export default Marca;