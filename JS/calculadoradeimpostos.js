let ValorProduto = 100
let TemDesconto = true
let ICMSAleatorio = Math.floor(Math.random() * (25 - 12 + 1)) + 12;

function CalcularDescontos() {
  let ValorComDesconto = ValorProduto

  if (TemDesconto) {
    ValorComDesconto = ValorProduto - (ValorProduto * 10 / 100)
    let ValorComDescontoEICMS = ValorComDesconto - (ValorComDesconto * ICMSAleatorio / 100)

    return "Valor com desconto: " + ValorComDesconto + " | " + "Valor com desconto e ICMS: " + ValorComDescontoEICMS
  } else{
    let ValorComICMS = ValorProduto - (ValorProduto * ICMSAleatorio /100)
    
    return "Não teve desconto" + " | " + "Valor com ICMS: " + ValorComICMS
  }
}

console.log(CalcularDescontos(ValorProduto, TemDesconto, ICMSAleatorio))