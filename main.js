// Background Calculator Extension

// Function to evaluate mathematical expressions
function evaluateMathExpression(input) {
    try {
        // Use regex to check if the input is a valid math expression
        const mathRegex = /^[0-9+\-*/().\s]+$/;
        if (mathRegex.test(input)) {
            // Evaluate the mathematical expression
            const result = eval(input); // Evaluate safely for this use case
            return result;
        }
    } catch (error) {
        console.error("Failed to evaluate math expression:", error);
    }
    return null;
}

// Hook into SillyTavern's message handling
window.addEventListener("characterResponse", (event) => {
    const userMessage = event.detail.user_message; // User's input message
    const charResponse = event.detail.character_response; // Character's response

    // Attempt to evaluate any math expression in the user's message
    const mathResult = evaluateMathExpression(userMessage);

    if (mathResult !== null) {
        // If a valid math expression was found, modify the character's response
        event.detail.character_response = `${charResponse}\n\nBy the way, I calculated that for you: ${mathResult}`;
    }
});

// Log that the extension has been loaded
console.log("Background Calculator Extension Loaded");
