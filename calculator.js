let expression = [];

function onExpressionButtonClick(express){
    expression.push(express);
    console.log(expression);
}

function calculateExpression(){
    // calculate expression and return result
    for(let i = 0;i<expression.length;i++){
        const exp = expression[i];
        switch (exp) {
            case value:'+'
                expression.push(expression.pop() + expression.pop());
                break;
            case value:'-'
                expression.push(expression.pop()-expression.pop());
                break;
            case value:'*'
                expression.push(expression.pop()*expression.pop());
                break;
            case value:'/'
                expression.push(expression.pop()/expression.pop());
                break;
            default:
                expression.push(parseInt(exp));
                break;
        }
    }
    const result =  expression.pop();
    console.log(result);

}

function onRemoveButtonClick(){
    expression.pop();
    console.log(expression);
}

function clearExpression(){
    expression.length = 0;
    console.log(expression);
}