import { ContainerTipBar } from "../../ComponentsStyles/Components"
<<<<<<< HEAD
import '../tipbar/tipbar.css'
import img01 from './img/Tipbar01.png'
import imgEstoque from './img/estoque.png'
import imgTroca from './img/troca.png'
import imgGanhe from './img/ganhe.png'
import imgFrete from './img/frete.png'
const Tipbar = () => {
    return (
        <>
            <h5 className="title--tipbar">Por que comprar na Maeztra?</h5>
            <div className="container--tipbar">
                <ContainerTipBar>
                    <img src={imgEstoque} alt="" />
                    <div>
                        <h4>
                            Estoque no Brazil
                        </h4>
                        <p className="description--tipbar">Produtos mais perto de você!</p>
                    </div>
                </ContainerTipBar>

                <ContainerTipBar>
                    <img src={imgTroca} alt="" />
                    <div>
                        <h4>
                            Trocas Garantidas
                        </h4>
                        <p className="description--tipbar">Trocas em até 48 horas, vejas as regras</p>
                    </div>
                </ContainerTipBar>
                <ContainerTipBar>
                    <img src={imgGanhe} alt="" />
                    <div>
                        <h4>
                            Ganhe 5% off
                        </h4>
                        <p className="description--tipbar">Pagando à vista no Cartão</p>
                    </div>
                </ContainerTipBar>
                <ContainerTipBar>
                    <img src={imgFrete} alt="" />
                    <div>
                        <h4>
                            Frete Grátis
                        </h4>
                        <p className="description--tipbar">Em compras acima de R$ 499,00</p>
                    </div>
                </ContainerTipBar>
=======
import img01 from './img/Tipbar01.png'
const Tipbar = () => {
    return (
        <>
            <h5>Por que comprar na Maeztra?</h5>
            <div>

            <ContainerTipBar>
                <img src={img01} alt="" />
                <div>
                    <h4>
                        Produtos importados
                    </h4>
                    <p className="">Produto de Alta Qualidade</p>
                </div>
            </ContainerTipBar>

            <ContainerTipBar>
                <img src={img01} alt="" />
                <div>
                    <h4>
                        Estoque no Brazil
                    </h4>
                    <p className="">Produto de Alta Qualidade</p>
                </div>
            </ContainerTipBar>

            <ContainerTipBar>
                <img src={img01} alt="" />
                <div>
                    <h4>
                        Trocas Garantidas
                    </h4>
                    <p className="">Produto de Alta Qualidade</p>
                </div>
            </ContainerTipBar>
            <ContainerTipBar>
                <img src={img01} alt="" />
                <div>
                    <h4>
                        Ganhe 5% off
                    </h4>
                    <p className="">Produto de Alta Qualidade</p>
                </div>
            </ContainerTipBar>
            <ContainerTipBar>
                <img src={img01} alt="" />
                <div>
                    <h4>
                        Frete Grátis
                    </h4>
                    <p className="">Produto de Alta Qualidade</p>
                </div>
            </ContainerTipBar>
>>>>>>> 7aedf13b8f633a65f7252448499775154812f80d

            </div>
        </>

    )
}

export default Tipbar