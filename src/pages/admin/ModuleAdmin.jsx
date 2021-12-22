import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AiOutlineUser,AiFillRead,AiFillProfile } from "react-icons/ai";
import Sidebar from '../../components/Sidebar/Sidebar'
import {Container, Table, FormGroup, Form, Button, Label, Input} from 'reactstrap'
import axios from 'axios'
import React, { useState } from 'react' 
import Module from '../../components/filter/Module'


export default function ModuleAdmin () {

    const [validToken, setValidToken] = useState('')
    const [module, setModule] = useState('')

    useEffect(() => {
        ckeckIsAuthUser();
      }, []);

    const history = useHistory()
    
    function ckeckIsAuthUser() {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
    
        if (!(token && email)) {
          history.push('/')
        }
        setValidToken(token)
      }

    // const token = console.log(localStorage.getItem('token'))
    const changeHandler = e => {
        setModule(e.target.value)
    }

    /**
     * METHOD FOR SAVE MODULE
     * 
     */
    const submitHandler = e => {
        e.preventDefault()
        const data = {module: module}
        
        axios.post("http://127.0.0.1:8000/api/module_create/", data, {
            headers: {
                Authorization: `Bearer ${validToken}`
            }
        })
        .then(response => {
            if ( response.status == 200) {
                window.location.reload()
            }
        })
        .catch(error => {
            console.log(error)
            window.location.reload()
        })
    }

    /**
     * METHOD FOR DELETED MODULE
     * 
     */
    const clickDelete = id => {
        axios.post(`http://127.0.0.1:8000/api/module_delete/${id}/`,{
            headers: {
                Authorization: `Bearer ${validToken}`
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Sidebar />
            <div className="__contentAdmin">
                <div className="container">
                    <h1>Dashboard | <AiOutlineUser/> <span>Miguel Leite</span> </h1>
                    <div className="operation">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-12">
                            <Form onSubmit={submitHandler}>
                                <FormGroup>
                                    <Label
                                    for="module"
                                    hidden
                                    >
                                    Nome do modulo: 
                                    </Label>
                                    <Input
                                    id="module"
                                    name="module"
                                    onChange={changeHandler}
                                    placeholder="Nome do modulo..."
                                    type="text"
                                    required
                                    />
                                </FormGroup>
                                <Button color='success'>Salvar</Button>
                            </Form>
                            </div>
                            <div className="col-lg-8 col-sm-6 col-md-12">
                                <div className="data-table">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    #
                                                </th>
                                                <th>
                                                    Modulo
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { Module.map( module => (
                                            <tr key={module.id}>
                                                <td>
                                                    {module.id}

                                                </td>
                                                <td>
                                                    {module.module}
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={ () => clickDelete(module.id) }>Eliminar</button>
                                                </td>
                                            </tr>

                                        ) ) }
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
