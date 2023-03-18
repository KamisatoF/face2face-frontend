import Header from "../components/Header";
import { ServiceService } from "../api/ServiceService";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { Alert, Form, Modal, Table } from "react-bootstrap";



function ServiceReformed() {
    const [services, setServices] = useState([]);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [alert, setAlert] = useState("");
    const { userData } = useContext(Context);
    const [servico, setServico] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchServices = async () => {
        const response = await ServiceService.findAll(userData.id);
        setServices(response.data);
    }

    const handleInputChange = (servico) => {
        setServico(preValue => ({
            ...preValue,
            [servico.target.name]: servico.target.value,
        }))
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await ServiceService.findAll(userData.id);
            setServices(response.data);
        }
        fetch();
    }, [userData])

    const mergeService = async (e) => {
        e.preventDefault();
        servico.userid = userData.id;
        servico.preco = parseFloat(servico.preco);
        try {
            if (servico.id === 0 || servico.id === undefined) {
                await ServiceService.insert(servico);
            } else {
                await ServiceService.update(servico);
            }
            setAlert("Dados atualizados com sucesso!");
            setShowSuccess(true);
            setShowError(false);
            fetchServices();
            handleClose();
        } catch (error) {
            setAlert(error.response.data);
            setShowSuccess(false);
            setShowError(true);
        }
        
    }

    const handleDelete = async (id) => {

        await ServiceService.delete(id);

        setAlert("Registro excluido com sucesso!");
        setShowSuccess(true);
        fetchServices();
    }

    const handleEdit = async (ser) => {
        setShowSuccess(false);
        servico.id = ser.id;
        servico.descricao = ser.descricao;
        servico.detalhes = ser.detalhes;
        servico.preco = ser.preco;
        handleShow();

    }

    const handleNew = () => {
        setShowSuccess(false);
        servico.id = 0;
        servico.descricao = "";
        servico.detalhes = "";
        servico.preco = "";

        handleShow();
    }

    const renderServices = (s, index) => {
        return (
            <tr key={index}>
                <th>{s.descricao}</th>
                <th>{s.detalhes}</th>
                <th>{s.preco}</th>
                <th style={{ width: '160px' }}>
                    <Button style={{ maxWidth: '10vh' }} variant="danger" onClick={() => handleDelete(s.id)}>Excluir</Button>{' '}
                    <Button variant="secondary" onClick={() => handleEdit(s)}>Editar</Button>
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
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(renderServices)}
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
                            <Form.Control required name="descricao" type="text" placeholder="Descrição" value={servico.descricao} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormDet">
                            <Form.Label>Detalhes</Form.Label>
                            <Form.Control required name="detalhes" type="textarea" placeholder="Detalhes do serviço" value={servico.detalhes} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="FormPrec">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control required name="preco" type="number" placeholder="Preço" value={servico.preco} onChange={handleInputChange} ></Form.Control>
                        </Form.Group>

                        <Button variant="dark" type="submit" onClick={(e) => { mergeService(e) }}>
                            Salvar
                        </Button>{''}
                        
                        <Alert variant='danger' show={showError} onClose={() => setShowError(false)} dismissible>
                            {alert}
                        </Alert>
                    </Form>
                </Container>
            </Modal>
        </div>

    );
}

export default ServiceReformed;
