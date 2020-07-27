let randomInput = document.querySelector('#randomInput');
    function randomNumberInput(){
        const randomNum = Math.floor(1000 + Math.random() * 9000)
        randomInput.value = randomNum;
        return randomNum
}
let calcolatorInput = document.querySelector('#calcolatorInput');
    function calcolateInput(clickedNumber){
        calcolatorInput.value = calcolatorInput.value + clickedNumber;
}
let removeCalLastChild = document.querySelector('#calcolatorInput')
    function removeCalInputLastChild(){
        var removeChild = removeCalLastChild.value;
        removeCalLastChild.value = ((removeChild.substring(0, removeChild.length - 1)));
}
let clearCalInput = document.querySelector('#cleanCalInput');
    function cleanCalcolateInput(){
        calcolatorInput.value = '';
}
let hideRandomSection = document.querySelector('#hideRandomSection');
let hideCalcolatorSection = document.querySelector('#hideCalcolatorSection');
let showMatchAlert = document.querySelector('#showMatchAlert');
let showNotMatchAlert = document.querySelector('#showNotMatchAlert');
    function testRandomEquality(){
        let randomInputValue = randomInput.value;
        let calcolatorInputValue = calcolatorInput.value;
        if(randomInputValue == 0 && calcolatorInputValue == 0){
            alert('Please enter a number')
        }
        else if(randomInputValue === calcolatorInputValue){           
            showMatchAlert.style.display = 'block'
            showNotMatchAlert.style.display = 'none'
        }
        else{
            showNotMatchAlert.style.display = 'block'
            showMatchAlert.style.display = 'none'
        }
}
