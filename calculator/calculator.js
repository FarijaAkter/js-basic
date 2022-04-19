
const a = parseFloat(prompt('Enter first number: '));

const operator = prompt('Enter operator (either +, -, *, /, %):');

const b = parseFloat(prompt('Enter second number: '));

    switch(operator){
        case '+':
            document.write(a+b);
            break;
        case '-':
            document.write(a-b);
            break;
        case '*':
            document.write(a*b);
            break;
        case '/':
            document.write(a/b);
            break;
        case '%':
            document.write(a%b);
            break;
        default:
            document.write("Please Do it again");
    }

