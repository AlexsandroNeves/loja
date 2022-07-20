
import { Button } from '../../ComponentsStyles/Components';
import '../banner/banner.css'
const Banner = () => {
    return (
        <>
            <div className='banner--container'>
                <h3>Promoções de Outono</h3>
                <p> Confira os melhores look para combinar <br/> com  você nesse Outono</p>
                <Button>Conferir</Button>
            </div>
        </>
    )
}

export default Banner;