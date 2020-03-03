import React from "react"
import './styles/Add.css'

function AddButton(props) {
    return(
        <div >
            <img src={props.img} className="center Fitness-Add" alt="exercise"/>
        </div>
    )

}

export default AddButton