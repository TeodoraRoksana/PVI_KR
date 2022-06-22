import React,{Component} from 'react';
import {Image, Table, Form} from 'react-bootstrap';
import './Photo.css';


import {Button,ButtonToolbar} from 'react-bootstrap';

export class Department extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false, comment:""}
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    refreshList(){
        fetch('http://localhost:53535/api/photo/'+this.state.comment)
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({comment:event.target.Search.value})
    }

    render(){
        const {deps, phid,phtags, photo}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});


        return(
            <div >
               
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Search">
                        <Form.Control type="text" name="Search"  
                        placeholder="Search"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Form.Group>
                </Form>

                <Table hover size="sm">
                    <tbody>
                        {deps.map(phot=>
                            <tr key={phot.PhotoId}>
                               <td className='photo'>
                                    <img src={phot.PhotoURL} className='img-fluid'  />
                                </td>
                                <td>id: {phot.PhotoId}<br/>{phot.PhotoTags}</td>
                                 
                                <td>
                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                

                

                
            </div>
        )
    }
}