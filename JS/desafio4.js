const prompt = require("prompt-sync")();

function ListaCompras() {
  let listaDeCompras = [];
  let opcao = "";

  while (opcao !== "4") {
    console.log("\n=== Lista de Compras ===");
    console.log("1 | Adicionar item");
    console.log("2 | Remover item");
    console.log("3 | Ver lista");
    console.log("4 | Sair");

    opcao = prompt("Digite a opção desejada: ");

    switch (opcao) {
      case "1":
        let item = prompt("Digite o nome do item: ");
        listaDeCompras.push(item);
        console.log("Item adicionado!");
        break;

      case "2":
        console.log(listaDeCompras);
        let index = prompt("Digite o índice do item para remover: ");
        listaDeCompras.pop(index, 1);
        console.log("Item removido!");
        break;

      case "3":
        console.log("\nSua lista:");
        console.log(listaDeCompras);
        break;

      case "4":
        console.log("Saindo...");
        break;

      default:
        console.log("Opção inválida!");
    }
  }
}

ListaCompras();