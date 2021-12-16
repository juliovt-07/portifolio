<template>
  <div class="apresentation flex-column align-center">
    <div class="phrase-bio flex align-center delay-02">    
      <h1 class="delay-04">Olá,</h1>
      <h1 class="delay-06">sou o Júlio.</h1>
      <h1 class="delay-06"> Prazer em te conhecer.</h1>
    </div>
    <div class="bio fadeIn delay-1">
      Um Desenvolvedor aventureiro no mundo
      <VueCustomTooltip class="tooltip" multiline label="UI: Design da parte visual de um site | UX: Navegação intuitiva, interativa e amigável.">
        <span>UI/UX</span>
      </VueCustomTooltip>
      , e entusiasmado por criar o mais agradável aos olhos e consoles.
    </div>
  </div>
</template>

<script>
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

export default {
  components: {
    VueCustomTooltip
  },
}
</script>

<style>
.phrase-bio {
  gap: 10px;
  margin-top: 60px;
  flex-wrap: wrap;
  cursor: default;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.phrase-bio h1, bio {
  color: var(--light);
  cursor: default;
}
.phrase-bio h1:nth-child(1) {
  font-size: 36px;
}
.phrase-bio h1:nth-child(2) {
  font-size: 55px;
  transform: translateY(-5px);
  color: var(--h1);
}
.phrase-bio h1:nth-child(3) {
  font-size: 34px;
  transform: translateY(2px);
}
.phrase-bio h1 {
  position: relative;
}

.phrase-bio h1::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--light);
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}
h1:nth-child(2)::before {
  background-color: var(--h1)
}
.phrase-bio h1:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
.bio {
  font-weight: 200;
  font-size: 30px;
  text-align: center;
  width: 95%;
  max-width: 780px;
  margin-top: 30px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  cursor: default;
}
.light .bio {
  font-weight: 300;
}
@media screen and (max-width: 397px) {
  .phrase-bio {
    gap: 0 !important;
  }
}
@media screen and (max-width: 796px) {
  .phrase-bio h1:nth-child(2) {
    font-size: 43px;
    transform: translateY(0px);
  }
  .phrase-bio {
    gap: 4px;
  }
}
@media screen and (max-width: 865px) {
  .apresentation {
    align-items: start;
  }
  .phrase-bio {
    margin-top: 30px;
  }
  .bio {
    font-weight: 200;
    font-size: 25px;
    text-align: left;
  }
}
span {
  position: relative;
  z-index: 1;
}

span::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -0.25em;
  right: -0.25em;
  background-color: var(--social-media);
  transform-origin: bottom center;
  transform: scaleY(0.1);
  transition: all 0.1s ease-in-out;
}

span:hover::before {
  transform: scaleY(1);
  background-color: var(--social-media);
}
</style>