import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useHistory } from 'react-router'
import { decodeToken } from 'react-jwt';
import axios from 'axios';

const Register = (props) => {

    const [userDetails, setUserDetails] = useState({});
    const history = useHistory();

    const handleChange = e => {
        setUserDetails({...userDetails, [e.target.name] : e.target.value });
      }
    
      const handleSubmit = e => {
        e.preventDefault();
    
        axios.post('http://localhost:5000/user/login', userDetails, { withCredentials: true })
             .then((resp) => {
              props.setToken(resp.data.accessToken);
              props.setUser((({_id, username, role}) => ({_id, username, role}))(decodeToken(resp.data.accessToken)));
              props.setLoading(false);
              history.push('/');
              // window.location.reload();
             })
             .catch((err) => {
               console.log('err', err);
               props.setLoading(false);
             })
      
      }

    return (
        <React.Fragment>
            <Container>
              <Form onChange={handleChange} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" type="string" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Enter password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Container>
          </React.Fragment>
    )
}

export default Register;
