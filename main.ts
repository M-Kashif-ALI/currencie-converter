import inquirer from "inquirer";

const currency:any = {
  USD: 1,
  EUR: 0.94,
  SAU_Riyal: 3.75,
  INR: 83.49,
  AUSD: 1.56,
  MAXI_PESO: 16.79,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "From",
    message: "Selet from exchange",
    type: "list",
    choices: ["USD", "EUR", "SAU_Riyal", "INR", "AUSD", "PKR" , 'MAXI_PESO'],
  },
  {
    name: "To",
    message: "Selet To exchange",
    type: "list",
    choices: ["USD", "EUR", "SAU_Riyal", "INR", "AUSD", "PKR" , 'MAXI_PESO'],
  },
  {
    name: "Amount",
    message: "Enter your amount",
    type: "number"
  },
]);

let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
