//Objetivo 1 - Quando clickar no botão de mostrar mais deve abrir os projetos escondidos em display:none

     //Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuario clickar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //Queryselector busco algo unico
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)'); // <- O Not seria todos 'menos' o parenteses, All todos os elementos que tenham essa class,ed,etc


    //Passo 2 - Identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {

    //Passo 3 - Adicionar a classe "ativo" nos projetos que estão escondidos
    mostrarmaisprojetos();

//Objetivo 2 - Esconder o botão de mostrar mais 
    //Passo 1 - Pegar o botão e esconder ele  
    esconderBotao(); //Adicionando classe remover ao botão, essa classe foi criada no css
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');//Adicionando classe remover ao botão, essa classe foi criada no css
}

function mostrarmaisprojetos() {  //fatoração, selecionar,btn direito,refector,scoop global,o nome.
    projetosinativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
