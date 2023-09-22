import React from 'react'
import axios from 'axios';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user }) {
  return (
    <Navbar className='navBar' style={{ width: '100%', margin: 0, backgroundColor: '#527f62', borderRadius: '3px', fontSize: '18px' }}>
      <Container >
        <Navbar.Brand href="/"><svg fill="#FFFFFF" width="40px" height="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0" /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M190.23926,82.92725a7.99946,7.99946,0,0,1-.19629,11.312l-24.416,23.584a7.99966,7.99966,0,1,1-11.11523-11.50781l24.416-23.584A7.99843,7.99843,0,0,1,190.23926,82.92725Zm23.418,34.72949-96,96a53.255,53.255,0,0,1-75.31446-75.31348l96-96a53.255,53.255,0,0,1,75.31446,75.31348Zm-11.31446-64a37.25409,37.25409,0,0,0-52.68554,0L107.31348,96,160,148.68628l42.34277-42.343A37.2969,37.2969,0,0,0,202.34277,53.65674Z" /> </g></svg></Navbar.Brand>
        <Nav className="me-auto flex-grow-1" >
          <Nav.Link className='navigation' style={{ color: 'white' }} href="/">Главная</Nav.Link>
        </Nav>
        <Nav className="me-auto flex-grow-0" style={{ color: 'white' }}>
          {user ? (<>
            <Nav.Link

              href="/logout"
              style={{ color: 'white' }}
              onClick={(e) => {
                e.preventDefault();
                axios('/auth/logout')
                  .then(() => (window.location.href = '/login'))
                  .catch(console.log);
              }}
            > Выход
            </Nav.Link>
            <Nav.Link className='navigation' style={{ color: 'white' }} href="/cart">Корзина</Nav.Link>
            <Nav.Link className='navigation' style={{ color: 'white' }} href="/account">Личный кабинет</Nav.Link>
          </>
          ) : (
            <>
              <Nav.Link className='navigation' style={{ color: 'white' }} href="/login" >Авторизация</Nav.Link>
              <Nav.Link className='navigation' style={{ color: 'white' }} href="/registration">Регистрация</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}