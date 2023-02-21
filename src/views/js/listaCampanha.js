const url = "http://localhost:3001/apicampanhas"


async function getCampanhas(){
  try {
    const response = await fetch(url);
    const data1 = await response.json();
    //console.log(data.campanhas)
    const data = data1.campanhas;
    //console.log(data)
    ListarCampanha(data);
    
  } catch (error){
    console.log(error);
    

  }
}

getCampanhas()

function ListarCampanha(campanhas) {
  const Container = document.querySelector("#container");
  
 

  
  for (let i=0 ; i<=campanhas.length; i++){

    
    const divContainer = document.createElement("div");
    const div = document.createElement("div");
    
   const title = document.createElement("h1");
   const resumo = document.createElement("h2");
   const button = document.createElement("button");
   const endereco = document.createElement("h2");
   const data_finaliza = document.createElement("h2");


    divContainer.setAttribute("class", "container-primario");
    div.setAttribute("class", "container-secundario-texto");
     button.setAttribute("class", "button")
     button.setAttribute("onclick", "Abrir()");

     

    
    title.innerText = "Campanha: " + campanhas[i].titulo;
    //console.log(campanhas[i].titulo)
    resumo.innerHTML = campanhas[i].resumo;
    endereco.innerHTML = "<b>Endereço para Entrega:</b> " + campanhas[i].endereco;
    data_finaliza.innerText = "Data de Finalização: " + campanhas[i].data;
    button.innerText = "Fazer Doação";
 

  
    div.appendChild(title);
    div.appendChild(resumo);
    div.appendChild(endereco);
    div.appendChild(data_finaliza);
    div.appendChild(button);
    
    divContainer.appendChild(div);
    Container.appendChild(divContainer);
    


  }
}
