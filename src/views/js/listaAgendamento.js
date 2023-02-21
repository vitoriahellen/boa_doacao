const url = "http://localhost:3001/apiagendamentos"

async function getAgendamentos(){
    try {
      const response = await fetch(url);
      const data1 = await response.json();
      //console.log(data.campanhas)
      const data = data1.agendamentos;
      //console.log(data)
      Listar(data);
      
    } catch (error){
      console.log(error);
  
    }
  }
  
  getAgendamentos()
  
  function Listar(agendamentos) {
    const Container = document.querySelector("#tabela");
    
   
  
    
    for (let i=0 ; i<=agendamentos.length ; i++){
  
      
      const linha = document.createElement("tr");
     
      
        linha.setAttribute("class", "tabela-itens");
        const nome = document.createElement("td");
        const celular = document.createElement("td");
        const data = document.createElement("td");
        const obs = document.createElement("td");
        const campanha = document.createElement("td");
        

        nome.innerText = agendamentos[i].nome;
        celular.innerText = agendamentos[i].celular;
        obs.innerText = agendamentos[i].obs;
        data.innerText = agendamentos[i].data;
        campanha.innerHTML = agendamentos[i].campanha;
        //dataPostagem.innerText = agendamentos[i].createdAd;

        
     
      linha.appendChild(nome);
      linha.appendChild(celular);
      linha.appendChild(data);
      linha.appendChild(obs);
      linha.appendChild(campanha);
      
      

       
      Container.appendChild(linha);
     
      
   
  
    }
  }
  