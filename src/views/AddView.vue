<template>
  <div class="add">
    <div class="titulo">
      <h1>Adicionar sócio</h1>
    </div>
    <form @submit.prevent="adicionarSocio">
    <div>
      <label for="nome">Nome:</label>
      <input id="nome" v-model="novoSocio.nome" @blur="validarCampo('nome')" type="text">
      <small v-if="erros.nome">Campo obrigatório</small>
    </div>
    <div>
      <label for="plano">Plano:</label>
      <select id="plano" v-model="novoSocio.plano" required>
        <option value="Ouro">Ouro</option>
        <option value="Prata">Prata</option>
        <option value="Bronze">Bronze</option>
      </select>
    </div>
    <div>
      <label for="telefone">Telefone:</label>
      <input id="telefone" v-model="novoSocio.telefone" type="tel" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="novoSocio.email" type="email" required>
    </div>
    <div>
      <label for="status">Status:</label>
      <select id="status" v-model="novoSocio.status" required>
        <option value="ativo">Ativo</option>
        <option value="desativo">Desativo</option>
      </select>
    </div>
    <button :disabled="erros.disable" type="submit">Adicionar Sócio</button>
  </form>
  </div>
</template>


<script>
export default {
  name: "AddView.vue",
  data() {
    return {
      novoSocio: {
        nome: '',
        plano: 'Ouro', // valor padrão
        telefone: '',
        email: '',
        status: 'ativo', // valor padrão
      },
      erros: {
        nome: false,
        plano: false,
        telefone: false,
        email: false,
        status: false,
        disable: true,
      },
    };
  },
  methods: {
    validarCampo(campo) {
      if (!this.novoSocio[campo]) {
        this.erros[campo] = true;
        this.erros.disable = true;
      } else {
        this.erros.disable = false;
        this.erros[campo] = false;
      }
    },
    adicionarSocio() {
      fetch('http://localhost:3000/socios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.novoSocio)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Falha ao adicionar sócio');
            }
            return response.json();
          })
          .then(() => {
            // Resetar o formulário ou fazer outras ações após o sucesso
            this.novoSocio = { nome: '', plano: 'Ouro', telefone: '', email: '', status: 'ativo' };
            alert('Sócio adicionado com sucesso!');
          })
          .catch(error => {
            console.error('Erro na adição do sócio:', error);
          });
    }
  }
}
</script>


<style scoped>
  form > div{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
  }

  form label{
    color: #ffffff;
  }
</style>