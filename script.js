//Uppgift 4 - Skapa variabler
document.addEventListener('DOMContentLoaded', function () {
    //Variabel 1: Checkboxen
    const checkbox = document.getElementById('divStyle');

    //Variabel 2: Alla textfält
    const textFields = document.querySelectorAll('.textfield');

    //Variabel 3: Knappen
    const myButton = document.getElementById('myButton');

    //Variabel 4: Div-elementet
    const myDiv = document.getElementById('myDiv');



    //Uppgift 5 - Skapa en fördefinierad funktion
    function handleInputChange(e) {
        console.log(e.target); 

        const name = e.target.getAttribute('name'); 
        if (name === 'content') {
            const value = e.target.value; 
            myDiv.innerHTML = value; 
        }
    }

//kommentar

    //Uppgift 6 - Koppla eventlyssnare
    
    //Eventlyssnare till checkboxen
    checkbox.addEventListener('change', function() {
        const colorInput = document.getElementById('color'); 
        myDiv.style.backgroundColor = colorInput.value; 
    });


    //Eventlyssnare till textfälten
    textFields.forEach(function(textField) {
        textField.addEventListener('input', handleInputChange);
        textField.addEventListener('blur', handleInputChange); 
    });


    //Eventlyssnare till knappen
    myButton.addEventListener('click', function () {
        myDiv.remove(); 
    });
    
});