let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let celular = document.querySelector('#celular')
let endereco = document.querySelector('#endereco')

function cadastrar(){
  
  if (localStorage.contador) {
    localStorage.contador = Number(localStorage.contador) + 1;
  }
  else {
    localStorage.contador = 1;
  }


    let cadCliente = JSON.parse(localStorage.getItem('cadCliente') || '[]')
    
    cadCliente.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      celularCad: celular.value,
      enderecoCad: endereco.value
    }
    )
    
    localStorage.setItem('Cadastro N'+ localStorage.contador, JSON.stringify(cadCliente))
    swal({
      title: "OK",
      text: "Cadastro realizado",
      icon: "success",
    });
       
}