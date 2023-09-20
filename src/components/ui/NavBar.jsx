import React from 'react'
import axios from 'axios';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user}) {
  return (
    <Navbar className='navBar' style={{ width: '100%', margin: 0 }}>
    <Container>
      <Navbar.Brand href="/">LOGO</Navbar.Brand>
      <Nav className="me-auto flex-grow-1" >
        <Nav.Link className='navigation' href="/">Главная</Nav.Link>
      </Nav>
      <Nav className="me-auto flex-grow-0">
        {user ? ( <>
            <Nav.Link
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                axios('/auth/logout')
                  .then(() => (window.location.href = '/login'))
                  .catch(console.log);
              }}
          > Выход
          </Nav.Link>
              <Nav.Link className='navigation' href="/cart">Корзина</Nav.Link>
              <Nav.Link className='navigation' href="/account">Личный кабинет</Nav.Link>
        </>
        ) : (
            <>
            <Nav.Link className='navigationLog' href="/login" >Авторизация</Nav.Link>
            <Nav.Link className='navigation' href="/registration">Регистрация</Nav.Link>
            </>
        )}
      </Nav>
    </Container>
  </Navbar>
);
}