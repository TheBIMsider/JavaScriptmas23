const originalArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

document.getElementById('originalArray').innerText = flattenArray(originalArray).join(', ');

function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}

function saveSanta() {
    const dangerArray = JSON.parse(JSON.stringify(originalArray)); // Clone the original array

    const santasArray = [];
    const remainingArray = [];

    function processArray(subArray) {
        const localSantasArray = [];
        const localRemainingArray = [];

        for (const item of subArray) {
            if (Array.isArray(item)) {
                const [santas, remaining] = processArray(item);
                localSantasArray.push(...santas);
                if (remaining.length > 0) {
                    localRemainingArray.push(...remaining);
                }
            } else {
                if (item === "🎅") {
                    localSantasArray.push(item);
                } else {
                    localRemainingArray.push(item);
                }
            }
        }

        return [localSantasArray, localRemainingArray];
    }

    const [finalSantas, finalRemaining] = processArray(dangerArray);

    santasArray.push(...finalSantas);
    remainingArray.push(...finalRemaining);

    // Update the HTML content
    document.getElementById('santas').innerHTML = santasArray.join(', ');
    document.getElementById('remaining').innerHTML = remainingArray.join(', ');
    
    console.log("Original:", originalArray);
    console.log("Santas:", finalSantas);
    console.log("Remaining:", finalRemaining);
}
