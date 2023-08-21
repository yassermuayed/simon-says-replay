export default class Block {
    block;
    constructor(type = "div", options = {}) {
        // WTF wtf is this.this
        this.block = document.createElement(type);
        Object.assign(this.block, options);
        return this.block;
    }
}