class Shape {
    constructor (shape) {
        // this.text = text;
        // this.textColor = textColor;
        // this.shapeColor = shapeColor;
        this.shape = shape
    }
    checkShape(shape) {
        if (shape === "triangle") {
            return '<polygon points="150, 18 244, 182 56, 182"';
        } else if (shape === "circle") {
            return '<circle cx="150" cy="120" r="80"';
        } else if (shape === "square") {
            return '<rect x="88" y="59" width="125" height="125"';
        } else {
            return;
        }
    }
}

module.exports = Shape;
