import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:53535/api/photo',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PhotoId: event.target.PhotoId.value,
                PhotoTags: event.target.PhotoTags.value,
                PhotoURL: event.target.PhotoURL.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Photo
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="PhotoId">
                        <Form.Control type="text" name="PhotoId" required
                        disabled
                        defaultValue={this.props.phid} 
                        placeholder="DepartmentName"/>
                    </Form.Group>

                    <Form.Group controlId="PhotoTags">
                        <Form.Control type="text" name="PhotoTags" required 
                        defaultValue={this.props.phtags}
                        placeholder="PhotoTags"/>
                    </Form.Group>

                    <Form.Group controlId="PhotoURL">
                        <Form.Control type="text" name="PhotoURL" required 
                        defaultValue={this.props.photo}
                        placeholder="PhotoURL"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update data
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}