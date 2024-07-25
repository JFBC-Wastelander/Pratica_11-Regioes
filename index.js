const prompt = require("prompt-sync")()
const CRUD = require("./CRUD.js")
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
        CRUD.criar()
        break
    case 2:
        CRUD.listar()
        break
    case 3:
        CRUD.deletar()
        break
    case 4:
        CRUD.atualizar()
        break
    case 5:
        console.log("Saindo...")
        process.exit()
        break
    default:
        console.log(`Informe um valor correto
        `)
        break
}
}