// // Constructor Arithmetic is imported.
// const Arithmetic = require('../arithmetic.js');

// // A testing suite for Arithmetic is created.
// describe('Arithmetic', () => {
//   // A test is created to check that sum does in fact return the two numbers added together.
//   describe('sum', () => {
//     it('should take two numbers and add them together', () => {
//       const total = 4;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.sum(2, 2)).toEqual(total);
//     });
//   });

//   // A test is created to check that the difference does in fact return the difference between the two numbers.
//   describe('difference', () => {
//     it('should take two numbers find the difference', () => {
//       const total = 0;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.difference(2, 2)).toEqual(total);
//     });
//   });

//   // A test is created to check that product does in fact return the two numbers multiplied together.
//   describe('product', () => {
//     it('should take two numbers and multiply them together', () => {
//       const total = 4;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.product(2, 2)).toEqual(total);
//     });
//   });

//   // A test is created to check that quotient does in fact return the quotient of the two numbers.
//   describe('quotient', () => {
//     it('should take two numbers and divide them', () => {
//       const total = 1;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.quotient(2, 2)).toEqual(total);
//     });
//   });
// });


const { Circle, Triangle, Square } = require('./shapes');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('Test of the Shape Classes', () => {
    test('Circle class render method returns correct SVG string', () => {
        const shape = new Circle('blue', 'SVG', 'black');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    test('Triangle render method should return correct SVG string', () => {
        const shape = new Triangle('red', 'SVG', 'white');
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />');
    });

    test('Square render method returns correct SVG string', () => {
        const shape = new Square('green', 'SVG', 'yellow');
        shape.setColor("blue");
        expect(shape.render()).toEqual('rect x="60" y="10" width="180" height="180" fill="blue" />');
    });
});


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');