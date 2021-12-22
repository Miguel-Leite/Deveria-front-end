import './auth.css'
import { useAuth } from "../hooks/useAuth.js";
import {Container, Table, FormGroup, Form, Button, Label, Input} from 'reactstrap'

import { useHistory } from "react-router-dom";
import { useState } from 'react'

export default function Login() {

  const { signIn } = useAuth();
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function SignInUser(e) {
    e.preventDefault();

    try {

      await signIn(email, password);    
      history.push('/dashboard')

    } catch (error) {
      console.log("error")
    }

  }

  return (
    <div>
      <div className="__auth">
        <div className="__box-auth">
        <h1>Login</h1>
          <Form onSubmit={SignInUser}>
              <FormGroup>
                  <Input
                  id="email"
                  name="email"
                  placeholder="Informe seu email..."
                  onChange={e => { setEmail(e.target.value) }}
                  type="email"
                  required
                  />
              </FormGroup>
              <FormGroup>
                  <Input
                  id="password"
                  name="password"
                  placeholder="Informe sua senha..."
                  onChange={e => { setPassword(e.target.value) }}
                  type="password"
                  required
                  />
              </FormGroup>
              <Button>Entrar</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
