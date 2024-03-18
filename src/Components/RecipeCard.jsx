import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import recipes from '../recipes';
import RecipeCardDesign from './css/RecipeCardDesign.css';

function RecipeCards() {
    return (
        <Container>
            <Row className='fila'>
                {recipes.map((recipe, colIndex) => (
                    <Col key={colIndex} lg={3}>
                        <Card style={{ width: '100%', height: '100%' }} className='Carta'>
                            <div className="card-image-wrapper">
                                <Card.Img variant="top" src={recipe.imagen} className="img-product" />
                            </div>
                            <Card.Body className='body-card'>
                                <Card.Title style={{ fontSize: "30px" }}>
                                    <strong>
                                        {recipe.nombre}
                                    </strong>
                                </Card.Title>
                                <Card.Text className='descripcion'>
                                    {recipe.descripcion}
                                </Card.Text>
                                <div className="button-container">
                                    <Button variant="primary">Ver receta</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default RecipeCards;


