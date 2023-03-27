let op = document.querySelectorAll(".atomic-item");
let numbers = document.querySelectorAll(".numbers");
let display = document.querySelector("#display");
let operators = document.querySelectorAll(".operators");
let tools=document.querySelectorAll(".tools");
let operand1, operand2;
let final_operator;
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        if (event.currentTarget.textContent == ".") {
            if ((display.innerHTML).includes(".")) {
                console.log("iam here");
            }
            else {
                displayText(display.innerHTML + ".");
            }
        }
        else if (display.innerHTML == "0") {
            displayText(event.currentTarget.textContent)
        }
        else {
            displayText(display.innerHTML + event.currentTarget.textContent);
        }
    })
}
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        if (event.currentTarget.textContent == "=") {
            operand2 = parseInt(display.innerHTML);
            switch (final_operator) {
                case "+": displayText(operand1 + operand2);
                    break;
                case "-": displayText(operand1 - operand2);
                    break;
                case "/": displayText(operand1 / operand2);
                    break;
                case "X": displayText(operand1 * operand2);
                    break;
                case "%": displayText(operand1 % operand2);
                    break;
            }
        }
        else {
            operand1 = parseInt(display.innerHTML);
            displayText("0");
            final_operator = event.currentTarget.textContent;
        }
    })
}
for(i=0;i<tools.length;i++){
    tools[i].addEventListener("click",(event)=>{
        switch(event.currentTarget.textContent){
            case "C":displayText("0");
            break;
            case "<--":displayText((display.innerHTML).substring(0,(display.innerHTML).length-1));
            break;
        }
    })
}