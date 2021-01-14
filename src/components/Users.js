import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Information = styled.span`
display:block;
`;

function Users(props) {
    let params = useParams();
    const id = params.id;
    const [info, setInfo] = useState({});
    const [company, setCompany] = useState({});
    const [address, setAddress] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await response.json();
                setInfo(data);
                setCompany(data.company);
                setAddress(data.address);
            }
            catch (err) { console.log(err) }
        }
        fetchData();
    }, [id]);


    return (
        <>
            <h1>User details</h1>
            <p>
                <Information>
                    - name: {info.name}
                </Information>
                <Information>
                    - username: {info.username}
                </Information>
                <Information>
                    - email: {info.email}
                </Information>
                <Information>
                    - phone: {info.phone}
                </Information>
                <Information>
                    - company: {company.name}
                </Information>
                <Information>
                    - website: {info.website}
                </Information>
                <Information>
                    - address:
                    <ul>
                        <li>street: {address.street}</li>
                        <li>suite: {address.suite}</li>
                        <li>city: {address.city}</li>
                        <li>zipcode: {address.zipcode}</li>
                    </ul>
                </Information>
            </p>
        </>
    )
}


export default Users

