import { ContainerTipBar } from "../../ComponentsStyles/Components"
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

            </div>
        </>

    )
}

export default Tipbar