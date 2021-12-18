import { Container } from 'reactstrap'
import video from '../../assets/img/course.mp4'
import { Link } from 'react-router-dom'
import { Module } from './Module'
import { Course } from './Course'
import React, {useState, useEffect} from 'react'

export default function Filter(props) {

    const [items, setItems] = useState(Module);
    const [course, setCourse] = useState([]);


    useEffect(()=>{
        setCourse(Course);
    }, []);

    const filterItem = (courseItem) => {
        const updatedItems = Course.filter((curElem) => {
            if (curElem.module == courseItem) {
                console.log(curElem.name) 
            }
        });
        setItems(updatedItems)
    }

    function getCourseByModule(module_id) {
        let joinModuleByCourse = course.filter(item => item.module == module_id);
        setCourse(joinModuleByCourse);          

        //console.log(joinModuleByCourse);
    }

    return(
        <div>            
            <div className="filter mb-5">
                <div className="filter-controls">

                    {
                        items.map(({id, name}) => (
                            <button 
                                className="btn control" 
                                key={id} 
                                onClick={
                                    () => getCourseByModule(id)
                                }> {name} </button>
                        ))  
                    }

                    {/* <button className="btn control"> Programação </button>
                    <button className="btn control"> Matemática </button>
                    <button className="btn control"> Microsoft Office </button>
                    <button className="btn control"> Física </button>
                    <button className="btn control"> Quica </button> */}
                </div>
                <Container>
                    <div className="filter-content">
                        <h3> {props.title} </h3>

                        <h6>Aulas: <span>1/3</span></h6>
                        <div className="box">

                        {
                            console.log(course.map((item) => item))
                        }
                            
                            <div className="container">
                                <div className="row">                                   
                                    <div className="col-md-6 col-sm-6 col-lg-4">
                                        <div className="box-item">
                                            <div className="video-course">
                                                <video autoPlay muted loop className="w-100">
                                                    <source src={video} />
                                                </video>
                                            </div>
                                            <div className="content">
                                            <h5> Curso de react </h5>
                                            <p>dolor sit amet consectetur adipisicing elit. Doloribus, earum? ipsum, dolor sit amet consectetur adipisicing...</p>
                                            <div className="box-footer">
                                                <p>1/1</p>
                                                <p>120/120 minutos</p>
                                            </div>
                                            <Link to='/cursos' className="btn">Assistir</Link>
                                        </div>
                                    </div>

                                    </div>

                                    <div className="col-md-6 col-sm-6 col-lg-4">
                                        <div className="box-item">
                                             <div className="video-course">
                                                <video autoPlay muted loop className="w-100">
                                                    <source src={video} />
                                                </video>
                                            </div>
                                            <div className="content">
                                            <h5> Curso de react </h5>
                                            <p>dolor sit amet consectetur adipisicing elit. Doloribus, earum? ipsum, dolor sit amet consectetur adipisicing...</p>
                                            <div className="box-footer">
                                                <p>1/1</p>
                                                <p>120/120 minutos</p>
                                            </div>
                                            <Link to='/cursos' className="btn">Assistir</Link>
                                        </div>
                                    </div>

                                    </div>

                                    <div className="col-md-6 col-sm-6 col-lg-4">
                                        <div className="box-item">
                                             <div className="video-course">
                                                <video autoPlay muted loop className="w-100">
                                                    <source src={video} />
                                                </video>
                                            </div>
                                            <div className="content">
                                            <h5> Curso de react </h5>
                                            <p>dolor sit amet consectetur adipisicing elit. Doloribus, earum? ipsum, dolor sit amet consectetur adipisicing...</p>
                                            <div className="box-footer">
                                                <p>1/1</p>
                                                <p>120/120 minutos</p>
                                            </div>
                                            <Link to='/cursos' className="btn">Assistir</Link>
                                        </div>
                                    </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </Container>
            </div>
        </div>
    ) 
}