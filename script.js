let expression = "";

function appendNumber(number) {
  expression += number;
  updateDisplay(expression);
}

function appendOperator(operator) {
  expression += operator;
  updateDisplay(expression);
}

function clearDisplay() {
  expression = "";
  updateDisplay("");
}

function deleteDigit() {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}

function calculate() {
  try {
    const result = eval(expression);
    updateDisplay(result);
    expression = result;
  } catch (error) {
    updateDisplay("Error");
  }
}

function updateDisplay(content) {
  document.getElementById("result").value = content;
}
