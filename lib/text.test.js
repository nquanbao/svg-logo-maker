const Text = require ('./text.js')

describe ('text', () => {
    it ('text should up to 3 character', () => {
        const text = new Text ('svg');
        const textVal = 'svg';
        expect(text.text).toEqual(textVal)
    })
})