let spaceshipName = prompt("Qual o nome da aeronave?");
let newSpaceship = "";
let chosenCharacter = prompt("Qual caracter deseja substituir?");
let replacedCharacter = prompt("Por qual caracter deseja substituir?");

for(let pos = 0; pos < spaceshipName.length; pos++){
    if(spaceshipName[pos] == chosenCharacter){
        newSpaceship += replacedCharacter;
    } else {
        newSpaceship += spaceshipName[pos];
    }
}

alert("O novo nome da nave é: " + newSpaceship);