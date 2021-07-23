/*Definição das váriaveis para cada campo*/

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let nascimento = document.querySelector('#nascimento')
let labelNascimento = document.querySelector('#labelNascimento')
let validNascimento = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let celular = document.querySelector('#celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false


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

//Validação superficial do campo nascimento:

nascimento.addEventListener('keyup', () => {

  if (nascimento.value.length <= 7) {
    labelNascimento.setAttribute('style', 'color: #c8472c')
    labelNascimento.innerHTML = 'Nascimento *Insira a data no formato 01/01/2000'
    nascimento.setAttribute('style', 'border-color: #c8472c')
    validNascimento = false

  } else {
    labelNascimento.setAttribute('style', 'color: #412a1e')
    labelNascimento.innerHTML = 'Nascimento'
    nascimento.setAttribute('style', 'border-color: #412a1e')
    validNascimento = true
  }
})

//Validação superficial do campo cpf:

cpf.addEventListener('keyup', () => {

  if (cpf.value.length <11) {
    labelCpf.setAttribute('style', 'color: #c8472c')
    labelCpf.innerHTML = 'CPF *Insira somente números'
    cpf.setAttribute('style', 'border-color: #c8472c')
    validCpf = false

  } else {
    labelCpf.setAttribute('style', 'color: #412a1e')
    labelCpf.innerHTML = 'CPF'
    nascimento.setAttribute('style', 'border-color: #412a1e')
    validCpf = true
  }
})

//Validação superficial do campo email:

email.addEventListener('keyup', () => {

  if (!(validaEmail(email.value))) {
    labelEmail.setAttribute('style', 'color: #c8472c')
    labelEmail.innerHTML = 'Email *Insira o meio corretamente'
    email.setAttribute('style', 'border-color: #c8472c')
    validEmail = false

  } else {
    labelEmail.setAttribute('style', 'color: #412a1e')
    labelEmail.innerHTML = 'Email'
    email.setAttribute('style', 'border-color: #412a1e')
    validEmail = true
  }
})

function validaEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//Validação do celular

celular.addEventListener('keyup', () => {

  if (celular.value.length < 11) {
    labelCelular.setAttribute('style', 'color: #c8472c')
    labelCelular.innerHTML = 'Celular *Insira no formato (99)99999-9999'
    celular.setAttribute('style', 'border-color: #c8472c')
    validCelular = false

  } else {
    labelCelular.setAttribute('style', 'color: #412a1e')
    labelCelular.innerHTML = 'Celular'
    celular.setAttribute('style', 'border-color: #412a1e')
    validCelular = true
  }
})

endereco.addEventListener('keyup', () => {

  if (endereco.value.length < 20) {
    labelEndereco.setAttribute('style', 'color: #c8472c')
    labelEndereco.innerHTML = 'Endereço *Por gentileza, insira Rua, número, complemento, bairro, cidade e estado'
    endereco.setAttribute('style', 'border-color: #c8472c')
    validEndereco = false

  } else {
    labelEndereco.setAttribute('style', 'color: #412a1e')
    labelEndereco.innerHTML = 'Endereço'
    endereco.setAttribute('style', 'border-color: #412a1e')
    validEndereco = true
  }
})


///Funcao de Cadastro /// 


function cadastrar() {
  if (validNome && validEmail && validNascimento && validCpf && validCelular && validEndereco) {

    if (localStorage.contador) {
      localStorage.contador = Number(localStorage.contador) + 1;
    }
    else {
      localStorage.contador = 1;
    }


    let cadCliente = JSON.parse(localStorage.getItem('cadCliente') || '[]')

    cadCliente.push(
      {
        NOME: nome.value,
        NASCIMENTO: nascimento.value,
        CPF: cpf.value,
        EMAIL: email.value,
        CELULAR: celular.value,
        ENDEREÇO: endereco.value
      }
    )

    localStorage.setItem('Cadastro N' + localStorage.contador, JSON.stringify(cadCliente))
    swal({
      title: "OK",
      text: "Cadastro realizado",
      icon: "success",
    });


  }else{
    swal({
      title: "Campos incorretos",
      text: "Preencha os campos corretamente",
      icon: "warning",
    });
  }


}