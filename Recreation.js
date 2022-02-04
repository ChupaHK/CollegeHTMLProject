//Show the array of preferred reactions
let arraysEntered = [];

function addNumber(){
    let input = document.getElementById("arrayRea").value;
    console.log(input);

    arraysEntered.push(input);

    console.log("List of entered reactions", arraysEntered.length);

    for(let i=0; i<arraysEntered.length; i++){
        console.log(arraysEntered[i]);

        result4a.innerHTML =`You wanna go to: ${arraysEntered}`;
    }
}
function resetValues(){
    result4a.innerHTML="You wanna go to:";
    document.getElementById("arrayRea").value=" ";
}
