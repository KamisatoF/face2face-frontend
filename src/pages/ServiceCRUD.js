import Header from "../components/Header";
import { ContentContainerDiv, CrudeDiv, CrudeTitle, Input, InputDiv, InputText, IconImage } from "../styles/ContentContainer";
import deleteIcon from '../images/excluir_sf.png';
import saveIcon from '../images/save_sf.png';
import { ServiceService } from "../api/ServiceService";
import newIcon from '../images/novo_sf.png';
import { Table, TableData, TableRow, FieldDiv } from "../styles/TableContainer";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";

function ServiceCRUD() {
    const [services, setServices] = useState([]);
    const { userData } = useContext(Context);

    const fetchServices = async () => {
        const response = await ServiceService.findAll(userData.id);
        setServices(response.data);
    }

    const [values, setValues] = useState({});
    const handleInputChange = (value) => {
        setValues(preValue => ({
            ...preValue,
            [value.target.name]: value.target.value,
        }))
    };

    useEffect(() => { 
        fetchServices();
    }, [])

    const mergeService = async () => {
        var response = null;
        if (values.id === 0) {
            console.log("inserindo..");
            response = await ServiceService.insert(values);
        } else {
            console.log("atualizando..");
            response = await ServiceService.update(values);
        }
        clearFormService();
    }

    const deleteService = async () => {
        const response = await ServiceService.delete(values.id);
        clearFormService();
        setServices(response.data);
    }

    const normalizeDecimalInputChange = (value) => {
        const normalized = Number(value.target.value).toFixed(2);
        setValues(preValue => ({
            ...preValue,
            [value.target.name]: normalized,
        }))
    };

    const handleRow = (se) => {
        setValues({
            descricao: se.descricao,
            detalhes: se.detalhes,
            id: se.id,
            preco: se.preco,
        })
    };

    const clearFormService = () => {
        setValues({
            descricao: '',
            detalhes: '',
            id: 0,
            preco: 0,
        })
    };

    return (
        <div className="ServiceCRUD">
            <Header />
            <ContentContainerDiv>
                <CrudeTitle>Cadastro de Serviços</CrudeTitle>
                <CrudeDiv >

                    <Table>
                        <tbody>
                            {services.map(se => {
                                return (
                                    <TableRow key={se.id} onClick={() => handleRow(se)}>
                                        <TableData>
                                            <FieldDiv>Descrição: {se.descricao}</FieldDiv>
                                            <FieldDiv>Preço: R$ {se.preco}</FieldDiv>
                                            <FieldDiv>Detalhes: {se.detalhes}</FieldDiv>
                                        </TableData>
                                    </TableRow>
                                );
                            })}

                        </tbody>
                    </Table>

                    <InputDiv>
                        <p>
                            <Input width={"500px"} placeholder="Descrição" type="text" name="descricao" onChange={handleInputChange} value={values.descricao || ''} />
                        </p>
                        <p>
                            <Input placeholder="Preço" type="number" name="preco" onChange={handleInputChange} value={values.preco || 0} onBlur={normalizeDecimalInputChange} />
                        </p>
                        <p>
                            <InputText width={"500px"} height={"100px"} placeholder="Detalhes" type="text" name="detalhes" onChange={handleInputChange} value={values.detalhes || ''} />
                        </p>
                        <p>
                            <IconImage onClick={() => deleteService()} src={deleteIcon} alt="" />
                            <IconImage onClick={() => mergeService()} src={saveIcon} alt="" />
                            <IconImage onClick={() => clearFormService()} src={newIcon} alt="" />
                        </p>

                    </InputDiv>
                </CrudeDiv>
            </ContentContainerDiv>

        </div>
    );
}

export default ServiceCRUD;
