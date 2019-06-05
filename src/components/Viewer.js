import React, { Component } from 'react';
import '../styles/Viewer.css'
import '../styles/Blocks.css'
import Blocks from './Blocks'


class Viewer extends Component {
    state = {  }

    handleColorRed = () => {
        
        let newBlock= document.querySelector(".Block .red");
       let blocks = document.querySelectorAll(".Block .first");
        blocks.forEach(function(block) {
            block.onmouseover = function(){block.style.backgroundColor = 'red'};
           });
    } 
    handleColorBlue = () => {
        let newBlock= document.querySelector(".Block .blue");
       let blocks = document.querySelectorAll(".Block .first");
        blocks.forEach(function(block) {
            block.onmouseover = function(){block.style.backgroundColor = 'blue'};
           });
    }
    handleColorReset = () => {
        let blocks = document.querySelectorAll(".Block .first");
     
        blocks.forEach(function(userItem) {
           userItem.style.backgroundColor = "white"
          });
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
    
        let newDiv = []
        for(let i = 0; i < 10; i++){
        newDiv[i]= document.createElement('div'); 
        let text = document.createTextNode("R")
        newDiv[i].appendChild(text)
        newDiv[i].className= ".Block . first"
        newDiv[i].addEventListener("click", function(){ 
            if(newDiv[i].style.backgroundColor === 'red'){
            newDiv[i].style.backgroundColor='white' }
            else {
                newDiv[i].style.backgroundColor='red' 
            }
        }
            )
        // add the newly created element and its content into the DOM 
        var currentDiv = document.querySelector(".Block"); 
        currentDiv.appendChild(newDiv[i]);
    } 
    }

    deleteColorRedRow= () => {
    
        let newDiv = []
        // for(let i = 0; i < 10; i++){
        // document.querySelector(".Block . first").remove();
        let blocks = document.querySelectorAll(".Block .first");
        blocks.forEach(function(block) {
            block.remove()
           });
    }
    handleColorBlueRow = () => {
        let newDiv = []
        for(let i = 0; i < 10; i++){
        newDiv[i]= document.createElement('div'); 
        let text = document.createTextNode("B")
        newDiv[i].appendChild(text)
        newDiv[i].className= ".Block . first"
        newDiv[i].addEventListener("click", function(){ 
            if(newDiv[i].style.backgroundColor === 'blue'){
            newDiv[i].style.backgroundColor='white' }
            else {
                newDiv[i].style.backgroundColor='blue' 
            }
        }
            )
        // add the newly created element and its content into the DOM 
        var currentDiv = document.querySelector(".Block"); 
        currentDiv.appendChild(newDiv[i]);
    } 
    }
    handleColorRedCol = () => {
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
    handleColorBlueCol = () => {
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
                    ADD RED ROWS
                    </button >
                    <button className=""
                    onClick={this.deleteColorRedRow}
                    >
                   DELETE ROWS
                    </button >
                    <button className=""
                    onClick={this.handleColorRedCol}
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
                      onClick={this.handleColorBlueRow}
                    >
                    ADD BLUE ROWS
                    </button >
                    {/* <button className=""
                    onClick={this.handleColorBlueCol}
                    >
                  COLUMNS
                    </button > */}

                    </li>
                    <li>
                    <button className="MainContainer button3"
                      onClick={this.handleColorReset}>
                   Reset
                    </button>


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