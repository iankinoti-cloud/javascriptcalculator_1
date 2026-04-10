
const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

const VALID_EXPRESSION = /^[0-9+\-*/.()\s]+$/;
const MAX_HISTORY_ITEMS = 10;
const historyEntries = [];

function appendToDisplay(input) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    if (display.value === "Error") {
        display.value = "";
        return;
    }

    display.value = display.value.slice(0, -1);
}

function sanitizeExpression(raw) {
    const trimmed = raw.trim();
    if (!trimmed || !VALID_EXPRESSION.test(trimmed)) {
        throw new Error("Invalid characters");
    }

    return trimmed;
}

function renderHistory() {
    historyList.innerHTML = "";

    historyEntries.forEach((entry) => {
        const item = document.createElement("li");
        item.textContent = entry;
        historyList.appendChild(item);
    });
}

function addToHistory(expression, result) {
    historyEntries.unshift(`${expression} = ${result}`);

    if (historyEntries.length > MAX_HISTORY_ITEMS) {
        historyEntries.length = MAX_HISTORY_ITEMS;
    }

    renderHistory();
}

function clearHistory() {
    historyEntries.length = 0;
    renderHistory();
}

function calculate() {
    try {
        const safeExpression = sanitizeExpression(display.value);
        const result = Function(`"use strict"; return (${safeExpression});`)();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        const resultText = String(result);
        addToHistory(safeExpression, resultText);
        display.value = resultText;
    } catch (error) {
        display.value = "Error";
    }
}

window.addEventListener("keydown", (event) => {
    const allowedKeys = "0123456789+-*/().";

    if (allowedKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        event.preventDefault();
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    } else {
        return;
    }

    event.preventDefault();
});