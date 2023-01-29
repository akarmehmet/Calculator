let expression = [];
let operand = "0";


function onOperandButtonClick(number) {
    if (operand === '0')
        operand = '';

    operand += number;
    updateExpressionText();
    console.log(operand);
}

function onOperationButtonClick(operation) {
    
    if (expression[0] === '0')
        expression[0] = operand;
    else{
        expression.push(operand);
    }

    if (isLastElementOperation())
        expression.pop();

    

    expression.push(operation);
    operand = "0";
    updateExpressionText();
    console.log("onOperationButtonClick -> "+expression);
    calculateExpression();
}

function isLastElementOperation() {
    const lastElement = expression[expression.length - 1];
    return (lastElement === '+' ||
        lastElement === '-' ||
        lastElement === '*' ||
        lastElement === '/');
}

function calculateExpression() {
     console.log("calculateExpression -> "+expression +"operand ->" + operand);

    if (operand !== '0') {
        const operation = expression[1];
        expression[1] = operand;
        expression[2] = operation;
        operand = '0';
    }

    

    if (expression.length < 3)
        return;

    const stack = [];

    let lastOperation;

    if(expression.length>3){
        lastOperation = expression.pop();
        const operation = expression[1];
        const operand = expression[2];
        expression[1] = operand;
        expression[2] = operation;
    }
    
    
    for (let i = 0; i < expression.length; i++) {
        const exp = expression[i];
        console.log("exp : " + exp);
        switch (exp) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                stack.push(-stack.pop() + stack.pop());
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                stack.push(stack.pop() / stack.pop());
                break;
            default:
                stack.push(parseInt(exp));
                break;
        }
        console.log("stack : " + stack);
    }
    const result = stack.pop();
    console.log(result);
    
    
    if(lastOperation !== undefined){
        expression.length = 0;
        expression.push(result);
        expression.push(lastOperation);
        operand='0';
    }
    else{
        operand = result.toString();
    }
    updateExpressionText();
    updateResult(result);

}

function onRemoveButtonClick() {
    if(operand.length === 1 && operand !== '0'){
        operand = '0'
        console.log(operand);
        return;
    }
    else if (operand !== '0') {
        let number = [...operand];
        number.pop();
        operand = number.reduce((initial, element) => { return initial += element }, "");
        console.log(operand);
    }
    else {
        expression.pop();
        console.log(expression);
    }

}

function clearExpression() {
    expression.length = 0;
    operand = '0';
    updateResult(0);
    updateExpressionText();
    console.log(expression);
}

function updateExpressionText(){
    const expressionText = document.querySelector('.calcExpression');
    expressionText.textContent = '';
    expression.forEach(element => expressionText.textContent+=element );
    if(operand!=='0')
        expressionText.textContent += operand;

}

function updateResult(result){
    const resultText = document.querySelector('.calcResult');
    resultText.textContent = result.toString();
}