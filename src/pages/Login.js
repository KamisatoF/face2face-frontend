import { Alert, Form } from "react-bootstrap";
import { Header } from "../components/Header";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import React, { useContext } from "react";
import { Context } from "../context/AuthContext";

function Login() {
    const [usuario, setUsuario] = useState({});
    const [variant, setVariant] = useState('danger');
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState('');
    const { authenticated, handleLogin, userData, handleLogout } = useContext(Context);


    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        })) 
    };

    const authService = async(e) => {
        e.preventDefault();
        try {
            handleLogin(usuario);
            if (authenticated) {
                setAlert("Bem vindo " + userData.nome);
                setVariant('success');
                setShowAlert(true);
                clearForm(); 
            }
           
        } catch (err) {
            setShowAlert(true);
            setVariant('danger');
            setAlert("Erro inesperado ao tentar efetuar o login.");
            if (err.response.status === 403) {
                setAlert("Usuário ou senha inválido.");
            }      
        }
    }

    const clearForm = () => {
        setUsuario({
            email: '',
            senha: ''
        })        
    }

    return (
        <div>
            <Header />

            <Container className="mt-5">
                <Form>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="nome@exemplo.com" value={usuario.email || ''} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="password" placeholder="Senha" value={usuario.senha || ''} onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Button variant="dark" type="submit" onClick={(e) => authService(e)}>
                        Login
                    </Button>{' '}

                    <Button variant="dark" type="submit" onClick={() => handleLogout()}>
                        Logout
                    </Button>{' '}

                    <Button variant="dark" type="submit" href="/cadastro">
                        Cadastrar
                    </Button>

                    <Alert variant={variant} show={showAlert} onClose={() => setShowAlert(false)} dismissible>
                        {alert}
                    </Alert>

                </Form>
            </Container>
        </div>

    );
}

export default Login;
