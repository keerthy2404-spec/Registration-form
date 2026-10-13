
let textInput = document.getElementById("textInput");
let count = document.getElementById("count");
let remaining = document.getElementById("remaining");
let clearBtn = document.getElementById("clearBtn");
let warning = document.getElementById("warning");

let maxCharacters = 200;

// Update character count while typing
textInput.addEventListener("input", function () {
    let text = textInput.value;
    let totalCharacters = text.length;
    let remainingCharacters = maxCharacters - totalCharacters;

    count.textContent = totalCharacters;
    remaining.textContent = remainingCharacters;

    // Display warning when the limit is reached
    if (totalCharacters >= maxCharacters) {
        warning.textContent =
            "Warning! Maximum 200 characters allowed.";
    } else {
        warning.textContent = "";
    }
});

// Clear the text and reset the counter
clearBtn.addEventListener("click", function () {
    textInput.value = "";

    count.textContent = 0;
    remaining.textContent = maxCharacters;
    warning.textContent = "";

    textInput.focus();
});
