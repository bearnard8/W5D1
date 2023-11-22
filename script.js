/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum (num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2) {
        return sum*3;
    } else {
        return sum;
    }
}

console.log(crazySum(7, 8));*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è 
 esattamente uguale a 400.
*/

/*function boundary (num) {
    if ((num >= 20 && num <= 100) || num === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(28));*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*function reverseString (string) {
    let reversedString = "";
    for (let i = string.length-1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

console.log(reverseString("Hello World!"));*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

//let word = string.split(' ');
//console.log(word);
//console.log(word[1].replace(word[1][0], word[1][0].toUpperCase()));

/*function upperFirst(string) {
    let newString = string.split(' ');
    for(let i = 0; i < newString.length; i++) {
        for(let j = 0; j < 1; j++) {
            newString[i] = newString[i].replace(newString[i][j], newString[i][j].toUpperCase());
        }
    }
    return newString.toString();
}

console.log(upperFirst("ciao come va").replaceAll(",", " "));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*function giveMeRandom (n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.random() * 10);
    }
    return array;
}

console.log(giveMeRandom(15));*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*function area(l1, l2) {
    let area = l1* l2;
    return area;
}

console.log(area(15, 2));*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*function crazyDiff(num) {
    let difference = (num - 19);
    if (difference > 19) {
        return difference * 3;
    } else {
        return difference;
    }
}

console.log(crazyDiff(100));*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" 
 allora deve ritornarla senza modifiche.
*/

/*function codify (string) {
    if (string[0] === "c" && string[1] === "o" && string[2] === "d" && string[3] === "e") {
        return string;
    } else {
        string = "code " + string; 
        return string;
    }
}

console.log(codify("in autostrada"));*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*function check3and7 (num) {
    if(num % 3 === 0 || num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(116));*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*function cutString (string) {
    let newString = "";
    for (let i = 1; i < string.length-1; i++) {
        newString += string[i];
    }
    return newString;
}

console.log(cutString("Hello World!"));*/