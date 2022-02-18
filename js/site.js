//Get the string from page
//Controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}
//Reverse it
//logic function
function reverseString(userString){
    
    let revString = [];

    for (let index = userString.length -1 ; index >= 0; index--) {

        revString += userString[index];
        
    }
    return revString;
}

//Display the reversed string
//view function
function displayString(revString){

    //write to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");

}