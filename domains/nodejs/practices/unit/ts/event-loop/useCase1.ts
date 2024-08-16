console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout 1
// Timeout 2