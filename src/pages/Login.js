import { Form } from "react-bootstrap";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { LoginService } from "../api/LoginService";

function Login() {
    const [usuario, setUsuario] = useState({});
    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        })) 
    };

    const authService = async () => {
        const response = await LoginService.authenticate(usuario);        
        console.log(response);
        setUsuario(response.data);  
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

                    <Button variant="dark" type="submit" onClick={() => authService()}>
                        Login
                    </Button>{' '}

                    <Button variant="dark" type="submit" href="/cadastro">
                        Cadastrar
                    </Button>

                </Form>
            </Container>
        </div>

    );
}

export default Login;
