const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function perguntar() {
  rl.question("Digite um número entre 1 e 100: ", (resposta) => {
    const palpite = Number(resposta);
    tentativas++;

    if (palpite > numeroSecreto) {
      console.log("O número secreto é MENOR.");
      perguntar();
    } else if (palpite < numeroSecreto) {
      console.log("O número secreto é MAIOR.");
      perguntar();
    } else {
      console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
    }
  });
}

perguntar();