import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
flex-direction:column;
align-items:center;
display:flex; 
border: 1px solid #ececec;
width:60%;
border-radius:5px;
`

const Logo = styled.div`
width:4rem;
height:4rem;
background:#c0c0c0;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
margin:1rem;
`;

const Name = styled.h3`
text-align:center;
margin:0;
font-size:1rem;
`;

const Username = styled.p`
color: grey;
font-style: italic;
margin:0;
`;

const Website = styled.a`
margin:1rem;
`;
const Button = styled.button`
color:#fff;
background:#43B0F6; 
border:none;
padding:.5rem;
border-radius:5px;
margin:1rem;
`;

function Card(props) {
    const { name, userName, website, id } = props;
    const history = useHistory();
    const handleClick = () => history.push(`/${id}`);
    return (
        <Container>
            <Logo><h1>{name.slice(0, 1)}</h1></Logo>
            <Name>{name}</Name>
            <Username>@{userName}</Username>
            <Website href={website}>{`http://${website}`}</Website>
            <Button onClick={handleClick}>MORE DETAILS</Button>
        </Container >
    )

}

export default Card
