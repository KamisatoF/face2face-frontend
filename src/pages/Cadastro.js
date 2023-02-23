import { Form, Stack } from "react-bootstrap";
import { Header } from "../components/Header";
import { ContentContainerDiv } from "../styles/ContentContainer";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Login() {
    return (
        <div>

            <Header />

            <Container className="mt-5">
                <Form>

                    <Form.Group className="mb-3" controlId="FormNome">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="text" placeholder="Nome Completo"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="223.112.332-12"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="(11) 99999-9999"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword2">
                        <Form.Label>Cofirmação de Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite sua senha novamente"></Form.Control>
                    </Form.Group>

                    <Form.Check type="checkbox" id="termos" label="Desejo receber informações por e-mail" >
                </Form.Check>

                    <Button variant="dark" type="submit">
                        Login
                    </Button>{' '}

                </Form>
            </Container>
        </div>

    );
}

export default Login;
