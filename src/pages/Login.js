import { Alert, Form } from "react-bootstrap";
import { Header } from "../components/Header";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { LoginService } from "../api/LoginService";

function Login() {
    const [usuario, setUsuario] = useState({});
    const [variant, setVariant] = useState('danger');
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState('');
    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        })) 
    };

    const authService = async(e) => {
        e.preventDefault();
        try {
            const res = await LoginService.authenticate(usuario);
            setVariant('success');
            setShowAlert(true);
            setAlert('token = ' + res.data);
            console.log(res.status);
            console.log(res.data);
            setUsuario(res.data);
        } catch (err) {
            setShowAlert(true);
            setVariant('danger');
            setAlert("Erro inesperado ao tentar efetuar o login.");
            if (err.response.status === 403) {
                setAlert("Usuário ou senha inválido.");
            }      
        }
    }

    return (
        <div>
            <Header />

            <Container className="mt-5">
                <Form>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="nome@exemplo.com" onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="password" placeholder="Senha" onChange={handleInputChange}></Form.Control>
                    </Form.Group>

                    <Button variant="dark" type="submit" onClick={(e) => authService(e)}>
                        Login
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
