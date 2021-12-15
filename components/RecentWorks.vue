<template>
  <div class="projects flex-column align-center">
    <h3>Projetos Recentes</h3>
    <p class="subtitle">
      Aqui estão alguns projetos em que trabalhei recentemente. Quer ver mais?
      <label class="pointer">Me mande um e-mail</label>
    </p>
    <div class="projects-cards flex">
      <div class="pointer project flex-column align-center" v-for="(project, index) in projects" :key="index">
        <div class="card">
          <a :href="project.link" target="_blank">          
            <img :src="`/${project.img}.webp`">
          </a>
        </div>
        <h4>{{ project.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { img: 'aggio-delivery', title: 'Aggio Delivery', link: 'https://aggio.app/' },
        { img: 'grupo-topazio', title: 'Grupo Topázio', link: 'https://www.grupotopazio.com/' },
        { img: 'casa-do-rolamento', title: 'Casa do Rolamento', link: 'https://casadorolamentoimp.com.br/' }
      ]
    }
  }
}
</script>

<style>
.projects {
  transform: translateY(-70px);
  gap: 7px;
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
  position: relative;
  overflow: hidden;
  width: 314px;
  height: 220px;
  background-color: var(--darker);
  border-radius: 16px;
  box-shadow: 2px 2px 6.70946px rgba(0, 0, 0, 0.39);
}
.projects-cards .card img {
  width: 100%;
  position: absolute;
  top: 0;
  transition: all 5s ease-in-out;
}
.projects-cards .project:nth-child(1):hover > .card img {
  top: -558px;
}
.projects-cards .project:nth-child(2):hover > .card img {
  top: -362px;
}
.projects-cards .project:nth-child(3):hover > .card img {
  top: -610px;
}
</style>