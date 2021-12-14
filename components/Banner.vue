<template>
  <div class="banner flex align-center justify-around">
    <h1>Começe um projeto</h1>
    <p>Interessado em trabalhar juntos? Devíamos colocar um bate-papo na fila. Vou comprar o café.</p>
    <BtnDefault title="Vamos lá"/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.banner {
  background-color: var(--secondary);
  min-height: 190px;
  width: 80%;
  max-width: 1210px;
  transform: translateY(50%);
  border-radius: 16px;
  flex-wrap: wrap;
  padding: 0px 20px;
  color: var(--light)
}
.banner h1 {
  text-align: center;
  font-size: 28px;
}
.banner p {
  max-width: 280px;
  text-align: center;
}
@media screen and (max-width: 900px) {
  .banner {
    flex-direction: column;
    padding: 30px 8px;
    gap: 60px;
  }
}
</style>