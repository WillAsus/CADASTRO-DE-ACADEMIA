 let clientes = []
 let opcao = ""

 do {
    opcao = prompt(
        "Seja bem vindo(a) ao cadastro de clientes.\n" +
        "total de clientes: " + clientes.length +
        "\n\nEscolha uma opção: \n1. Novo cliente\n2. Clientes ativos\n3. Sair"
    )

    switch (opcao){
         case "1":
            const cliente = {}

            cliente.nome = prompt("Qual o nome do cliente?")
            cliente.idade = prompt("Qual a idade do cliente?")
            cliente.frequencia = prompt("Qual frequencia de dias na semana o cliente deseja?") 

            const comfirmaçao = confirm(
                "Salvar cadastro?" +
                "\n\nNome: " + cliente.nome +
                "\nIdade: " + cliente.idade +
                "\nFrequencia: " + cliente.frequencia
            ) 

            if(comfirmaçao){
                clientes.push(cliente)
            }
            break
            case "2":
                for (let i = 0; i < clientes.length; i++){
                    alert("cliente: " + (i + 1) +
                    "\nNome: " + clientes[i].nome +
                    "\nIdade: " + clientes[i].idade +
                    "\nFrequencia: " + clientes[i].frequencia
                    )
                }
                break
                case "3":
            alert("encerrando...")
            break
        default:
            alert("escolha uma das 3 opcoes.")
    }

 } while (opcao !== "3")