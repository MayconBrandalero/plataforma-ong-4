export function showToast(msg) {
  const toast = document.querySelector('.toast');
  if (toast) {
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3000);
  }
}

export function showModal(msg, opener) {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.querySelector('.modal-message').textContent = msg;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
    modal._lastActive = opener || document.activeElement;
  }
}

export function closeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    if (modal._lastActive) modal._lastActive.focus();
    modal._lastActive = null;
  }
}

export function validateCPF(cpf) {
  const clean = cpf.replace(/\D/g, '');
  if (!clean || clean.length !== 11) return false;
  if (/^(\d)\1+$/.test(clean)) return false;
  const calc = (digits) => {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]) * (digits.length + 1 - i);
    }
    const res = (sum * 10) % 11;
    return res === 10 ? 0 : res;
  }
  const d1 = calc(clean.slice(0, 9));
  const d2 = calc(clean.slice(0, 10));
  return d1 === parseInt(clean[9]) && d2 === parseInt(clean[10]);
}

function addError(input, message) {
  input.classList.add('input-error');
  let msg = input.parentElement.querySelector('.error-message');
  if (!msg) {
    msg = document.createElement('span');
    msg.className = 'error-message';
    msg.setAttribute('role', 'status');
    input.parentElement.appendChild(msg);
  }
  msg.textContent = message;
}

function removeError(input) {
  input.classList.remove('input-error');
  const msg = input.parentElement.querySelector('.error-message');
  if (msg) msg.remove();
}

export function bindCadastroForm(form, storageSave) {
  if (!form) return;
  const cpfInput = form.querySelector('#cpf');
  const phoneInput = form.querySelector('#telefone');
  const cepInput = form.querySelector('#cep');
  const estadoInput = form.querySelector('#estado');
  const dataInput = form.querySelector('#data');
  const emailInput = form.querySelector('#email');
  const nomeInput = form.querySelector('#nome');

  const validators = [
    {
      el: nomeInput,
      fn: v => v.trim().length >= 3,
      msg: 'Informe nome com ao menos 3 caracteres.'
    },
    {
      el: emailInput,
      fn: v => /\S+@\S+\.\S+/.test(v),
      msg: 'E-mail inválido.'
    },
    {
      el: cpfInput,
      fn: v => validateCPF(v),
      msg: 'CPF inválido.'
    },
    {
      el: phoneInput,
      fn: v => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v),
      msg: 'Telefone no formato (11) 99999-9999.'
    },
    {
      el: cepInput,
      fn: v => /^\d{5}-\d{3}$/.test(v),
      msg: 'CEP no formato 00000-000.'
    },
    {
      el: estadoInput,
      fn: v => /^[A-Za-z]{2}$/.test(v),
      msg: 'Estado com duas letras (SP).'
    },
    {
      el: dataInput,
      fn: v => {
        if (!v) return false;
        const d = new Date(v);
        const today = new Date();
        if (isNaN(d.getTime())) return false;
        if (d > today) return false;
        const age = Math.floor((today - d) / (365.25 * 24 * 3600 * 1000));
        return age >= 13;
      },
      msg: 'Data inválida ou menor de 13 anos.'
    }
  ];

  form.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('input', () => {
      const rule = validators.find(v => v.el === inp);
      if (rule) {
        if (rule.fn(inp.value)) removeError(inp); else addError(inp, rule.msg);
      } else {
        if (inp.checkValidity()) removeError(inp);
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    validators.forEach(v => {
      if (!v.fn(v.el.value)) {
        addError(v.el, v.msg);
        valid = false;
      } else removeError(v.el);
    });
    if (!valid) {
      showToast('Por favor corrija os campos destacados.');
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (storageSave) storageSave(data);
    showToast('Cadastro enviado com sucesso!');
    form.reset();
  });
}