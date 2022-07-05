const pw = document.getElementById('pw');
const copy = document.getElementById('copy');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');
const keyword = document.getElementById('Keyword');
const lenEl = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVEXYZ";

const lowerLetters = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=/><;";

function getLower() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}


function getUpper() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];

}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

let array_of_functions = [getUpper, getLower , getSymbol, getNumber ]

function generatePassword() {

   

    var array_of_indices = [];
    
    const LENGTH = lenEl.value;

    let pass = "";

    if(upper.checked){
        array_of_indices.push(1);
    }

    if(lower.checked){
        array_of_indices.push(0);
    }

    if(number.checked){
        array_of_indices.push(3);
    }

    if(symbol.checked){
        array_of_indices.push(2);
    }
    

    
    if (keyword.value !== ""){
        if(keyword.value.length > LENGTH){
            alert("keyword too long");
            return;
        }
        
        pass += keyword.value;
    }
    
    for (let i=0; i< (LENGTH - keyword.value.length) ; i++){    
        
        const index = array_of_indices[Math.floor(Math.random() * array_of_indices.length)];
        pass += array_of_functions[index]();
    }
    pw.innerText = pass;
}

generate.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pw.innerText;

    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    
    textarea.remove();
    alert("Password copied to clipboard");
});


























// var array_of_functions = [getLower, getUpper , getSymbol, getNumber ];



// function generatePassword() {
    
    
    // var array_of_indices = [];
    
    // const LENGTH = lenEl.value;

    // let pass = "";

    // if(upper.checked){
    //     array_of_indices.push(1);
        
    // }

    // if(lower.checked){
    //     array_of_indices.push(0);
    // }

    // if(number.checked){
    //     array_of_indices.push(3);
    // }

    // if(symbol.checked){
    //     array_of_indices.push(2);
    // }

    
    
//     for(let i = 0; i<len ; i++){
//         const index = array_of_indices[Math.floor(Math.random() * array_of_indices.length)];
    
//         pass += array_of_functions[index];
//     }

//     pw.innerText = pass;
    
// }


// alert(generatePassword())



// generate.addEventListener('click', generatePassword);

// copy.addEventListener("click", () => {
//     const textarea = document.createElement("textarea");
//     const password = pw.innerText;

//     if (!password) {
//         return;
//     }

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand("copy");
//     textarea.remove();
//     alert("Password copied to clipboard");
// });