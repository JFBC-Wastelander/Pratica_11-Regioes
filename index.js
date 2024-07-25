const prompt = require("prompt-sync")()
while (true) {
console.log(`Bem vindo ao cadastro de nações. Tecle:
1- Criar uma entrada de uma nação.
2- Listar nações cadastradas.
3- Deletar informações.
4- Atualizar suas informações.
5- Encerrar o aplicativo.
`)
let entrada = +prompt("Informe sua opção: ")
switch (entrada) {
    case 1:
        console.log("Entrada")
        break
    case 2:
        console.log("Listagem")
        break
    case 3:
        console.log("Deletar")
        break
    case 4:
        console.log("Atualizar")
        break
    case 5:
        console.log("Saindo...")
        process.exit()
        break
    default:
        console.log("Informe um valor correto")
        break
}
}