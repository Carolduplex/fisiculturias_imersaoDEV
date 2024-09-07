
function oEsporte() {
  /*Função chamada quando o usuário escolhe a opção 'O Esporte' na coluna 'Universo'
  * Itera sobre um conjunto de dados contidos no objeto 'sobreEsporte' e cria elementos HTML para cada resultado.
  */

  const resultados = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  resultados.innerHTML= '';//limpa a seção antes de inserir os novos elementos
//Limpa resultados anteriores

  sobreEsporte.forEach(sobreOEsporte =>{ //A função forEach porcorre todos os elementos presentes no objeto sobreEsporte
    const itemResultado = document.createElement('div'); //cria a tag DIV que será colocada na seção '.sec-colcentral'
    itemResultado.classList.add('item-resultado'); //adiciona a classe à divisão criada
  
    const h2 = document.createElement('h2');//cria uma tag h2
    const a = document.createElement('a');//cria uma tag a
    a.target = '_blank';//define o tipo de link que a tag a recebe
    a.textContent = sobreOEsporte.titulo;//o que será escrito na tag a
    h2.appendChild(a);//coloca a tag a dentro da tag h2
  
    const p = document.createElement('p');//cria uma tag p
    p.classList.add('descricao-meta');//define a classe da tag p criada
    p.textContent = sobreOEsporte.descricao;//o que será escrito dentro da tag p
  
    const a2 = document.createElement('a');//segunda tag a utilizada
    a2.href = sobreOEsporte.link;//essa tag terá uma ângora externa
    a2.textContent = "Saiba mais aqui";//texto da tag
    a2.target='_blank';//estilização do link
  
    /*Abaixo as tags de título, descrição e link externo são adicionadas ao espaço criado com a tag div*/
    itemResultado.appendChild(h2);
    itemResultado.appendChild(p);
    itemResultado.append(a2);
  
    resultados.appendChild(itemResultado);//adiciona todas as tags montadas ao HTML
  
  });
}

function listaAtletas(){
  /*Função chamada quando o usuário escolhe a opção 'Atletas' na coluna 'Universo'
  * Itera sobre um conjunto de dados contidos no objeto 'atletas' e cria elementos HTML para cada resultado.
  */
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
   /*Função chamada quando o usuário escolhe a opção 'Competições' na coluna 'Universo'
  * Itera sobre um conjunto de dados contidos no objeto 'competicoes' e cria elementos HTML para cada resultado.
  */
  const resultados = document.querySelector('.sec-colcentral');
  
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
   * Função responsável por verificar a existência do elemento inserido na barra de pesquisas e renderização o resultado
   */

  const resultadosContainer = document.querySelector('.sec-colcentral'); // Elemento onde os resultados serão inseridos
  resultadosContainer.innerHTML='';
  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value//campoPesquisa recebe o que foi digitado pelo usuário na barra de pesquisa após o botão 'Pesquisar' ser acionado
  campoPesquisa = campoPesquisa.toLowerCase();//coloca todas as letras desse resultado em minúsculo
 
  /*Variáveis que receberão as informações contidas nos elementos do objeto 'atletas' em caixa baixa*/
  let oTitulo="";
  let aDescricao="";
  let aTag="";

  /*Retorna mensagem 'Nada foi pesquisado' caso o botão 'Pesquisar' tenha sido acionado sem que fosse digitado nenhum caractere*/
  if(campoPesquisa==""){
    resultadosContainer.textContent = "Nada foi pesquisado";
    return;
  }
  atletas.forEach(resultado => {//Interação por sobre todos os elementos contidos no objeto 'atletas'
    /*Seção onde as variáveis definidas anteriormente recebem seus caracteres*/
    oTitulo = resultado.titulo.toLowerCase();
    aDescricao = resultado.descricao.toLocaleLowerCase();
    aTag = resultado.tags.toLowerCase();
    /*Condicional sobre o resultado de pesquisa. Caso o digitado na barra esteja presente em algum dos elementos 'título', 'descricao' ou 'tags'*/
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
  /*Caso não exista elementos compatíveis com o que foi inserido uma mensagem aparece*/
  if(resultadosContainer.children.length === 0)
  {
    resultadosContainer.textContent="Nada foi encontrado";//mensagem mostrada
    return;
  }
}