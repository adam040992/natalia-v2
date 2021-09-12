import React from 'react'
import styled from 'styled-components';

function Menu() {
    return (
        <Container>
            <MenuContainer>
                <LeftSide>Logo</LeftSide>
                <RightSide>
                    <a href="/home">
                        <Button>Home</Button>
                    </a>
                    <a href="/projects">
                        <Button>Projects</Button>
                    </a>
                    <a href="/about">
                        <Button>About</Button>
                    </a>
                    <a href="/contact">
                        <Button>Contact</Button>
                    </a>
                </RightSide>
                <Hamburger>
                    Hamburger
                </Hamburger>
            </MenuContainer>
        </Container>
    )
}

export default Menu

const Container = styled.div`
    background-color: grey;
    height: 5vh;
    width: 100vw;
`;

const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftSide = styled.div`
    width: 100%;
`;

const RightSide = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    a {
        text-decoration: none;
        color: black;
        /* width: 100%; */
        margin-left: 20px;

    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

const Hamburger = styled.div`
    display: none;
    
    @media only screen and (max-width: 600px) {
        display: flex;
    }
`;

const Button = styled.div`
    /* margin-left: 20px; */
    /* border: 1px solid black; */
    padding: 3px 50px;
    position: relative;

    &:hover {
        /* background: red; */
        /* border-bottom: 1px solid black; */

        &:after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: black;
        }
    }

    

`;