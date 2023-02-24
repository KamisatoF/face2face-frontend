import { Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { CadastroService } from "../api/CadastroService";


function Login() {

    const [usuario, setUsuario] = useState({});
    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        }))
    };

    const insert = async () => {
        const response = await CadastroService.insert(usuario);
        setUsuario(response.data);
    }


    return (
        <div>
            <Header />

            <Container className="mt-5">
                <Form>

                    <Form.Group className="mb-3" controlId="FormNome">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control name="nome" type="text" placeholder="Nome Completo" onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control name="cpf" type="text" placeholder="223.112.332-12" onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="email" type="email" placeholder="name@example.com" onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control name="telefone" type="text" placeholder="(11) 99999-9999" onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="password" placeholder="Senha" onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Check name="recebeInformacoesEmailString" type="checkbox" id="termos" label="Desejo receber informações por e-mail" onChange={handleInputChange}>
                    </Form.Check>

                    <Button variant="dark" type="submit" onClick={() => insert()}>
                        Salvar
                    </Button>{' '}

                </Form>
            </Container>
        </div>

    );
}

export default Login;
