//Crea 5 variabili contenenti un numero e scrivi un programma in modo da ottenere la somma tra questi numeri e la media.
// In console poi mostra la seguente frase: ‘La somma tra i numeri equivale a … e la media equivale a…’ 
let a,b,c,d,e,somma,media;
somma=0;
media=0;
a=parseInt(prompt("inserire valore "))
media++;
b=parseInt(prompt("inserire valore "));
media++;
c=parseInt(prompt("inserire valore "));
media++;
d=parseInt(prompt("inserire valore "));
media++;
e=parseInt(prompt("inserire valore "));
media++;
media=(a+b+c+d+e)/media;
somma=a+b+c+d+e;
console.log("la somma dei valori è: " + somma);
console.log("la media dei valori è: " + media);

// Crea due variabili contenenti l’anno corrente e l’anno di nascita di una persona. Crea un programma che calcoli:

// l’eta' della persona
// quanti anni sono necessari per raggiungere i 100
// In console poi mostra la frase “Hai tot anni e ti mancano tot anni per compierne 100“.


let year, BYear, age, hundred;
year=2024;
BYear=2001;
age=year-BYear;
hundred=100-age;

console.log("complimenti! sei arrivato a " + (year-BYear) +" anni");
console.log("ti mancano "+(100-(year-BYear)) + " anni per arrivare a 100 anni");

//crea due variabili i cui valori verranno scelti dall’utente. Crea un programma che esegua i seguenti calcoli su quei due numeri:
// somma
// sottrazione
// moltiplicazione
// divisione
// potenza
// In seguito in console stampa la frase “Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (tot), sottrazione(tot) ecc ecc“.


let space=" "
let Num1, Num2,addizione,sottrazione,moltiplicazione,divisione;
Num1=parseInt(prompt("inserire valore 1"));
Num2=parseInt(prompt("inserire valore 2"));


addizione=Num1+Num2;
if (Num1>Num2) {
    sottrazione=Num1-Num2    
} else {
    sottrazione=Num2-Num1
}
divisione=Num1/Num2;
moltiplicazione=Num1*Num2;
console.log("con i valori da te scelti i riusltatu delle  operazioni sono: addizione"+space+ addizione + space+"sottrazione:"+space+ sottrazione +space+ "moltiplicazione:"+space+ moltiplicazione +space+"divisione:" +space+ divisione);

// Dato il seguente array mischiato e confuso:
// Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“
// HINT
// Non tutte le parole sono necessarie per la frase;
// Occhio agli array annidati




let array_1 = [
    ['un', 'per', 'incatenarli.'],
   ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
  ];


    let array_2 = [
      [['trovarli,']],
      ['tu,', 'sciocchi'],
      ['tu,', 'sciocchi', ['padron', 'Sauron']],
      ['nel', ['fuggite', 'gandalf']],
      [['domarli,', 'passare'], 'buio']
    ];
    
    let stringa=array_1 [0][0] +space+ array_1 [1][0] +space+array_1 [0][1]+space+array_2 [4][0][0] +space+array_1 [0][0] +space+ array_1 [1][0] +space+array_1 [0][1]+space+array_1 [1][1] + space+array_1 [0][0] +space+ array_1 [1][0] +space+array_1 [0][1]+space+ array_1 [2][0]+space+array_1[2][1]+space+array_2[3][0]+space+array_2 [4][1]+space+array_1[0][2];
    console.log(stringa);

    // Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.