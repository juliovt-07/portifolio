<template>
  <div class="projects flex-column align-center">
    <h3>Projetos Recentes</h3>
    <p class="subtitle">
      Aqui estão alguns projetos em que trabalhei recentemente. Quer ver mais?
      <label class="pointer">Me mande um e-mail</label>
    </p>
    <div class="projects-cards flex">
      <div class="project flex-column align-center" v-for="(project, index) in projects" :key="index">
        <div class="card"></div>
        <h4>{{ project }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: ['Aggio Delivery', 'Grupo Topázio', 'Casa do Rolamento']
    }
  }
}
</script>

<style>
.projects {
  transform: translateY(-70px);
  gap: 7px;
}
.projects .subtitle {
  text-align: center;
  max-width: 90%;
}
.projects label {
  color: var(--primary);
  font-weight: 600;
  position: relative;
  padding: 6px 0;
}
.projects label::before, .projects label::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}
.projects label::before {
  top: 0;
}
.projects label::after {
  bottom: 0;
}
.projects label:hover::before, .projects label:hover::after {
  transform-origin: center left;
  transform: scaleX(1);
}
.projects-cards {
  padding-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.projects-cards .project {
  gap: 10px;
}
.projects-cards .card {
  width: 314.23px;
  height: 220.29px;
  background-color: var(--darker);
  border-radius: 16px;
  box-shadow: 2px 2px 6.70946px rgba(0, 0, 0, 0.39);
}
</style>