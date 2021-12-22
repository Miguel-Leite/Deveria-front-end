import './auth.css'
import {Container, Table, FormGroup, Form, Button, Label, Input} from 'reactstrap'
import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const submitHandler = e => {
        e.preventDefault()
        
        const data = { 
            username: username,
            email: email,
            password: password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
         }

        axios.post("http://127.0.0.1:8000/api/auth/user/create/",data)
        .then( res => {
            console.log(res.data.response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
    <div>
      <div className="__auth">
        <div className="__box-auth">
        <h1>Register</h1>
          <Form method='post' onSubmit={submitHandler}>
          <FormGroup>
                  <Input
                  id="username"
                  name="username"
                  value={username}
                  onChange={ e => setUsername(e.target.value)}
                  placeholder="Informe seu nome de usuario..."
                  type="text"
                  required
                  />
              </FormGroup>
              <FormGroup>
                  <Input
                  id="email"
                  name="email"
                  placeholder="Informe seu email..."
                  value={email}
                  onChange={ e => setEmail(e.target.value)}
                  type="email"
                  required
                  />
              </FormGroup>
              <FormGroup>
                  <Input
                  id="password"
                  name="password"
                  placeholder="Informe sua senha..."
                  value={password}
                  onChange={ e => setPassword(e.target.value)}
                  type="password"
                  required
                  />
              </FormGroup>
              <Button>Registrar-se</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
