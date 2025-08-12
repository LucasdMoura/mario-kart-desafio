<h1>Desafio de projeto da  formação "Formação Node.js Fundamentals" da DIO</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador deve receber dois personagens para disputar a corrida em um objeto cada</label>

<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Os personagens irão correr em uma pista aleatória de 5 rodadas</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso o bloco da pista seja uma RETA, o jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso o bloco da pista seja uma CURVA, o jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE, quem vencer ganha um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso o bloco da pista seja um CONFRONTO, o jogador deve jogar um dado de 6 lados e somar o atributo PODER, quem perder, perde um ponto</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)</label></li>
    </ul>
  </li>
</ul>

<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos</label>
<h3>🛠️ Tecnologias Utilizadas</h3>
<ul>
  <li><input type="checkbox" id="tech-1" /> <label for="tech-1">Node.js</label></li>
</ul>

<h3>⚙️ Pré-requisitos e Instalação</h3>
<p>É necessário possuir o <strong>Node.js 20.12+</strong> para executar o projeto. Para isso, <a href="https://nodejs.org/pt/download" target="_blank">clique aqui</a> e faça o download da versão mais recente.</p>

<h3>🚀 Como Executar</h3>
<p>Para executar o projeto, basta ir até a pasta base (<code>mario-kart-desafio</code>) e executar o comando no terminal:</p>
<pre><code>node ./index.js</code></pre>
<p>O restante executará de forma automática.</p>

<h2>🤝 Contribuições</h2>

<p>Este projeto está aberto para contribuições da comunidade! Seja você iniciante ou experiente em Node.js, há várias maneiras de ajudar a tornar este jogo ainda melhor.</p>

<h3>🌟 Como Contribuir</h3>

<b>Ideias para Contribuições:</b>
<ul>
  <li>🎮 <strong>Novos Personagens</strong>: Adicione novos personagens do universo Mario com atributos únicos</li>
  <li>🏁 <strong>Tipos de Pista</strong>: Implemente novos tipos de blocos (ex: armadilhas, power-ups, saltos)</li>
  <li>🎨 <strong>Interface Visual</strong>: Melhore a apresentação visual da corrida no terminal</li>
  <li>📊 <strong>Sistema de Estatísticas</strong>: Adicione histórico de vitórias e estatísticas detalhadas</li>
  <li>🔧 <strong>Refatoração</strong>: Melhore a estrutura do código e adicione testes</li>
  <li>📖 <strong>Documentação</strong>: Aprimore a documentação e adicione comentários no código</li>
  <li>🌐 <strong>Internacionalização</strong>: Adicione suporte para múltiplos idiomas</li>
</ul>

<h3>📋 Passos para Contribuir</h3>
<ol>
  <li>🍴 <strong>Fork</strong> o repositório</li>
  <li>🌿 Crie uma <strong>branch</strong> para sua feature (<code>git checkout -b feature/nova-feature</code>)</li>
  <li>💻 Faça suas <strong>alterações</strong> e teste localmente</li>
  <li>📝 <strong>Commit</strong> suas mudanças (<code>git commit -m 'Adiciona nova feature'</code>)</li>
  <li>🚀 <strong>Push</strong> para a branch (<code>git push origin feature/nova-feature</code>)</li>
  <li>🔄 Abra um <strong>Pull Request</strong></li>
</ol>

<h3>💡 Primeiras Contribuições</h3>
<p>Novo no mundo open source? Sem problemas! Este é um projeto perfeito para iniciantes. Procure por issues marcadas com <code>good first issue</code> ou <code>help wanted</code>.</p>

<p>Dúvidas? Abra uma <strong>issue</strong> para discussão ou entre em contato!</p>

<h3>🏆 Reconhecimento</h3>
<p>Todos os contribuidores serão reconhecidos no projeto. Sua contribuição, por menor que seja, é valiosa para a comunidade!</p>

---

<p align="center">
  <b>Feito com ❤️ para a comunidade de desenvolvedores</b><br>
  <i>Contribua, aprenda e divirta-se! 🎮</i>
</p>