import { Alert, Form } from "react-bootstrap";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { CadastroService } from "../api/CadastroService";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/AuthContext";

function Cadastro() {
    const { authenticated, userData, refreshUserData } = useContext(Context);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showLink, setShowLink] = useState("");
    const [showError, setShowError] = useState(false);
    const [alert, setAlert] = useState("");
    const [usuario, setUsuario] = useState({});

    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        }))
    };

    useEffect(() => {
        const setUser = () => {
            if (authenticated) {
                setUsuario(userData);
            }
        }
        setUser();
    }, [authenticated, userData])

    const insert = async (e) => {
        e.preventDefault();
        try {
            if (!authenticated) {
                console.log("inserindo..");
                await CadastroService.insert(usuario);
                clearForm();
                setShowLink("Seguir para login.");
            } else {
                console.log("atualizando..");
                await CadastroService.update(usuario);
                setShowLink("");
                refreshUserData(usuario.email);
            }
            setShowSuccess(true);
            setShowError(false);
            setAlert("Operação realizada com sucesso. ");

        } catch (err) {
            setShowSuccess(false);
            setShowError(true);
            setAlert("Erro ao efetuar operação.");
        }
    }

    const clearForm = () => {
        setUsuario({
            nome: '',
            cpf: '',
            email: '',
            telefone: '',
            senha: '',
            recebeInformacoesEmailString: ''
        })
    }

    return (
        <div>
            <Header />
            <Container className="mt-5">
                <Form>

                    <Form.Group className="mb-3" controlId="FormNome">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control name="nome" type="text" placeholder="Nome Completo" value={usuario.nome} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control name="cpf" type="text" placeholder="223.112.332-12" value={usuario.cpf} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="email" type="email" placeholder="name@example.com" value={usuario.email} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormTelefone">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control name="telefone" type="text" placeholder="(11) 99999-9999" value={usuario.telefone} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="password" placeholder="Senha" value={usuario.senha} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Check name="recebeInformacoesEmailString" type="checkbox" id="termos" value={usuario.recebeInformacoesEmailString} label="Desejo receber informações por e-mail" onChange={handleInputChange}>
                    </Form.Check>

                    <Button variant="dark" type="submit" onClick={(e) => { insert(e) }}>
                        Salvar
                    </Button>{''}

                    <Alert variant='success' show={showSuccess && !showError} onClose={() => setShowSuccess(false)} dismissible>
                        {alert}
                        <Alert.Link href="/login"> {showLink}</Alert.Link>
                    </Alert>

                    <Alert variant='danger' show={!showSuccess && showError} onClose={() => setShowError(false)} dismissible>
                        {alert}
                    </Alert>

                </Form>
            </Container>
        </div>
    );
}

export default Cadastro;
