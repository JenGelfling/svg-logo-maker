
const inquirer = require("inquirer")



gatherInfo(){
    // inquirer.prompt questions here for the classes
    const answers = inquirer.prompt(){

    }
    
}



class Shape {
    constructor(shapeColor, logoColor, logoText){

    }
}


class Circle {
    constructor(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>
        </svg>
        `
    }
}


class Triangle {
    constructor(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>
        </svg>
        `
    }
}


class Square {
    constructor(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="60" y="10" rx="10" ry="10" fill="${shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>
        </svg>
        `
    }
}


