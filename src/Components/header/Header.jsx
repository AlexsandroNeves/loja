import Menu from "../menu/Menu";
import logo from '../../assets/img/logo-maeztra-novo.png'
import user from '../../assets/img/user.png'
import favoritos from '../../assets/img/favoritos.png'
import carrinho from '../../assets/img/carrinho.png'
import menuMobile from '../../assets/img/drawer.png'
import lupa  from '../../assets/img/lupa.png'
import shopping  from '../../assets/img/icon-shopping.png'
import '../header/header.css'
import { Button } from "../../ComponentsStyles/Components";
const Header = () => {
    return (
        <>
            <header>
                <div className="div--promocao">
                    <p className="paragrafo--promocao">Acompanhe as melhores promoções disponiveis aqui na Maeztra.</p>
                </div>

                <div className="container--header">
                    <div className="hamb--mobile">
                        <img src={menuMobile} alt="Menu mobile" />
                    </div>

                    <div>
                        <img src={logo} alt="Logo Maeztra" />
                    </div>

                    <div className="lupa--icon">
                        <img src={lupa} alt="Lupa" />
                    </div>

                    <div className="icon--shopping">
                        <img src={shopping} alt="Lupa" />
                    </div>

                    <div className="container--pesquisa">
                        <input type="text" placeholder="O que você busca ?" />
                        <Button width={'119px'} borda={'8px'} tamanho={'-119px'} fontSize={'14px'}> Buscar </Button>
                    </div>

                    <div className="box--login">

                        <div className="icon--minha-conta">
                            <img src={user} alt="Minha Conta" />
                            Minha conta
                        </div>

                        <div className="icon--favorito">
                            <img src={favoritos} alt="Adicionar Favoritos" />
                            Adicionar Favorito
                        </div>

                        <div className="icon--carrinho">
                            <img src={carrinho} alt="Meu carrinho" />
                            <p>
                                Meu carrinho
                            </p>
                        </div>

                    </div>
                </div>
                <Menu />
            </header>
        </>
    );
}

export default Header;