import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {Container, Table} from 'reactstrap'
import Sidebar from '../../components/Sidebar/Sidebar'
import { AiOutlineUser,AiFillRead,AiFillProfile } from "react-icons/ai";
import api from '../../Api'

export default function Home() {
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
      }

    return (
        <div>
            <Sidebar />
            <div className="__contentAdmin">
                <div className="container">
                    <h1>Dashboard | <AiOutlineUser/> <span>Miguel Leite</span> </h1>
                    
                    <div className="__box">
                        <div className="row">

                            <div className="col-lg-4 col-sm-6 col-md-12">
                                <div className="__box-item box-color-1">
                                    <div className="container">
                                        <div className="__box-inner">
                                            <div className="icon">
                                                <AiOutlineUser />
                                            </div>
                                            <div className="text">
                                                <h4>USUÁRIO</h4>
                                                <h6>56</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-12">
                                <div className="__box-item box-color-2">
                                    <div className="container">
                                        <div className="__box-inner">
                                            <div className="icon">
                                                <AiFillProfile />
                                            </div>
                                            <div className="text">
                                                <h4>Modulos</h4>
                                                <h6>56</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-12">
                                <div className="__box-item box-color-3">
                                    <div className="container">
                                        <div className="__box-inner">
                                            <div className="icon">
                                                <AiFillRead />
                                            </div>
                                            <div className="text">
                                                <h4>Cursos</h4>
                                                <h6>56</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                <div className="module">

                    <Table
                        >
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Modulo
                                    </th>
                                    <th>
                                        Curso
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        Javascript
                                    </td>
                                    <td>
                                        React
                                    </td>
                                </tr>
                            </tbody>
                    </Table>

                </div>
                    
                    
                </div>
            </div>
            
        </div>
    )
}