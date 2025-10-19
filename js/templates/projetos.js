import { showModal } from '../ui.js';

export function render() {
  return `
  <section>
    <h2>Conheça nossos projetos sociais</h2>
    <p>Veja abaixo as iniciativas que estão mudando vidas em nossa comunidade.</p>
  </section>

  <section id="educacao">
    <div class="card">
      <img src="assets/images/sala_aula.jpg" alt="Crianças em sala de aula comunitária">
      <div class="card-title">Educação para Todos</div>
      <div class="card-tags">
        <span class="badge primary">Educação</span>
        <span class="badge info">2025</span>
      </div>
      <p>Oferecemos reforço escolar e atividades culturais para crianças em situação de vulnerabilidade.</p>
      <button class="button btn-modal" data-msg="Inscreva-se para o projeto Educação para Todos!">Quero Participar</button>
    </div>
  </section>

  <section id="saude">
    <div class="card">
      <img src="assets/images/cuidados.jpg" alt="Atendimento de saúde voluntário">
      <div class="card-title">Saúde Comunitária</div>
      <div class="card-tags">
        <span class="badge secondary">Saúde</span>
        <span class="badge info">2025</span>
      </div>
      <p>Promovemos campanhas de vacinação, palestras e atendimentos gratuitos.</p>
      <button class="button btn-modal" data-msg="Inscreva-se para o projeto Saúde Comunitária!">Quero Participar</button>
    </div>
  </section>

  <section>
    <div class="alert info">
      Você pode apoiar nossos projetos com doações financeiras, doação de materiais ou se voluntariando.
    </div>
    <p>
      Acesse nossa <a href="#/cadastro" data-link>página de cadastro</a> e faça parte dessa transformação!
    </p>
  </section>
  `;
}

export function init() {
  document.querySelectorAll('.btn-modal').forEach(b => {
    b.addEventListener('click', () => {
      showModal(b.dataset.msg || 'Mensagem do modal');
    });
  });
}