import Header from "../components/Header";
import { EquipamentoService } from "../api/EquipamentoService";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { Alert, Form, Modal, Table } from "react-bootstrap";


function Equipamento() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [alert, setAlert] = useState("");
    const { userData } = useContext(Context);
    const [equipamento, setEquipamento] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchEquipamentos = async () => {
        const response = await EquipamentoService.findAll(userData.id);
        setEquipamentos(response.data);
    }

    const handleInputChange = (equipamento) => {
        setEquipamento(preValue => ({
            ...preValue,
            [equipamento.target.name]: equipamento.target.value,
        }))
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await EquipamentoService.findAll(userData.id);
            setEquipamentos(response.data);
        }
        fetch();
    }, [userData])

    const mergeService = async (e) => {
        e.preventDefault();
        equipamento.userid = userData.id;
        if (equipamento.id === 0 || equipamento.id === undefined) {
            setAlert("Dados inseridos com sucesso!");
            await EquipamentoService.insert(equipamento);
        } else {
            setAlert("Dados atualizados com sucesso!");
            await EquipamentoService.update(equipamento);
        }

        setShowSuccess(true);
        fetchEquipamentos();
        handleClose();
    }

    const handleDelete = async (id) => {
        await EquipamentoService.delete(id);
        setAlert("Registro excluido com sucesso!");
        setShowSuccess(true);
        fetchEquipamentos();
    }

    const handleEdit = async (ser) => {
        setShowSuccess(false);
        equipamento.id = ser.id;
        equipamento.descricao = ser.descricao;
        equipamento.detalhes = ser.detalhes;
        equipamento.preco = ser.preco;
        handleShow();
    }

    const handleNew = () => {
        setShowSuccess(false);
        equipamento.id = 0;
        equipamento.descricao = "";
        equipamento.detalhes = "";
        equipamento.preco = "";

        handleShow();
    }

    const renderServices = (equip, index) => {
        return (
            <tr key={index}>
                <th>{equip.descricao}</th>
                <th>{equip.detalhes}</th>
                <th style={{ width: '160px' }}>
                    <Button style={{ maxWidth: '10vh' }} variant="danger" onClick={() => handleDelete(equip.id)}>Excluir</Button>{' '}
                    <Button variant="secondary" onClick={() => handleEdit(equip)}>Editar</Button>
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
                                <th>Descrição</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {equipamentos.map(renderServices)}
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
                    <Modal.Title>Cadastro de serviço</Modal.Title>
                </Modal.Header>
                <Container className="my-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="FormDesc">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control required name="descricao" type="text" placeholder="Descrição" value={equipamento.descricao} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormDet">
                            <Form.Label>Detalhes</Form.Label>
                            <Form.Control required name="detalhes" type="textarea" placeholder="Detalhes do serviço" value={equipamento.detalhes} onChange={handleInputChange} ></Form.Control>
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

export default Equipamento;
