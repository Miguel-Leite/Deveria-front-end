import { Container } from 'reactstrap'

export default function Filter(props) {
    return(
        <div>
            <div className="filter mb-5">
                <div className="filter-controls">
                    <button className="btn control"> Programação </button>
                    <button className="btn control"> Matemática </button>
                    <button className="btn control"> Microsoft Office </button>
                    <button className="btn control"> Física </button>
                    <button className="btn control"> Quica </button>
                </div>
                <Container>
                    <div className="filter-content">
                        <h3> {props.title} </h3>
                        <div className="box">
                            <div className="box-item">
                                conteudo
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    ) 
}