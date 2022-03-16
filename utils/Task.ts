export default class Task {
    key: string;

    name: string;

    constructor(newName: string) {
        const currentDateTime = new Date(Date.now()).toISOString();
        this.key = newName + currentDateTime;
        this.name = newName;
    }
}
