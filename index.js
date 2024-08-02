
const inquirer = require("inquirer")
const fs = require('fs');
const path = require('path');
const { gatherInfo, Shape, Circle, Square, Triangle  } = require("./lib/shapes");

async function createSvg(){
    try {
        const response = await inquirer.prompt(gatherInfo());   
        let shape;
        if(response.shape === "Circle"){
            shape = new Circle(response.shapeColor, response.text, response.textColor)
        }
        else if(response.shape === "Square"){
            shape = new Square(response.shapeColor, response.text, response.textColor) 
        }
        else if(response.shape === "Triangle"){
            shape = new Triangle(response.shapeColor, response.text, response.textColor) 
        }
        if (shape){
            const newSvg = shape.render();
            fs.writeFile(path.join(__dirname, './examples', "logo.svg"), newSvg, function(err){
                if(err) console.log(err)
            })
        }
    } catch (error) {
    console.error('Error occurred:', error)
    }
}

createSvg();
