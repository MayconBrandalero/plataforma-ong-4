import { showModal } from '../ui.js';

export function render() {
  return `
  <main id="app" role="main">
  <section>
    <h2>Sobre Nós</h2>
    <div class="img-section">
      <picture>
        <source srcset="assets/images/ong1.webp" type="image/webp">
        <img src="assets/images/ong1.jpg" alt="Equipe da ONG em ação social">
      </picture>
    </div>
    <p>
      Somos uma organização sem fins lucrativos dedicada a transformar vidas por meio de
      projetos sociais. Trabalhamos com educação, saúde e sustentabilidade.
    </p>
  </section>

  <section>
    <h2>Missão, Visão e Valores</h2>
    <ul>
      <li><strong>Missão:</strong> Promover inclusão social.</li>
      <li><strong>Visão:</strong> Um mundo mais justo e solidário.</li>
      <li><strong>Valores:</strong> Respeito, solidariedade e transparência.</li>
    </ul>
  </section>

  <section>
    <h2>Projetos em Destaque</h2>
    <div class="card">
      <img src="assets/images/sala_aula.jpg" alt="Projeto Educação">
      <div class="card-title">Educação para Todos</div>
      <div class="card-tags">
        <span class="badge primary">Educação</span>
        <span class="badge info">2025</span>
      </div>
      <p>Oferecemos reforço escolar e atividades culturais para crianças em situação de vulnerabilidade.</p>
      <button class="button btn-modal" data-msg="Inscreva-se para este projeto!">Quero Participar</button>
    </div>
    <div class="card">
      <img src="assets/images/cuidados.jpg" alt="Projeto Saúde">
      <div class="card-title">Saúde Comunitária</div>
      <div class="card-tags">
        <span class="badge secondary">Saúde</span>
        <span class="badge info">2025</span>
      </div>
      <p>Promovemos campanhas de vacinação, palestras e atendimentos gratuitos.</p>
      <button class="button btn-modal" data-msg="Saiba como ajudar na área da saúde!">Quero Ajudar</button>
    </div>
  </section>

  <section>
    <h2>Contato</h2>
    <p>Email: <a href="mailto:contato@ongesperanca.org">contato@ongesperanca.org</a></p>
    <p>Telefone: <a href="tel:+5511999999999">(11) 99999-9999</a></p>
  </section>
  </main>
  `;
}

export function init() {
  document.querySelectorAll('.btn-modal').forEach(b => {
    b.addEventListener('click', (e) => {
      showModal(b.dataset.msg || 'Mensagem do modal', e.currentTarget);
    });
  });
}