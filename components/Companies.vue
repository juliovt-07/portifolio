<template>
  <div class="companies flex-column align-center">
    <h3>Colaborações</h3>
    <p class="subtitle">
      Tenho orgulho de ter colaborado com algumas empresas incríveis:
    </p>
    <div class="companies-logos flex justify-center align-center">
      <div class="company pointer" v-for="(company, index) in companies" :key="index">
        <img :src="`/${company}.png`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: ['aggio', 'decole', 'inbolso', 'hubvet', 'overdrive']
    }
  }
}
</script>

<style>
.companies {
  gap: 7px;
  transform: translateY(60px);
}
.companies h3 {
  max-width: 600px;
  text-align: center;
}
.companies-logos {
  margin-top: 40px;
  gap: 40px;
  flex-wrap: wrap;
}
.companies-logos img {
  transform: scale(.8);
  transition: all .5s ease-in-out;
}
.companies-logos:hover > .company img {
  filter: grayscale(100%);
}
.companies-logos .company img:hover {
  filter: grayscale(0%);
}
</style>