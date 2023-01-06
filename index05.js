let greeting = ['Hello,', 'World'];

let message = document.getElementById("greeting");
// console.log(message.innerText);
for (let i=0; i<greeting.length; i++) {
    message.textContent +=  greeting[i] + " ";
    // console.log(greeting[i]);
}