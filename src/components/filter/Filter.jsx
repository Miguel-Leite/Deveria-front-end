import { Container } from "reactstrap";
import video from "../../assets/img/course.mp4";
import { Link } from "react-router-dom";
import Module from "./Module";
import Course from "./Course";
import React, { useState, useEffect } from "react";


export default function Filter(props) {
  const [items, setItems] = useState([]);
  const [course, setCourse] = useState([]);
  const [courseByState, setCourseByState] = useState([]);
  const [getModule, setModule] = useState([])

  useEffect(() => {
    setItems(Module);
    setCourse(Course);
  }, []);

  useEffect(() => {
    loadFirstModuleWithCourses();
  }, [course]);

  function getCourseByModule(module_id) {
    setCourseByState(course.filter((item) => item.module === module_id));
  }

  function loadFirstModuleWithCourses() {
    const firstModule = items[0]?.id;
    setCourseByState(course.filter((item) => item.module === firstModule));
  }


  return (
    <div>
      <div className="filter mb-5">
        <div className="filter-controls">
          {items.map(({ id, module }) => (
            <button
              className="btn control"
              key={id}
              onClick={() => getCourseByModule(id)}
            >
              {module}
            </button>
          ))}
        </div>
        <Container>
          <div className="filter-content">
            <h3> {props.title} </h3>

            <h6>
              Aulas:
              <span>
                {courseByState.length}/{courseByState.length}
              </span>
            </h6>
            <div className="box">
              <div className="container">
                <div className="row">
                  {!!courseByState.length ? (
                    courseByState.map((item) => (
                      <div className="col-md-6 col-sm-6 col-lg-4" key={item.id}>
                        <div className="box-item">
                          <div className="video-course">
                            <video autoPlay muted loop className="w-100">
                              <source src={video} />
                            </video>
                          </div>
                          <div className="content">
                            <h5> {item.course} </h5>
                            <p>
                              dolor sit amet consectetur adipisicing elit.
                              Doloribus, earum? ipsum, dolor sit amet
                              consectetur adipisicing...
                            </p>
                            <div className="box-footer">
                              <p>1/1</p>
                              <p>120/120 minutos</p>
                            </div>
                            <Link to="/cursos" className="btn">
                              Assistir
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                      <div className="alert alert-info text-center col-12" role="alert">
                        <div className="name">
                          <strong><h2> Sem items </h2></strong>
                        </div>
                      </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
