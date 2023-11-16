<template>
    <div class="">
        <div class="titulo">
            <h1>Sócios Plano {{ capitalizeFirstLetter( filterType ) }}</h1>
        </div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Plano</th>
          <th>Telefone</th>
          <th>Email</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="socio in socios" :key="socio.id">
          <td>{{ socio.id }}</td>
          <td>{{ socio.nome }}</td>
          <td>{{ socio.plano }}</td>
          <td>{{ socio.telefone }}</td>
          <td>{{ socio.email }}</td>
          <td class="status">
            <span :class="socio.status"></span> {{ capitalizeFirstLetter( socio.status ) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'FilterView',
  props: {
    filterType: String, // Declaração da prop
  },
  data() {
    return {
      socios: [],
    };
  },
  watch: {
    // Cria um watcher para a propriedade filterType
    filterType(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.requisicao(); // Chama requisicao() quando filterType muda
      }
    },
  },
  mounted() {
    this.requisicao(); // Chame o método de requisição aqui
  },
  methods: {
    requisicao() {
      fetch('http://localhost:3000/socios/')
          .then(response => response.json())
          .then(data => {
            // Não precisa desestruturar, já que o array de sócios é o próprio data
            const sociosFiltrados = data.filter(socio => {
              // Adicione toLowerCase() para garantir a comparação em minúsculas
              return socio.plano.toLowerCase() === this.filterType.toLowerCase();
            });
            this.socios = sociosFiltrados;
          })
          .catch(error => {
            console.error('Erro na requisição:', error);
          });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  }
};
</script>

<style></style>