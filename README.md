<<<<<<< HEAD
# javascriptcalculator_1
=======
# JavaScript Calculator

A clean, browser-based calculator built with plain HTML, CSS, and JavaScript.

## What It Does

- Performs basic arithmetic: `+`, `-`, `*`, `/`
- Supports decimal math
- Handles invalid input gracefully (shows `Error`)
- Includes calculation history (latest first)
- Keeps the last 10 successful calculations
- Lets you clear history with one click
- Works with both mouse clicks and keyboard input

## Project Structure

- `index.html` - calculator layout and buttons
- `style.css` - styling and responsive layout
- `index.js` - calculator logic, validation, keyboard support, and history tracking

## How To Run

1.  Open this folder in VS Code (or any editor).
2. Open `index.html` in your browser.

That is it. No install needed.

## Keyboard Shortcuts

- `0-9` - enter numbers
- `+ - * / ( ) .` - enter operators
- `Enter` or `=` - calculate
- `Backspace` - delete last character
- `Escape` - clear display

## Notes on Safety

This project validates expressions before evaluating them, instead of directly evaluating action input.

## Future Improvements (Optional)

- Click a history item to reuse that expression
- Persist history in localStorage
- Add `%` and `+/-` buttons
- Add unit tests for expression parsing and result handling

## License

Use freely for learning and personal projects.
>>>>>>> 678dc61 (final calculator test)
