import Menu from "../menu/Menu";
import logo from '../../assets/img/logo-maeztra-novo.png'
import user from '../../assets/img/user.png'
import favoritos from '../../assets/img/favoritos.png'
import carrinho from '../../assets/img/carrinho.png'
import '../header/header.css'
import { Button } from "../../ComponentsStyles/Components";
const Header = () => {
    return (
        <>
            <header>
                <div className="div--promocao">
                    <p>Acompanhe as melhores promoções disponiveis aqui na Maeztra.</p>
                </div>

                <div className="container--header">
                    <div>
                        <img src={logo} alt="Logo Maeztra" />
                    </div>

                    <div className="container--pesquisa">
                        <input type="text" placeholder="O que você busca ?" />
                        <Button> Buscar </Button>
                    </div>

                    <div>
                        <img src={user} alt="Minha Conta" />
                        Minha conta
                    </div>

                    <div>
                        <img src={favoritos} alt="Adicionar Favoritos" />
                         Adicionar Favorito 
                    </div>

                     <div>
                        <img src={carrinho} alt="Meu carrinho" />
                        Meu carrinho
                     </div>   

                </div>
                    <Menu/>
            </header>
        </>
    );
}

export default Header;