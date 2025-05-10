import confetti from 'canvas-confetti';

document.addEventListener('DOMContentLoaded', () => {
    const codeOutput = document.getElementById('codeOutput');
    const copyBtn = document.getElementById('copyBtn');
    const copyBtnText = copyBtn.querySelector('.copy-text');
    const newJokeBtn = document.getElementById('newJokeBtn');

    const jokes = [
        {
            setup: `// Why do programmers prefer dark mode?
function preferDarkMode() {
    return "Because light attracts bugs!";
}
console.log(preferDarkMode());`
        },
        {
            setup: `// What's a programmer's favorite place to hang out?
// The Foo Bar!

function visitFooBar() {
    const message = "Meet me at the Foo Bar!";
    // TODO: Implement actual bar visit
    return message;
}
console.log(visitFooBar());`
        },
        {
            setup: `/*
Q: How many programmers does it take to change a light bulb?
A: None. It's a hardware problem.
*/

function solveProblem(problem) {
    if (problem.type === "software") {
        return "Fixing the software bug...";
    } else if (problem.type === "hardware") {
        return "It's a hardware problem!";
    }
    return "Problem type unknown.";
}
console.log(solveProblem({ type: "hardware" }));`
        },
        {
            setup: `// Why was the JavaScript developer sad?
// Because he didn't Node how to Express himself.

const developer = {
    language: "JavaScript",
    mood: "sad",
    reason: null
};

if (!knowsNode() || !knowsExpress()) {
    developer.reason = "Doesn't Node how to Express himself.";
}

function knowsNode() { return false; /* for the sake of the joke */ }
function knowsExpress() { return false; /* for the sake of the joke */ }

console.log(\`The \${developer.language} developer is \${developer.mood} because he \${developer.reason}\`);`
        },
        {
            setup: `// Definition of a programmer:
// An organism that turns caffeine and pizza into software.

class Programmer {
    constructor(name) {
        this.name = name;
        this.fuel = ["caffeine", "pizza"];
    }

    code() {
        if (this.fuel.includes("caffeine") && this.fuel.includes("pizza")) {
            return \`\${this.name} is producing awesome software!\`;
        }
        return \`\${this.name} needs more fuel...\`;
    }
}
const dev = new Programmer("AI Coder");
console.log(dev.code());`
        },
        {
            setup: `// There are 10 types of people in the world:
// Those who understand binary, and those who don't.
// And those who didn't expect a ternary joke.

const understandingBinary = true;
const expectedTernary = false;

function checkTypes(understands, expected) {
    return understands ? 
        (expected ? "You get all 3 types!" : "You are one of the 10 types!") 
        : "Keep learning binary!";
}
console.log(checkTypes(understandingBinary, expectedTernary));`
        },
        {
            setup: `// Why don't programmers like nature?
// It has too many bugs.

function assessNature() {
    const bugsInNature = Math.floor(Math.random() * 100) + 1; // Simulates finding bugs
    if (bugsInNature > 50) { // Arbitrary threshold
        return \`Found \${bugsInNature} bugs. Staying inside!\`;
    }
    return \`Only \${bugsInNature} bugs. Enjoying the (relatively) bug-free outdoors!\`;
}
console.log(assessNature());`
        }
    ];

    function displayNewJoke() {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const joke = jokes[randomIndex];
        codeOutput.textContent = joke.setup;
    }

    function copyCodeToClipboard() {
        const codeText = codeOutput.textContent;
        navigator.clipboard.writeText(codeText)
            .then(() => {
                const originalText = copyBtnText.textContent;
                copyBtnText.textContent = "Copied!";
                
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6, x: 0.5 },
                    angle: 90,
                    scalar: 0.8
                });

                copyBtn.disabled = true;
                setTimeout(() => {
                    copyBtnText.textContent = originalText;
                    copyBtn.disabled = false;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                // Provide more user-friendly feedback if possible
                copyBtnText.textContent = "Error!";
                 setTimeout(() => {
                    copyBtnText.textContent = "Copy";
                }, 2000);
                // Fallback for older browsers or if permissions denied, though alert is disruptive.
                // Consider a small, non-modal notification UI element for better UX.
                // alert("Failed to copy to clipboard. Please try again or copy manually.");
            });
    }

    newJokeBtn.addEventListener('click', displayNewJoke);
    copyBtn.addEventListener('click', copyCodeToClipboard);

    // Display a joke on initial load
    displayNewJoke();
});

