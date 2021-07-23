let nome = document.querySelector('#nome')
let codigo = document.querySelector('#codigo')
let quantidade = document.querySelector('#quantidade')
let descricao = document.querySelector('#descricao')

function cadastrar(){
  
  if (localStorage.contador) {
    localStorage.contador = Number(localStorage.contador) + 1;
  }
  else {
    localStorage.contador = 1;
  }


    let cadProduto = JSON.parse(localStorage.getItem('cadProduto') || '[]')
    
    cadProduto.push(
    {
      nomeCad: nome.value,
      codigoCad: codigo.value,
      quantidadeCad: quantidade.value,
      descricaoCad: descricao.value
    }
    )
    
    localStorage.setItem('Produto N'+ localStorage.contador, JSON.stringify(cadProduto))
    swal({
      title: "OK",
      text: "Cadastro realizado",
      icon: "success",
    });
       
}