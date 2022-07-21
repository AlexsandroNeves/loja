
import { TitleSection } from '../../ComponentsStyles/Components';
import './marca.css';
import comma from './img/comma.png'
import melissa from './img/melissa.png'
import forever from './img/forever.png'
import zara from './img/zara.png'
import annTaylor from './img/annTaylor.png'
const Marca = () => {

    return (
        <>
            <TitleSection marginBottom={'24px'}>Marcas Parceiras</TitleSection>

            <div className='container--marcas'>
              
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
        </>
    )

}
export default Marca;