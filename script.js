const enviar = document.getElementById('enviar')


enviar.addEventListener("click", calcularFrete)

function calcularFrete(e){
      e.preventDefault()
      const tipoEntrega = document.getElementById('tipoEntrega').value
      const peso = document.getElementById('peso').value
      const distancia = document.getElementById('distancia').value
      const resultado = document.getElementById('resultado')
      let valorDoFrete = (peso * 5) + (distancia * 1)

      if(tipoEntrega == "normal"){
            resultado.innerText = `Valor do frete: R$ ${valorDoFrete}`
      }else{
            valorDoFrete = valorDoFrete + (valorDoFrete * 0.3)
            resultado.innerText = `Valor do frete: R$ ${valorDoFrete}`
      }
}