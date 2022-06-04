import React, {useState, useEffect} from 'react'
import { Container } from '../styles/layoutStyled'
import axios from 'axios'

const About = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => {
            setData(res.data);
        })
    }, [])
    console.log(data)
  return (
    <Container>
        <h1>About</h1>
        <hr />
        <h3>My name is {data.name}</h3>
        <ul>
            <li>Email: {data.email}</li>
            <li>Phone: {data.phone}</li>
            <li>Website: {data.website}</li>
        </ul>
    </Container>
  )
}

export default About