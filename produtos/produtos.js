/*Definição das váriaveis para cada campo*/

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let codigo = document.querySelector('#codigo')
let labelCodigo = document.querySelector('#labelCodigo')
let validCodigo = false

let quantidade = document.querySelector('#quantidade');
let labelQuantidade = document.querySelector('#labelQuantidade')
let validQuantidade = false

let descricao = document.querySelector('#descricao')
let labelDescricao = document.querySelector('#labelDescricao')
let validDescricao = false



//Validação de campos 

//Validação do campo nome:

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 5) {
    labelNome.setAttribute('style', 'color: #c8472c')
    labelNome.innerHTML = 'Nome *Insira o nome completo'
    nome.setAttribute('style', 'border-color: #c8472c')
    validNome = false

  } else {
    labelNome.setAttribute('style', 'color: #412a1e')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: #412a1e')
    validNome = true
  }
})

//Validação superficial do campo codigo:

codigo.addEventListener('keyup', () => {

  if (codigo.value.length < 5) {
    labelCodigo.setAttribute('style', 'color: #c8472c')
    labelCodigo.innerHTML = 'Código *O codigo contém 5 números'
    codigo.setAttribute('style', 'border-color: #c8472c')
    validCodigo = false

  } else {
    labelCodigo.setAttribute('style', 'color: #412a1e')
    labelCodigo.innerHTML = 'Código'
    codigo.setAttribute('style', 'border-color: #412a1e')
    validCodigo = true
  }
})

//Validação superficial do campo quantidade:

quantidade.addEventListener('keyup', () => {

  if (quantidade.value.length < 1) {
    labelQuantidade.setAttribute('style', 'color: #c8472c')
    labelQuantidade.innerHTML = 'Quantidade inválida'
    quantidade.setAttribute('style', 'border-color: #c8472c')
    validQuantidade = false

  } else {
    labelQuantidade.setAttribute('style', 'color: #412a1e')
    labelQuantidade.innerHTML = 'Quantidade'
    quantidade.setAttribute('style', 'border-color: #412a1e')
    validQuantidade = true
  }
})

//Validação superficial do campo descriçao:

descricao.addEventListener('keyup', () => {

  if (descricao.value.length < 10) {
    labelDescricao.setAttribute('style', 'color: #c8472c')
    labelDescricao.innerHTML = 'Descrição *Insira uma descriçao'
    descricao.setAttribute('style', 'border-color: #c8472c')
    validDescricao = false

  } else {
    labelDescricao.setAttribute('style', 'color: #412a1e')
    labelDescricao.innerHTML = 'Descrição'
    descricao.setAttribute('style', 'border-color: #412a1e')
    validDescricao = true
  }
})

///Funcao de Cadastro /// 


function cadastrar() {
  if (validNome && validCodigo && validQuantidade && validDescricao) {

    let cadProduto = JSON.parse(localStorage.getItem('cadProduto') || '[]')

    cadProduto.push(
      {
        NOME: nome.value,
        CÓDIGO: codigo.value,
        QUANTIDADE: quantidade.value,
        DESCRIÇÃO: descricao.value
      }

    )

    localStorage.setItem(`Produto n_${codigo.value}`, JSON.stringify(cadProduto))
    swal({
      title: "OK",
      text: "Cadastro realizado",
      icon: "success",
    });


  } else {
    swal({
      title: "Campos incorretos",
      text: "Preencha os campos corretamente",
      icon: "warning",
    });
  }

}