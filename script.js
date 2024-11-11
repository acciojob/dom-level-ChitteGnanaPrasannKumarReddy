//your JS code here. If required.
function findDomLevel() {
    let element = document.getElementById("level");
    let level = 1; 

    
    while (element.parentElement) {
        element = element.parentElement;
        level++;
    }

    
    alert("The level of the element is: " + level);
}


findDomLevel();