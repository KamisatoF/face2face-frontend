import Header from "../components/Header";
import { ContaBancariaService } from "../api/ContaBancariaService";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { Alert, Form, Modal, Table } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";


function ContaBancaria() {
    const [contasBancarias, setContasBancarias] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [alert, setAlert] = useState("");
    const { userData } = useContext(Context);
    const [contaBancaria, setContaBancaria] = useState({});
    const [bancoSelection, setBancoSelection] = useState([]);
    const bancos = [
        { codigo: "001", nome: " Banco do Brasil S.A. " },
        { codigo: "033", nome: " Banco Santander (Brasil) S.A. " },
        { codigo: "104", nome: " Caixa Econômica Federal " },
        { codigo: "237", nome: " Banco Bradesco S.A. " },
        { codigo: "341", nome: " Banco Itaú S.A. " },
        { codigo: "260", nome: " Nubank " },
        { codigo: "077", nome: " Banco Inter " },
        { codigo: "336", nome: " C6 Bank " },
        { codigo: "208", nome: " BTG Pactual S.A. " },
        { codigo: "102", nome: " Banco XP Investimentos " },
        { codigo: "070", nome: " BRB - Banco de Brasília S.A. " },
        { codigo: "623", nome: " Banco Pan S.A. " },
        { codigo: "637", nome: " Banco Sofisa S.A. " }
    ];

    const fetchContasBancarias = async () => {
        const response = await ContaBancariaService.findAll(userData.id);
        setContasBancarias(response.data);
    }

    const handleInputChange = (contaBancaria) => {
        setContaBancaria(preValue => ({
            ...preValue,
            [contaBancaria.target.name]: contaBancaria.target.value,
        }))
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await ContaBancariaService.findAll(userData.id);
            setContasBancarias(response.data);
        }
        fetch();
    }, [userData])

    const mergeService = async (e) => {
        e.preventDefault();
        contaBancaria.userid = userData.id;
        contaBancaria.banco = bancoSelection.at(0).codigo;
        if (contaBancaria.id === 0 || contaBancaria.id === undefined) {
            setAlert("Dados inseridos com sucesso!");
            await ContaBancariaService.insert(contaBancaria);
        } else {
            setAlert("Dados atualizados com sucesso!");
            await ContaBancariaService.update(contaBancaria);
        }

        fetchContasBancarias();
        handleClose();
        setShowSuccess(true);
    }

    const handleDelete = async (id) => {
        await ContaBancariaService.delete(id);
        setAlert("Registro excluido com sucesso!");
        setShowSuccess(true);
        fetchContasBancarias();
    }

    const handleEdit = async (ser) => {
        setShowSuccess(false);
        contaBancaria.id = ser.id;
        setBancoSelection(bancos.filter(x => x.codigo === ser.banco));
        contaBancaria.banco = ser.banco;
        contaBancaria.agencia = ser.agencia;
        contaBancaria.cc = ser.cc;
        contaBancaria.digito = ser.digito;
        handleShow();
    }

    const handleNew = () => {
        setShowSuccess(false);
        contaBancaria.id = 0;
        contaBancaria.banco = "";
        contaBancaria.agencia = "";
        contaBancaria.cc = "";
        contaBancaria.digito = "";

        handleShow();
    }

    const renderServices = (cc, index) => {
        const bancoEx = bancos.filter(x => x.codigo === cc.banco).at(0);
        return (
            <tr key={index}>
                <th>{bancoEx !== undefined ? bancoEx.codigo + " - " + bancoEx.nome : ""}</th>
                <th>{cc.agencia}</th>
                <th>{cc.cc}</th>
                <th>{cc.digito}</th>
                <th style={{ width: '160px' }}>
                    <Button style={{ maxWidth: '10vh' }} variant="danger" onClick={() => handleDelete(cc.id)}>Excluir</Button>{' '}
                    <Button variant="secondary" onClick={() => handleEdit(cc)}>Editar</Button>
                </th>
            </tr>
        );
    }

    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Form >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Banco</th>
                                <th>Agência</th>
                                <th>Número da Conta</th>
                                <th>Dígito</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contasBancarias.map(renderServices)}
                        </tbody>
                    </Table>{' '}

                    <Button variant="dark" onClick={() => handleNew()}>Cadastrar Novo Serviço</Button>{''}

                    <Alert variant='success' show={showSuccess} onClose={() => setShowSuccess(false)} dismissible>
                        {alert}
                    </Alert>

                </Form>
            </Container>

            <Modal show={show} onHide={handleClose}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cadastro de Conta Bancaria</Modal.Title>
                </Modal.Header>
                <Container className="my-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="FormBanco">
                            <Form.Label>Banco</Form.Label>
                            <Typeahead id="typeHead" labelKey="nome" onChange={setBancoSelection} options={bancos} placeholder="Escolha seu banco" selected={bancoSelection} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormAgencia">
                            <Form.Label>Agência</Form.Label>
                            <Form.Control name="agencia" type="number" placeholder="Agêcia sem o dígito" value={contaBancaria.agencia} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormCC">
                            <Form.Label>Número da Conta</Form.Label>
                            <Form.Control name="cc" type="number" placeholder="Número da Conta sem o dígito" value={contaBancaria.cc} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormDet">
                            <Form.Label>Dígito</Form.Label>
                            <Form.Control name="digito" type="number" placeholder="Dígito da conta" value={contaBancaria.digito} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>

                        <Button variant="dark" type="submit" onClick={(e) => { mergeService(e) }}>
                            Salvar
                        </Button>{''}
                    </Form>
                </Container>
            </Modal>
        </div>

    );
}

export default ContaBancaria;
