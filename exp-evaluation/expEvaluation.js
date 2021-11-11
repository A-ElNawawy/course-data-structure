import { getPostfix } from "../infix-to-postfix/infix-to-postfix.js";

const evaluateExp = (exp) => {
  const postfix = getPostfix(exp).split(" ");
  //console.log(postfix);
  const valStack = [];
  while (postfix.length !== 0) {
    //console.log(valStack);
    let token = postfix.shift();
    if (/[0-9]/.test(token)) {
      valStack.push(+token);
    } else {
      let firstNum = valStack.pop();
      let secondNum = valStack.pop();
      var result;
      result =
        token === "+"
          ? secondNum + firstNum
          : token === "-"
          ? secondNum - firstNum
          : token === "*"
          ? secondNum * firstNum
          : token === "/"
          ? secondNum / firstNum
          : null;
      valStack.push(result);
    }
  }

  return valStack.pop();
};

let exp, postfix, result;

exp = "2+3*4";
postfix = "2 3 4 * + ";
result = 14;
exp = "6/2-3+4*2";
postfix = "6 2 / 3 - 4 2 * + ";
result = 8;
exp = "30+10*5/2";
postfix = "30 10 5 * 2 / + ";
result = 55;
exp = "6/(2-3+4)*2+10";
postfix = "6 2 3 - 4 + / 2 * 10 + ";
result = 14;
exp = "13+20*(5+2*3)-2";
postfix = "13 20 5 2 3 * + * + 2 - ";
result = 231;
exp = "13+20*((5+2)*3)-2";
postfix = "13 20 5 2 + 3 * * + 2 - ";
result = 431;
exp = "(2+3)*4";
postfix = "";
result = 20;
exp = "6/(2-3+4)*2";
postfix = "";
result = 4;

//evaluateExp(exp);
console.log(evaluateExp(exp));
console.log(evaluateExp(exp) === result);
