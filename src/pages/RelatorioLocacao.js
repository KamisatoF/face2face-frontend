import Header from "../components/Header";
import React, { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { Form } from "react-bootstrap";
import { RelatorioLocacaoService } from "../api/RelatorioLocacaoService";
import { CSVLink } from "react-csv";

function RelatorioLocacao() {
    const [locacoes, setLocacoes] = useState([]);
    const { userData } = useContext(Context);
    const [relatorio, setRelatorio] = useState({});
    const csvLink = useRef();

    const handleInputChange = (relatorio) => {
        setRelatorio(preValue => ({
            ...preValue,
            [relatorio.target.name]: relatorio.target.value,
        }))
    };

    useEffect(() => {
        const fetch = async () => {
            relatorio.userid = userData.id
            if (relatorio.dataInicio !== undefined && relatorio.dataFim !== undefined) {
                const response = await RelatorioLocacaoService.findAll(relatorio.userid, relatorio);
                setLocacoes(response.data);
            }
        }
        fetch();
    }, [relatorio, userData]);

    const generateReport = async (e) => {
        e.preventDefault();

        csvLink.current.link.click();
    }

    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="FormDataInicio">
                        <Form.Label>Data Início</Form.Label>
                        <Form.Control required name="dataInicio" type="date" value={relatorio.dataInicio || ''} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="FormDataFim">
                        <Form.Label>Data Fim</Form.Label>
                        <Form.Control required name="dataFim" type="date" value={relatorio.dataFim || ''} onChange={handleInputChange} ></Form.Control>
                    </Form.Group>
                    <Button variant="dark" type="submit" onClick={(e) => { generateReport(e) }}>
                        Gerar Relatório
                    </Button>{''}

                    <CSVLink
                        data={locacoes}
                        filename='RelatorioDeLocacoes.csv'
                        className='hidden'
                        ref={csvLink}
                        target='_blank'
                        separator=";"
                    />

                </Form>

            </Container>
        </div>

    );
}

export default RelatorioLocacao;
