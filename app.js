import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "ques_1",
        type: "list",
        message: "Q1. What is the correct way to check if two values are not equal in typescript?",
        choices: ["a == b", "a ===b", "a = b", "a !== b"]
    },
    {
        name: "ques_2",
        type: "list",
        message: "Q2. Which of the following characters is commonly allowed in variable names in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "ques_3",
        type: "list",
        message: "Q3. Which operator is commonly used for string concatenation in typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "ques_4",
        type: "list",
        message: "Q4. In typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "ques_5",
        type: "list",
        message: "Q5. Which method of Inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.ques_1) {
    case "a !== b":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.ques_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.ques_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.ques_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.ques_5) {
    case "prompt()":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`Score: ${score}`);
