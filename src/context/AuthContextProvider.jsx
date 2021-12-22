import { createContext, useState } from "react";
import axios from 'axios'
import api from '../Api'

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');

        if (token && email) {
            return { token, email };
        }

        return {};
    });


    async function signIn(email, password) {

        const data = {
            email: email,
            password: password
        }

        await axios.post("http://127.0.0.1:8000/api/token/", data)
            .then(res => {
                console.log(res.data.access)
                setData({
                    token: res.data.access,
                    email
                })

                localStorage.setItem('token', res.data.access);
                localStorage.setItem('email', email);
            })
            .catch(error => {

                if (error.response.status === 401) {
                    console.clear();
                    throw "ERROR"
                }
            })

    }

    return (
        <AuthContext.Provider value={{
            signIn,
            data
        }}>
            {children}
        </AuthContext.Provider>
    );
}