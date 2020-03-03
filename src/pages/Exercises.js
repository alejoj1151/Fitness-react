import React from "react"

import Welcome from "../components/Welcome";
import Technique_Img from "../images/exercise.png";
import Skill_Img from "../images/exercises02.png";
import Strength_Img from "../images/exercise03.png";
import AddE_Img from "../images/add.png"
import ExercisesList from "../components/ExerciseList";
import AddButton from "../components/AddButton";

class Exercises extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data:[
                {
                    "id": 1,
                    "title": "Tecnique Guides",
                    "description": "Learn amazing street workout and calisthenics",
                    "img": Technique_Img,
                    "leftColor": "#A74CF2",
                    "rightColor": "#617BFB"
                },
                {
                    "id": 2,
                    "title": "Skill Training",
                    "description": "Learn amazing street workout and calisthenics",
                    "img": Skill_Img,
                    "leftColor": "#17EAD9",
                    "rightColor": "#6078EA"
                },
                {
                    "id": 3,
                    "title": "Strength  Training",
                    "description": "Learn amazing street workout and calisthenics",
                    "img": Strength_Img,
                    "leftColor": "#FAD961",
                    "rightColor": "#F76B1C"
                }
            ]
        }
    }
    render() {
        return (
            // Esta declaración separa cada uno de los componentes con los que se trabajará en el aplicativo
            // Aquí se replica cada una de las declaraciones de los componentes permitiendo definir tuplas de multiples componentes del mismo tipo
            <div>
                <Welcome
                    username="Alj"
                />
                <ExercisesList
                    exercises={this.state.data}
                />
                <AddButton
                    img={AddE_Img}
                />
            </div>
        )
    }
}

export default Exercises