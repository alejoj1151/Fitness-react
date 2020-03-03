import React from "react"
import exerciseImg from "../images/exercise.png"
import circlesImg from "../images/circles.png"
import './styles/Card.css'

// Definiendo componentes de clase
class Card extends React.Component {

    constructor(props) {
        // pasando las props al padre de todo
        super(props)
        this.state = {
            image: "'{exerciseImg}'"
        }
    }

    // Ejecutada despues de que un componente se monte
    componentDidMount() {
        setTimeout(() => {
            // Forma ideal para hacer un render
            this.setState({ // Mutar un estado
                image: this.props.img
            })
        }, 3000)
    }

    render() { // This function is use for render or print all content in the component 
        const {title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right" alt="exercise"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// For use this file in other in project
export default Card