const Shape = require ('./shapes.js')

describe ('shape', () => {
    describe ('shape', () => {
        it ('shape is triangle ', () => {
            const triangle = new Shape ();
            const traingleVal = '<polygon points="150, 18 244, 182 56, 182"'
            expect(triangle.checkShape('Triangle')).toEqual (traingleVal)
        })
    })

    describe ('shape', () => {
        it ('shape is circle ', () => {
            const circle = new Shape ();
            const circleVal = '<circle cx="150" cy="120" r="80"'
            expect(circle.checkShape('Circle')).toEqual (circleVal)
        })
    })

    describe ('shape', () => {
        it ('shape is square ', () => {
            const square = new Shape ();
            const squareVal = '<rect x="88" y="59" width="125" height="125"'
            expect(square.checkShape('Square')).toEqual (squareVal)
        })
    })

})