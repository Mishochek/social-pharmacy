import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Profile() {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Имя</ListGroup.Item>
        <ListGroup.Item>Почтовый ящик</ListGroup.Item>
        <ListGroup.Item>Пароль</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupExample;