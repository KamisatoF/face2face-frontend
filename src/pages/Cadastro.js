import { Alert, Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import { CadastroService } from "../api/CadastroService";


function Login() {
    
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState('danger');
    const [alert, setAlert] = useState();
    const [usuario, setUsuario] = useState({});
    const handleInputChange = (usuario) => {
        setUsuario(preValue => ({ 
            ...preValue,
            [usuario.target.name]: usuario.target.value,
        }))
    };

    const insert = async(e) => {
        e.preventDefault();
        try {
            const res = await CadastroService.insert(usuario);
            if (res.status == 200) {
                setShow(true);
                setVariant('success');
                setAlert('Cadastro realizado com sucesso!');
                clearForm();
            }
        } catch (err) {
            setShow(true);
            setAlert(err.response.data);
            setVariant('danger');
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
                        <Form.Control name="nome" type="text" placeholder="Nome Completo" value={usuario.nome || ''} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormCPF">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control name="cpf" type="text" placeholder="223.112.332-12" value={usuario.cpf || ''} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="email" type="email" placeholder="name@example.com" value={usuario.email || ''} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormTelefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control name="telefone" type="text" placeholder="(11) 99999-9999" value={usuario.telefone || ''} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="FormPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control name="senha" type="password" placeholder="Senha" value={usuario.senha || ''} onChange={handleInputChange} required></Form.Control>
                    </Form.Group>

                    <Form.Check name="recebeInformacoesEmailString" type="checkbox" id="termos" value={usuario.recebeInformacoesEmailString || ''} label="Desejo receber informações por e-mail" onChange={handleInputChange}>
                    </Form.Check>

                    <Button variant="dark" type="submit" onClick={(e) => {insert(e)}}>
                        Salvar
                    </Button>{''}

                    <Alert variant={variant} show={show} onClose={() => setShow(false)} dismissible>
                        {alert}
                    </Alert>
                                        
                </Form>
            </Container>
        </div>
    );
}

export default Login;
