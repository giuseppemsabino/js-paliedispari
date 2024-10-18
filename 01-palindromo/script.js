// * Palidroma
// ?Chiedere all’utente di inserire una parola
//? Creare una funzione per capire se la parola inserita è palindroma


const wordInput = prompt('inserisci una parola palindroma');

function isWordCorrect(wordInput){

    wordInput = wordInput.toLowerCase();

    let start = 0;
    let end = wordInput.length -1;

    while(start < end){

        if(wordInput[start] !== wordInput[end]){
            return false;
        }
        start ++;
        end --;
    }

    return true;
}

console.log(isWordCorrect(wordInput));