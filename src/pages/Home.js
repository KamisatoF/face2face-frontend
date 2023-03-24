import Header from "../components/Header";
import { Card, Form, Container } from "react-bootstrap";
import RJ from '../images/RJ.png';
import SP from '../images/SP.jpg';
import BH from '../images/BH.jpg';
import BSB from '../images/BSB.jpg';

const styles = {
    cardImage: {
        objectFit: 'cover',
        width: '100%',
        height: '15vw'
    },
    formControl: {
        width: '50%',
        align: 'center'
    }
}
function Home() {
    return (
        <div className="Home">
            <Header />
            <Container className="mt-5">
                <div align='center' display>
                    <Form.Control style={styles.formControl} name="telefone" type="text" placeholder="Digite onde será sua próxima reunião..."></Form.Control>
                </div>
            </Container>

            <Container className="mt-5">
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={SP} style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>São Paulo</Card.Title>
                            <Card.Text>
                                O local é o centro financeiro do Brasil, onde concentra grande parte das empresas do país e com uma população acima de 12 milhões de habitantes. Pode ser considerada também a terra dos encontros.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BH} style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Belo Horizonte</Card.Title>
                            <Card.Text>
                                Em razão das ruas arborizadas e do grande volume de parques, é conhecido como Cidade Jardim. Se destaca como uma das melhores cidades latino-americanas para fazer negócios.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={RJ} style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Rio de Janeiro</Card.Title>
                            <Card.Text>
                                Rio de Janeiro é a cidade brasileira mais conhecida no exterior. O município é conhecido pelo Carnaval e pelo Réveillon. O Cristo Redentor é a estátua símbolo da cidade.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={BSB} style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Brasília</Card.Title>
                            <Card.Text>
                                Conhecida mundialmente como palco de todo o sistema administrativo do governo brasileiro, o Distrito Federal carrega o título da quarta região mais populosa do país.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default Home;
