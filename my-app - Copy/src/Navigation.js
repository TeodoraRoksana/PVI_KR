import React,{Component} from 'react';
import {Navbar,Nav, Form, Button, FormLabel} from 'react-bootstrap';

export class Navigation extends Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:53535/api/user',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                UserLogin: event.target.UserLogin.value,
                UserPassword: event.target.UserPassword.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            if(result == "Log in as admin"){
                alert(result);
                window.location = "/admin";
            }
        },
        (error)=>{
            alert('Failed');
        })
    }

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    
                <Nav>
                <Form className="form-inline" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="UserLogin">
                        <Form.Control type="text" name="UserLogin" required 
                        placeholder="Login"/>
                        <FormLabel>\</FormLabel>
                    </Form.Group>

                    <Form.Group controlId="UserPassword">
                        <Form.Control type="password" name="UserPassword" required 
                        placeholder="Password"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Log in
                        </Button>
                    </Form.Group>
                </Form>
                </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}