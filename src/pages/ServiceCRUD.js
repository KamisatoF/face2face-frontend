import { Header } from "../components/Header";
import ServiceTable from "../components/ServiceTable";
import { ContentContainerDiv, CrudeDiv, CrudeTitle, Input, InputDiv, InputText, IconImage } from "../styles/ContentContainer";
import deleteIcon from '../images/excluir_sf.png';
import saveIcon from '../images/save_sf.png';

function ServiceCRUD() {
    return (
        <div className="ServiceCRUD">
            <Header />
            <ContentContainerDiv>
                <CrudeTitle>Cadastro de Serviços</CrudeTitle>
                <CrudeDiv >

                    <ServiceTable />
                    <InputDiv>
                    <p>
                        <Input width={"500px"} placeholder="Descrição" type="text" />
                    </p>
                    <p>
                        <Input placeholder="Preço" type="text" />
                    </p>
                    <p>
                        <InputText width={"500px"} height={"100px"} placeholder="Detalhes" type="text" />
                    </p>
                    <p>
                        <IconImage src={deleteIcon} alt="" />
                        <IconImage src={saveIcon} alt="" />
                    </p>

                    </InputDiv>
                </CrudeDiv>
            </ContentContainerDiv>

        </div>
    );
}

export default ServiceCRUD;
