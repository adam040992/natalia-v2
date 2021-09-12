import React from 'react'
import { Alert, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';
import Menu from './Menu';

function Home() { 
    return (
        <Container>
            <div>
                {/* <Menu/> */}
                <h1>Home</h1>
            </div>
        </Container>
    )
}

export default Home;

const Button = styled.button``

const Container = styled.div`
    display: flex;
    height: 100%;
`;