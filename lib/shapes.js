

class Shape {
    constructor(shapeColor, logoColor, logoText){

    }
}

/*
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">gta</text></svg>
*/


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

    }
}


class Square {
    constructor(){

    }
}

