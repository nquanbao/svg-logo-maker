class Text {
    constructor(text) {
        this.text = text;
    }
    checkText (text) {
        if (text.length >3) {
            return 'Please enter up to 3 characters'
        } else {
            return text;
        }
    }
}

module.exports = Text;