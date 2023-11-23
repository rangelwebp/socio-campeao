<template>
  <div>
    <div class="titulo">
      <h1>Sócio</h1>
    </div>
    <div v-if="socio">
      <h1>Detalhes do Sócio</h1>
      <p>ID: {{ socio.id }}</p>
      <p>Nome: {{ socio.nome }}</p>
      <p>Plano: {{ socio.plano }}</p>
      <p>Telefone: {{ socio.telefone }}</p>
      <p>Email: {{ socio.email }}</p>
      <p>Status: {{ socio.status }}</p>

      <button @click="alterarStatusSocio">
        {{ socio.status === 'ativo' ? 'Desativar' : 'Ativar' }} Sócio
      </button>

      <button @click="deletarSocio" class="delete-button">
        Deletar Sócio
      </button>

    </div>
  </div>
</template>


<script>
export default {
  name: "SocioDetails",
  data(){
    return{
      socio: null,
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  mounted() {
    //const socioId = this.$route.params.id;
    this.fetchSocioDetails();
  },
  methods: {
    fetchSocioDetails() {
      const id = parseInt(this.id);
      fetch(`http://localhost:3000/socios/${id}`)
          .then(response => response.json())
          .then(data => {
            this.socio = data;
          })
          .catch(error => {
            console.error('Erro ao buscar detalhes do sócio:', error);
          });
    },
    alterarStatusSocio() {
      const novoStatus = this.socio.status === 'ativo' ? 'desativo' : 'ativo';
      fetch(`http://localhost:3000/socios/${this.socio.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: novoStatus })
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Falha ao atualizar o status do sócio');
            }
            return response.json();
          })
          .then(() => {
            this.socio.status = novoStatus;
            alert(`Status do sócio alterado para ${novoStatus}`);
          })
          .catch(error => {
            console.error('Erro ao alterar o status do sócio:', error);
          });
    },
    deletarSocio() {
      const confirmado = confirm("Tem certeza que deseja deletar este sócio?");
      if (!confirmado) return;

      fetch(`http://localhost:3000/socios/${this.id}`, {
        method: 'DELETE'
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Falha ao deletar o sócio');
            }
            alert('Sócio deletado com sucesso!');
            this.$router.push('/socios'); // Redireciona para a página de sócios
          })
          .catch(error => {
            console.error('Erro ao deletar sócio:', error);
          });
    }
  },
}
</script>



<style scoped>

</style>