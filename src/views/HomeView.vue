<template>
  <div class="home">
    <!-- Colar da linha 38 a 71 -->
    <div class="titulo">
        <h1>Sócios</h1>
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
            <tr>
                <td>1</td>
                <td>Carlos Rangel</td>
                <td>Plano Ouro</td>
                <td>(88) 98293.1235</td>
                <td>rangel@nomail.com.br</td>
                <td class="status"><span class="ativo"></span> Ativo</td>
            </tr>

            <tr>
                <td>2</td>
                <td>Carlos Rangel</td>
                <td>Plano Ouro</td>
                <td>(88) 98293.1235</td>
                <td>rangel@nomail.com.br</td>
                <td class="status"><span class="desativo"></span> Desativo</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    components: {
    }
  }
</script>
