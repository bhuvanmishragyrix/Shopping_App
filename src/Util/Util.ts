const readline = require('readline');

class Util {
    rl

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    printToTerminalAndWaitForResponse = (question: string) => {

        return new Promise((resolve, reject) => {
            this.rl.question(question, (answer) => {

                resolve(answer);
                this.rl.close();
            });
        })
    }
}

export default Util;