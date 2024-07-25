const prompt = require("prompt-sync")()
const cadastro = []
const paises = []
const estados = []
const cidades = []

function criar () {
        console.log('Digite "país" para cadastrar um país, digite "estado" para cadastrar um estado ou digite "cidade" para cadastrar uma cidade.')
        let entrada = prompt("Informe sua opção: ").toLowerCase()
        console.log("")
        switch (entrada) {
            case "País".toLowerCase():
            case "Pais".toLowerCase():
                let pais = prompt("Informe o nome da unidade federativa: ")
                if (pais != "") {
                    paises.push(pais)
                    console.log(`A unidade federativa ${pais} foi adicionada ao cadastro\n`)
                } else {
                    console.log("O País precisa ter alguma informação.\n")
                    criar()
                }
                break

            case "Estado".toLowerCase():
                if (paises.length == 0) {
                    console.log("Você não pode cadastrar um estado sem cadastrar uma nação primeiro\n")
                    criar()
                } else {
                    let estado = prompt("Informe o nome do estado: ")
                    if (estado != "") {
                    estados.push(estado)
                    console.log(`O estado ${estado} foi adicionado ao cadastro.`)
                    } else {
                        console.log("O Estado precisa ter alguma função")
                        criar()
                    }
                }
                break

            case "Cidade".toLowerCase():
                if (estados.length == 0) {
                    console.log("Você não pode cadastrar um estado sem cadastrar uma nação primeiro\n")
                    criar()
                } else {
                    let cidade = {
                        nome: "",
                        populacao: "",
                        area: "",
                    }
                    cidade.nome = prompt("Qual é o nome da sua cidade? ")
                    cidade.populacao = +prompt("(APENAS NÚMEROS) Quantas pessoas habitam a cidade? ")
                    cidade.area = +prompt("(APENAS NÚMEROS) Qual é a área (em KM) da sua cidade? ")
                    if (cidade.nome != "" && cidade.populacao != isNaN && cidade.area != isNaN) {
                        cidades.push(cidade)
                        console.log(`A cidade ${cidade.nome} de ${cidade.populacao} habitantes e de ${cidade.area} km² foi adicionada ao cadastro`)
                    } else {
                        console.log("A cidade precisa ter um nome, só será aceito valores numéricos na população e na área")
                        criar()
                    }
                    }
                break
            default:
                console.log("Informe um valor correto!")
                criar()
                break
        }
}

const deletar = function(){

}

const listar = () => {
    if (paises.length == 0) {
        console.log("Não há registros cadastrados")
    } else {
        console.log("Os países cadastrados são:" + paises)
        console.log("Os estados cadastrados são:" + estados)
        console.log("As cidades cadastradas são:" + cidades)
    }
}

const atualizar = () => {

}

module.exports = {
    criar,
    deletar,
    listar,
    atualizar,
}