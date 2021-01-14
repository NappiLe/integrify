import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import Card from "./Card"

const Container = styled.div`
	grid-template-columns: repeat(3,1fr);
    display: grid;
  grid-gap: 2rem;
  justify-items:center;
`;

function Home() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUserList(data)
        }
        catch (err) { console.log(err) }
    }

    return (

        <Container>
            {
                userList.map(list =>
                    <Card key={list.id} name={list.name} userName={list.username} website={list.website} id={list.id} />)
            }
        </Container>

    )
}

export default Home
