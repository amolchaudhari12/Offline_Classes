let numbers = ['ZERO','ONE' , 'TWO' , 'THREE' , 'FOUR' , 'FIVE' , 'SIX', 'SEVEN' , 'EIGHT' , 'NINE'];
let convertStringNumber = (str) => {
    let wordNumber = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        wordNumber += ` ${numbers[digit]} `;
    }
    return wordNumber;
};

// Get the HTML element
let inputBox = document.querySelector('#number');
inputBox.addEventListener('keyup',function() {
   let textEntered = inputBox.value;
   let h1Tag = document.querySelector('#text-number');
   h1Tag.innerText = convertStringNumber(textEntered);
});