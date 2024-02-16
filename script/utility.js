function hideElementById(elementId){
    let element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function setBackgroundColor(element){
    let elemen = document.getElementById(element)
    elemen.classList.add('bg-orange-600')
}
function removeBackgroundColor(element){
    let elemen = document.getElementById(element)
    elemen.classList.remove('bg-orange-600')
}
function getElementTextById(elementId){
    let element = document.getElementById(elementId);
    let text = element.innerText;
    return text
}
function getRandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    let alphabets = alphabetString.split('')
    
    let index = Math.round(Math.random() * 25)
    let alphabet = alphabets[index]
    return alphabet
}
function getTextElementValueById(elementId){
    let element = document.getElementById(elementId);
    let elementText = element.innerText
    let value = parseInt(elementText)
    return value;
}
function setTextElementValueById(elementId, value){
    let element = document.getElementById(elementId);
    element.innerText = value
}
