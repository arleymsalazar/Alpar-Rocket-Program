const prompt = require("prompt-sync")();

function Pessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
}

const pessoas = [];

while (true) {
  console.log("1 - Adicionar pessoa");
  console.log("2 - Remover pessoa pelo email");
  console.log("3 - Listar pessoas");
  console.log("4 - Sair");

  const opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      const nome = prompt("Digite o nome: ");
      const idade = Number(prompt("Digite a idade: "));
      const email = prompt("Digite o email: ");

      const emailExiste = pessoas.some((p) => p.email === email);

      if (emailExiste) {
        console.log("❌ Já existe uma pessoa com esse email!");
      } else {
        const novaPessoa = new Pessoa(nome, idade, email);
        pessoas.push(novaPessoa);
        console.log("✅ Pessoa adicionada com sucesso!");
      }
      break;

    case "2":
      const emailRemover = prompt(
        "Digite o email da pessoa que deseja remover: ",
      );

      const index = pessoas.findIndex((p) => p.email === emailRemover);

      if (index === -1) {
        console.log("❌ Email não encontrado!");
      } else {
        pessoas.splice(index, 1);
        console.log("✅ Pessoa removida com sucesso!");
      }
      break;

    case "3":
      if (pessoas.length === 0) {
        console.log("📭 Nenhuma pessoa cadastrada.");
      } else {
        console.log("\n📋 Lista de Pessoas:");
        pessoas.forEach((p, i) => {
          console.log(
            `${i + 1}. Nome: ${p.nome} | Idade: ${p.idade} | Email: ${p.email}`,
          );
        });
      }
      break;

    case "4":
      console.log("Saindo do programa...");
      return;

    default:
      console.log("❌ Opção inválida!");
  }
}