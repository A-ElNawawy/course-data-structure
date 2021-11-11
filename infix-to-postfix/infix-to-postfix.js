const getSeparatedInfix = (infix) => {
  let separatedInfix = [];
  let number = "";
  for (let i = 0; i <= infix.length; i++) {
    if (i !== infix.length) {
      if (/[0-9]/.test(infix[i])) {
        number += infix[i];
      } else {
        if (number !== "") {
          separatedInfix.push(number);
        }
        separatedInfix.push(infix[i]);
        number = "";
      }
    } else {
      separatedInfix.push(number);
    }
  }
  return separatedInfix;
};

export const getPostfix = (infix) => {
  const newInfix = getSeparatedInfix(infix);
  let postfix = "";
  const opStack = [];
  let highestPre = 0;
  const precedence = {
    "(": 0,
    ")": 0,
    "^": 3,
    "/": 2,
    "*": 2,
    "+": 1,
    "-": 1,
  };

  while (newInfix.length !== 0) {
    let token = newInfix.shift();

    if (/[0-9]/.test(token)) {
      postfix += token + " ";
    }

    if (/\(/.test(token)) {
      opStack.push(token);
      highestPre = 0;
    }

    if (/\)/.test(token)) {
      while (!/\(/.test(opStack[opStack.length - 1])) {
        postfix += opStack.pop() + " ";
      }

      opStack.pop();
      highestPre = precedence[opStack[opStack.length - 1]];
    }

    if (!/[0-9]|\(|\)/.test(token)) {
      let operatorPre = precedence[token];

      while (operatorPre <= highestPre) {
        postfix += opStack.pop() + " ";
        highestPre = precedence[opStack[opStack.length - 1]];
      }

      opStack.push(token);
      highestPre = precedence[token];
    }
  }

  while (opStack.length !== 0) {
    if (opStack.length !== 1) {
      postfix += opStack.pop() + " ";
    } else {
      postfix += opStack.pop();
    }
  }

  return postfix;
};

//let infix, postfix;

//infix = "2+3*4";
//postfix = "2 3 4 * + ";
//infix = "6/2-3+4*2";
//postfix = "6 2 / 3 - 4 2 * + ";
//infix = "30+10*5/2";
//postfix = "30 10 5 * 2 / + ";
//infix = "6/(2-3+4)*2+10";
//postfix = "6 2 3 - 4 + / 2 * 10 + ";
//infix = "13+20*(5+2*3)-2";
//postfix = "13 20 5 2 3 * + * + 2 - ";
//infix = "13+20*((5+2)*3)-2";
//postfix = "13 20 5 2 + 3 * * + 2 - ";

//console.log(getPostfix(infix));
//console.log(getPostfix(infix) === postfix);
