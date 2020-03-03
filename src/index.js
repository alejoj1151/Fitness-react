import React from "react"
import ReactDOM from "react-dom"

import Exercises from "../src/pages/Exercises"

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Exercises/>, document.getElementById("root"))



//const element = document.createElement('h1')            // Property for create to element
//element.innerText = '12345678'                          // Inyecte in de element to value   
//const container = document.getElementById('root')       // Get element of doc by id
//container.appendChild(element)                          // Asigned the element to container
//ReactDOM.render()


/*import React from 'react'        // Import the depenndency for implement React
import ReactDOM from 'react-dom' // Method for controller the DOM

class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname
    }

    getFullName() {
        return this.firstname + ' ' + this.lastname        
    }
}*/

/* const user = {
    firstname: "Alejo",
    lastname: "Jaramillo"
}; */


/* function formatName(user) {
    return user.firstname + ' ' + user.lastname
}
 */

/*const user = new User('Alejo', 'Jaramillo');
const today = new Date();

function dateFull(date) {
    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
}

const element =  (
    
    <div>
        <h1>
            Hello {user.getFullName()}, today date is {dateFull(today)} {user.firstname}
        </h1>
        {isAlejo(user)}
    </div>
);

function isAlejo(user) {
    if(user.firstname === 'Alejo1') {
        return <h1> You are Alejo</h1>
    }
    else return <h1>You are stranger</h1>
}


console.log(Object.seal(user));

const container = document.getElementById('root');

ReactDOM.render(
    element, 
    container
);*/







