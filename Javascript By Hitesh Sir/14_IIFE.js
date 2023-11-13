// Immediately Invoked Function Expressions (IIFE)

// Why IIFE is used ?
// Jo function immediately execute ho jaye aur kai baar global scope ke pollution se problem hoti hai kai baar toh uss global scope ke jo --> 
// --> variables hai yeh waha jo declear hai uske pollution ko hatane ke liye use hota hai.

function chai() {
    console.log(`DB Connected`);
}
chai();


// --------------------------- Named IIFE -------------------------------


(function chaiaurpani() {
    console.log(`DB Connected Again`);
})();

//  (Function Define)(Execution)

// ------------------ Example ------------

// (function chaiaurpani() {
//     console.log(`DB Connected Again`);
// })()

// -------- Arrow Function ----------------

// ----------------------- Two IIFE in the same code file -------------------------------------

( () => {
    console.log(`DB Connected Two Again`);
})();


// --------------------------- Un-named IIFE with passing parameters  -------------------------------

( (name) => {
    console.log(`DB Connected Two Again ${name}`);
})('Coder')


