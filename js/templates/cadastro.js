import { bindCadastroForm } from '../ui.js';
import { saveCadastro, loadCadastro } from '../storage.js';

export function render() {
  return `
  <section>
    <h2>Formulário de Cadastro</h2>
    <div class="img-section">
      <picture>
        <source srcset="assets/images/formulario_cadastro.webp" type="image/webp">
        <img src="assets/images/formulario_cadastro.jpg" alt="Formulário de cadastro da ONG Esperança">
      </picture>
    </div>
    <form id="cadastro-form" novalidate>
      <fieldset>
        <legend>Informações Pessoais</legend>
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\)\\s?\\d{4,5}-\\d{4}" placeholder="(11) 99999-9999" required>

        <label for="data">Data de Nascimento:</label>
        <input type="date" id="data" name="data" required>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" required>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>

        <label for="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" required>

        <label for="estado">Estado:</label>
        <input type="text" id="estado" name="estado" maxlength="2" placeholder="SP" required>
      </fieldset>

      <button type="submit" class="button">Enviar Cadastro</button>
    </form>
  </section>
  `;
}

export function init() {
  const form = document.getElementById('cadastro-form');
  bindCadastroForm(form, saveCadastro);
  const data = loadCadastro();
  if (data && form) {
    Object.keys(data).forEach(k => {
      const el = form.elements[k];
      if (el) el.value = data[k];
    });
  }
}