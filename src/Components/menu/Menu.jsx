
import Imgnovidade from '../../assets/img/novidades.png';
import '../menu/menu.css';
const Menu = () => {
    return (
        <>
            <nav>
                <ul className="ul--menu">
                    <li className='li--novidade'> <img src={Imgnovidade} alt="novidade" /> Novidade</li>
                    <li>Vestidos</li>
                    <li>Roupas</li>
                    <li>Sapatos</li>
                    <li>Lingerie</li>
                    <li>Acessórios</li>
                    <li>OUTLET</li>
                </ul>
            </nav>
        </>
    )
}
export default Menu;