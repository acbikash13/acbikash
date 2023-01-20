
myButton = document.querySelector(".done");
inputs = document.getElementsByTagName("input");

//code to set the numbers when clicked on the button. This will not let change the numbers 
myButton.addEventListener("onclick", setFinal);
function setFinal(){
    for (let input in inputs){
        input.setAttribute('readonly', true); 
    } 
}



