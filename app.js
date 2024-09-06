
function oEsporte() {

  const resultados = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  resultados.innerHTML= '';
//Limpa resultados anteriores

  sobreEsporte.forEach(sobreOEsporte =>{
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');
  
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    a.target = '_blank';
    a.textContent = sobreOEsporte.titulo;
    h2.appendChild(a);
  
    const p = document.createElement('p');
    p.classList.add('descricao-meta');
    p.textContent = sobreOEsporte.descricao;
  
    const a2 = document.createElement('a');
    a2.href = sobreOEsporte.link;
    a2.textContent = "Saiba mais aqui";
    a2.target='_blank';
  
    itemResultado.appendChild(h2);
    itemResultado.appendChild(p);
    itemResultado.append(a2);
  
    resultados.appendChild(itemResultado);
  
  });
}

function listaAtletas(){
  const resultados = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  
  resultados.innerHTML= '';

  atletas.forEach(fisiculturista =>{
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');
  
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    a.target = '_blank';
    a.textContent = fisiculturista.titulo;
    h2.appendChild(a);
  
    const p = document.createElement('p');
    p.classList.add('descricao-meta');
    p.textContent = fisiculturista.descricao;
  
    const a2 = document.createElement('a');
    a2.href = fisiculturista.link;
    a2.textContent = "Saiba mais aqui";
    a2.target='_blank';
  
    itemResultado.appendChild(h2);
    itemResultado.appendChild(p);
    itemResultado.append(a2);
  
    resultados.appendChild(itemResultado);
  });
}

function asCompeticoes(){
  const resultados = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  
  resultados.innerHTML= '';

  competicoes.forEach(competicao =>{
    const itemResultado = document.createElement('div');
    itemResultado.classList.add('item-resultado');
  
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    a.target = '_blank';
    a.textContent = competicao.titulo;
    h2.appendChild(a);
  
    const p = document.createElement('p');
    p.classList.add('descricao-meta');
    p.textContent = competicao.descricao;
  
    const a2 = document.createElement('a');
    a2.href = competicao.link;
    a2.textContent = "Saiba mais aqui";
    a2.target='_blank';
  
    itemResultado.appendChild(h2);
    itemResultado.appendChild(p);
    itemResultado.append(a2);
  
    resultados.appendChild(itemResultado);
  });
}


function pesquisar() {
  /**
   * Função responsável por renderizar os resultados de uma pesquisa na página.
   * Itera sobre um conjunto de dados e cria elementos HTML para cada resultado.
   */

  const resultadosContainer = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  resultadosContainer.innerHTML='';
  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value
  campoPesquisa = campoPesquisa.toLowerCase();

  let oTitulo="";
  let aDescricao="";
  let aTag="";

  // Itera sobre os dados e cria um elemento HTML para cada resultado
  if(campoPesquisa==""){
    resultadosContainer.textContent = "Nada foi pesquisado";
    return;
  }
  atletas.forEach(resultado => {
    oTitulo = resultado.titulo.toLowerCase();
    aDescricao = resultado.descricao.toLocaleLowerCase();
    aTag = resultado.tags.toLowerCase();
    if(oTitulo.includes(campoPesquisa) || aDescricao.includes(campoPesquisa) || aTag.includes(campoPesquisa)){
        
      const itemResultado = document.createElement('div');
      itemResultado.classList.add('item-resultado');

      // Cria o elemento h2 com o título
      const titulo = document.createElement('h2');
      titulo.textContent = resultado.titulo;
      itemResultado.appendChild(titulo);

      // Cria o elemento p com a descrição breve do fisiculturista
      const descricao = document.createElement('p');
      descricao.classList.add('descricao-meta');
      descricao.textContent = resultado.descricao;
      itemResultado.appendChild(descricao);

      // Caria o elemento a com o link externo das informações completas do atleta
      const linkExterno = document.createElement('a');
      linkExterno.href = resultado.link;
      linkExterno.textContent = "Saiba mais";
      linkExterno.target='_blank';
      itemResultado.appendChild(linkExterno);

      resultadosContainer.appendChild(itemResultado);
      }
  }
  )
  if(resultadosContainer.children.length === 0)
  {
    resultadosContainer.textContent="Nada foi encontrado";
    return;
  }
}