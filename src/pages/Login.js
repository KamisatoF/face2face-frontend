import { Alert, Form } from "react-bootstrap";
import Header from "../components/Header";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import React, { useContext, useState } from "react";
import { Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const [usuario, setUsuario] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState('');
    const { handleLogin } = useContext(Context);
    const navigate = useNavigate();
    
    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        })) 
    };

    const authService = async(e) => {
        e.preventDefault();
        const auth = await handleLogin(usuario);
        if (auth) {
            navigate("/");
        } else {
            setAlert("Erro ao fazer login. Confira seu email e senha.");
            setShowAlert(true);
        }            
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

                    <Button variant="dark" type="submit" onClick={() => navigate("/cadastro")}>
                        Cadastrar
                    </Button>

                    <Alert variant="danger" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
                        {alert}
                    </Alert>

                </Form>
            </Container>
        </div>

    );
}

export default Login;
