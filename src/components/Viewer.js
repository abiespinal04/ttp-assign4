import React, { Component } from 'react';
import '../styles/Viewer.css'
import Blocks from './Blocks'


class Viewer extends Component {
    state = {  }

    handleColorRed = () => {
        
        let blocks = document.querySelector(".Block .first");
        if(blocks.style.backgroundColor === 'red'){
        blocks.style.backgroundColor =  "white"
        } else {
            blocks.style.backgroundColor = 'red'
        }
    } 
    handleColorBlue = () => {
        let blocks = document.querySelector(".Block .second");
        if(blocks.style.backgroundColor === 'blue'){
        blocks.style.backgroundColor =  "white"
        } else {
            blocks.style.backgroundColor = 'blue'
        }
    }
    handleColorPurple = () => {
        let blocks = document.querySelector(".Block .third");
        if(blocks.style.backgroundColor === 'purple'){
        blocks.style.backgroundColor =  "white"
        } else {
            blocks.style.backgroundColor = 'purple'
        }
    }
    handleColorYellow = () => {
        let blocks = document.querySelector(".Block .fourth");
        if(blocks.style.backgroundColor === 'yellow'){
        blocks.style.backgroundColor =  "white"
        } else {
            blocks.style.backgroundColor = 'yellow'
        }
    }

    handleColorRedRow = () => {
 
        var newDiv = document.createElement('div'); 
        newDiv.className= ".Block . first"
        newDiv.addEventListener("click", function(){ 
            if(newDiv.style.backgroundColor === 'red'){
            newDiv.style.backgroundColor='white' }
            else {
                newDiv.style.backgroundColor='red' 
            }
        }
            )
        // add the newly created element and its content into the DOM 
        var currentDiv = document.querySelector(".Block"); 
        currentDiv.appendChild(newDiv); 
    }
    handleColorBlueRow = () => {
        var newDiv = document.createElement('div'); 
        newDiv.className= ".Block . first"
        newDiv.addEventListener("click", function(){ 
            if(newDiv.style.backgroundColor === 'blue'){
            newDiv.style.backgroundColor='white' }
            else {
                newDiv.style.backgroundColor='blue' 
            }
        }
            )
        // add the newly created element and its content into the DOM 
        var currentDiv = document.querySelector(".Block"); 
        currentDiv.appendChild(newDiv); 
    }
    handleColorPurpleRow = () => {
        let blocks = document.querySelector(".Block .row3");
        blocks.style.backgroundColor =  "purple"
    }
    handleColorYellowRow = () => {
        let blocks = document.querySelector(".Block .row4");
        blocks.style.backgroundColor =  "yellow"
    }


    render() { 
        return ( 

            <React.Fragment>
            <div className="MainContainer">
                <h1>
                    Color Selection
                </h1>
                <ul>
                    <li>
                    <button className="MainContainer button1"
                    onClick={this.handleColorRed}
                    >
                    RED
                    </button >
                    <button className=""
                    onClick={this.handleColorRedRow}
                    >
                    ROWS
                    </button >
                    <button className=""
                    // onClick={this.handleColorRedRow}
                    >
                    COLUMNS
                    </button >
                    
                    </li>
                    <li>
                    <button className="MainContainer button2"
                      onClick={this.handleColorBlue}
                    >
                    BLUE
                    </button>
                    <button className=""
                    // onClick={this.handleColorRed}
                    >
                   ROWS
                    </button >
                    <button className=""
                    onClick={this.handleColorBlueRow}
                    >
                  COLUMNS
                    </button >

                    </li>
                    <li>
                    <button className="MainContainer button3"
                      onClick={this.handleColorPurple}>
                    PURPLE
                    </button>
                    <button className=""
                    // onClick={this.handleColorRed}
                    >
                   ROWS
                    </button >
                    <button className=""
                    // onClick={this.handleColorRed}
                    >
                   COLUMNS
                    </button >


                    </li>
                    <li>
                    <button className="MainContainer button4"
                      onClick={this.handleColorYellow}>
                    YELLOW
                    </button>
                    <button className=""
                    // onClick={this.handleColorRed}
                    >
                  ROWS
                    </button >
                    <button className=""
                    // onClick={this.handleColorRed}
                    >
                    COLUMNS
                    </button >

                    </li>
                </ul>
              
            </div>

            <div>
                <Blocks />
            </div>
            </React.Fragment>
         );
    }
}
 
export default Viewer;