
const { Circle, Triangle, Square } = require('./shapes');


describe('Test of the Shape Classes', () => {
    test('Circle class render method returns correct SVG string', () => {
        const shape = new Circle('blue', 'SVG', 'white');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
            </svg>`.trim();
        expect(shape.render()).toEqual(expectedSvg);
    })

    test('Triangle class render method should return correct SVG string', () => {
        const shape = new Triangle('red', 'SVG', 'black');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 250,180 50,180" fill="red" />
            <text x="150" y="160" font-size="60" text-anchor="middle" fill="black">SVG</text>
            </svg>`.trim();
        expect(shape.render()).toEqual(expectedSvg);
    })

    test('Square class render method returns correct SVG string', () => {
        const shape = new Square('green', 'sVg', 'yellow');
        const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="10" width="180" height="180" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">sVg</text>
            </svg>`.trim();
        expect(shape.render()).toEqual(expectedSvg);
    })
})
