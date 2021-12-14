<template>
  <div class="apresentation flex-column align-center">
    <div class="phrase-bio flex align-center delay-02">    
      <h1 class="delay-04">Olá,</h1>
      <h1 class="delay-06">sou o Júlio.</h1>
      <h1 class="delay-06"> Prazer em te conhecer.</h1>
    </div>
    <div class="bio fadeIn delay-1">
      eu su u milior si naum pensarmos assim, u ser umano, si vuce naum pensar ki na sua profissaum vuze é u milior.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.phrase-bio {
  gap: 10px;
  margin-top: 60px;
  flex-wrap: wrap;

  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.phrase-bio h1, bio {
  color: var(--light);
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
.phrase-bio h1:nth-child(2) {
  position: relative;
}

.phrase-bio h1:nth-child(2)::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: var(--h1);
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.phrase-bio h1:nth-child(2):hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
.bio {
  font-weight: 100;
  font-size: 30px;
  text-align: center;
  width: 95%;
  max-width: 780px;
  margin-top: 30px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.light .bio {
  font-weight: 200;
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
@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.delay-1 {
  -moz-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.delay-02 {
  -moz-animation-delay: 0.2s;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.delay-04 {
  -moz-animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.delay-06 {
  -moz-animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>