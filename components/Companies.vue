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
      companies: ['aggio', 'decole', 'inbolso', 'hubvet']
    }
  }
}
</script>

<style>
.companies {
  gap: 7px;
  transform: translateY(35px);
}
.companies h3 {
  max-width: 600px;
  text-align: center;
}
.companies-logos {
  margin-top: 20px;
  gap: 40px;
  flex-wrap: wrap;
}
.companies-logos img {
  transform: scale(.8);
  transition: all .5s ease-in-out;
}
.companies-logos:hover > .company img {
  filter: blur(2px);
}
.companies-logos .company img:hover {
  filter: blur(0px);
}
@media screen and (max-width: 834px) {
  .companies-logos .company:nth-child(4) {
    display: none;
  }
}
</style>