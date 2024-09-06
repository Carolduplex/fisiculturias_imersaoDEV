
function oEsporte() {

  const resultados = document.querySelector('.coluna-central'); // Elemento onde os resultados serão inseridos

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
  const resultados = document.querySelector('.coluna-central'); // Elemento onde os resultados serão inseridos

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
  const resultados = document.querySelector('.coluna-central'); // Elemento onde os resultados serão inseridos

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