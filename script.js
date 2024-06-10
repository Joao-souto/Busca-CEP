var inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) { // Verifica se a tecla pressionada é Enter (código 13)
        var index = Array.prototype.indexOf.call(inputs, input); // Obtém o índice do input atual
        var nextIndex = index + 1; // Calcula o índice do próximo input
        if (nextIndex < inputs.length) {
          inputs[nextIndex].focus(); // Define o foco no próximo input
        }
      }
    });
});

function consumoAPI(event) {
  if (event.keyCode === 13 ) {
      var cep = document.querySelector("#cep").value;
      var urlCep = `http://viacep.com.br/ws/${cep}/json/`;
      
      var request = new XMLHttpRequest();
      request.open('GET', urlCep, true);

      request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              // Aqui você pode manipular o objeto retornado
              console.log(data);
              // Por exemplo:
              console.log("CEP:", data.cep);
              console.log("Logradouro:", data.logradouro);
              console.log("Bairro:", data.bairro);
              console.log("Cidade:", data.localidade);
              console.log("Estado:", data.uf);
          } else {
              console.error('Erro ao consumir API:', request.statusText);
          }
      };

      request.onerror = function() {
          console.error('Erro de conexão');
      };

      request.send();
  }
} 