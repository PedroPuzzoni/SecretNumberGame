alert('Bem-vindo(a) ao jogo do Número Secreto!');

let maxNumber = 1000;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let userGuess;
let userAttempts = 1;


//Enquanto o userguess não for igual ao numero secreto
while (userGuess != secretNumber) {

    userGuess = prompt(`Escolha entre o número 1 e ${maxNumber}.`);

    //Se o chute do usuário for igual ao número secreto e se não for.
    if (userGuess == secretNumber) {
        break;
   
 
    } else {
        if(userGuess > secretNumber) {
 
     alert(`O número secreto é menor que (${userGuess})`);
    } else {
 
 
     alert(`O número secreto é maior que (${userGuess})`);
 
  }

 }


 // userAttempts = userAttempts + 1;
 userAttempts++;

}

let wordAttempt = userAttempts > 1 ? 'tentativas' : 'tentativa';

alert(`Parabéns! Você descobriu o número secreto (${secretNumber}) com ${userAttempts} ${wordAttempt}.`);




