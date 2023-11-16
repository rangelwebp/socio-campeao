<template>
    <aside class="flex flex-column gap-32">
        <div class="logo">
            <router-link to="/socios/">
                <img src="/images/logo.svg" alt="Sócio Campeão">
            </router-link>
        </div>
        <nav>
            <h4>Sócios</h4>
            <ul>
                <router-link :to="{ name: 'Ouro' }">
                    <img src="/images/icone-medalha-ouro.svg" alt="Plano ouro"> <span>Plano Ouro</span>
                </router-link>
                <router-link to="/socios/bronze">
                    <img src="/images/icone-medalha-bronze.svg" alt="Plano bronze"> <span>Plano Bronze</span>
                </router-link>
                <router-link to="/socios/prata">
                    <img src="/images/icone-medalha-prata.svg" alt="Plano prata"> <span>Plano Prata</span>
                </router-link>
            </ul>
        </nav>
        <nav>
            <h4>Outros</h4>
            <ul>
                <li><a href="#"><img src="/images/icone-desativo.svg" alt="Plano bronze"> <span>Desativos</span></a></li>
            </ul>
        </nav>
        <div class="acao">
            <button @click="$router.push('/socios/adicionar')" class="botao botao-successo display-block w-100">Adicionar Sócio</button>
        </div>
  </aside>
</template>

<script>
    export default {
        name: 'AsideComponent'
    }
</script>

<style lang="scss" scoped>

</style>