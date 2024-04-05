import { Col, Button, Card } from 'react-bootstrap';
import '../Components/css/pcDesign.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokemonCard({ name, brief, image }) {
  return (
      <Col lg={3}>
      <Card className='card-pokemon'>
        <Card.Img variant="top" src={image} className='img-pokemon' />
        <Card.Body>
          <Card.Title className='poke-name'>{name}</Card.Title>
          <Card.Text>{brief}</Card.Text>
          <Button variant="primary" className='btn-carta'>Dato curioso</Button>
        </Card.Body>
      </Card>
      </Col>

  );
}

export default PokemonCard;