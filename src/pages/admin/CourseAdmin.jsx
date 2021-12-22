import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import api from '../../Api'
import axios from 'axios'
import Module from '../../components/filter/Module'

import Sidebar from '../../components/Sidebar/Sidebar'
import { AiOutlineUser } from "react-icons/ai";
import { Table, FormGroup, Form, Button, Label, Input, } from 'reactstrap'

export default function CourseAdmin() {

    const [course, setCourse] = useState('')
    const [courses, setCourses] = useState([]);
    const [module_id, setModule] = useState(0)
    const [modules, setModules] = useState([]);
    const [validToken, setValidToken] = useState('')
    const [update, setUpdate] = useState([])
    
    useEffect(() => {
        setModules(Module);
        componentCourse();
        ckeckIsAuthUser();
    }, []);

    const history = useHistory()

    async function componentCourse() {
        const response = await api.get('course/')
        const courses = response.data

        setCourses(courses);
    }

    function ckeckIsAuthUser() {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');

        if (!(token && email)) {
            history.push('/')
        }
        setValidToken(token)
    }

    const data = { course: course, module: module_id }

    const submitHandler = e => {
        e.preventDefault()

        if (module_id === 0) {
            data.module = Module[0]?.id;

            axios.post("http://127.0.0.1:8000/api/course_create/", data, {
                headers: {
                    Authorization: `Bearer ${validToken}`
                }
            })
                .then(response => {
                    if (response.status == 200) {
                        componentCourse();
                    }
                })

                .catch(error => {
                    console.log(error)
                    window.location.reload()
                })
        }

        axios.post("http://127.0.0.1:8000/api/course_create/", data, {
            headers: {
                Authorization: `Bearer ${validToken}`
            }
        })
            .then(response => {
                if (response.status == 200) {
                    componentCourse();
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
        axios.delete(`http://127.0.0.1:8000/api/course_delete/${id}/`, {
            headers: {
                Authorization: `Bearer ${validToken}`
            }
        })
            .then(() => {
            })
            .catch(error => {
                console.log(error)
            componentCourse();
            })
    }

    function showModuleByCourse(course_id) {
        const response = modules.find((mod) => {
            if (mod.id === course_id) {
                return mod.module
            }
        })
        return response.module
    }

    function updateCourse(data) {
        setUpdate({
            course: data.course
        })

        //console.log((modules.find(item => item.id === data?.module)))
        setModules(modules.find(item => item.id === data?.module));
    }

    return (
        <div>
            <Sidebar />
            <div className="__contentAdmin">
                <div className="container">
                    <h1>Dashboard | <AiOutlineUser /> <span>Miguel Leite</span> </h1>

                    <div className="operation">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-12">
                                <Form onSubmit={submitHandler}>
                                    <FormGroup>
                                        <Label
                                            for="course"
                                            hidden
                                        >
                                            Nome do do curso:
                                        </Label>
                                        <Input
                                            id="course"
                                            name="course"
                                            placeholder="Nome do curso..."
                                            onChange={e => { setCourse(e.target.value) }}
                                            value={update.course}
                                            type="text"
                                            required
                                        />
                                    </FormGroup>
                                    <div className="form-group">
                                        <select className="form-control" name="module" id="module" onChange={(e) => setModule(e.target.value)} >
                                            {modules.map(modules => (
                                                <option key={modules.id} value={modules.id}> {modules.module} </option>
                                            ))}
                                        </select>
                                    </div>
                                    <Button color='success'>Salvar</Button>
                                </Form>
                            </div>
                            <div className="col-lg-8 col-sm-6 col-md-12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Course
                                            </th>

                                            <th>
                                                Modulo
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courses.map(courses => (
                                            <tr key={courses.id}>
                                                <td>
                                                    {courses.id}
                                                </td>
                                                <td>
                                                    {courses.course}
                                                </td>
                                                <td>
                                                    {showModuleByCourse(courses.module)}
                                                </td>
                                                <td>
                                                    <button className="btn btn-info" onClick={() => updateCourse({
                                                        id: courses.id,
                                                        course: courses.course,
                                                        module: courses.module
                                                    })}>Editar</button>
                                                    <button className="btn btn-danger" onClick={() => clickDelete(courses.id)}>Eliminar</button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}