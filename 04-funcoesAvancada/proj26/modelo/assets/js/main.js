function criaCalculadora() {
  return { //regra nossa - atributos que são variaves vem para cima
    display:document.querySelector('.display'), //esse displey esta dentro do atributo do objeto, e pode ser acessado com this

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    }, //regra nossa - metodos vem para baixo

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    }
    realizaConta() {
      let conta = this.desplay.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
    this.display.value = '';
    },

    apagaUm() {
    this.display.value = this.display.value(0, -1);
    },
    


    cliqueBotoes() {
      // aqui o this -> e calculadora
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
