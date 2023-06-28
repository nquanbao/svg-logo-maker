class Text {
    constructor(text) {
        this.text = text;
    }
    checkText (text) {
        if (text.length !=3) {
            return 'Please enter up to 3 characters';
        } else {
            const textUp = text.toUpperCase()
            return textUp;
        }
    }
}

module.exports = Text;