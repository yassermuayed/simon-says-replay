export default class Signal {
    constructor() {
        this.listeners = [];
    }
    add(listener) {
        this.listeners.push(listener);
    }
    remove(listener) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }
    emit(message) {
        this.listeners.forEach((listener) => listener(message));
        console.log("Signal emitted with message: ", message);
    }
}