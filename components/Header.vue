<template>
  <div class="header flex justify-between align-center">
    <div class="icon-mode">
      <svg @click="changeMode()" class="sun pointer invisible" :width="svg" :height="svg" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 44.25C33.4119 44.25 37.1637 42.696 39.9298 39.9298C42.696 37.1637 44.25 33.4119 44.25 29.5C44.25 25.5881 42.696 21.8363 39.9298 19.0702C37.1637 16.304 33.4119 14.75 29.5 14.75C25.5881 14.75 21.8363 16.304 19.0702 19.0702C16.304 21.8363 14.75 25.5881 14.75 29.5C14.75 33.4119 16.304 37.1637 19.0702 39.9298C21.8363 42.696 25.5881 44.25 29.5 44.25V44.25Z" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M54.0833 29.5H56.5416" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.5 4.91668V2.45834" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.5 56.5417V54.0833" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49.1666 49.1667L46.7083 46.7083" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M49.1666 9.83334L46.7083 12.2917" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.83331 49.1667L12.2916 46.7083" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.83331 9.83334L12.2916 12.2917" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.45831 29.5H4.91665" stroke="#FAFAFA" stroke-width="3.6875" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg @click="changeMode()" class="moon pointer" :width="svg" :height="svg" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.8125 3.6875C16.5938 3.6875 5.53125 12.9062 5.53125 27.6562C5.53125 42.4062 16.5938 53.4688 31.3438 53.4688C46.0938 53.4688 55.3125 42.4062 55.3125 33.1875C35.0312 46.0938 12.9062 23.9688 25.8125 3.6875Z" stroke="#FAFAFA" stroke-width="4.125" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <BtnDefault class="btn-hello" title="Diga Olá"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svg: 45
    }
  },
  methods: {
    changeMode() {
      let svg = ''
      let mode = document.querySelector('.content').classList
      if (mode[1] === 'dark') {
        mode.remove('dark')
        mode.add('light')
        svg = 'moon'
      } else {
        mode.remove('light')
        mode.add('dark')
        svg = 'sun' 
      }
      document.querySelector('.invisible').classList.remove('invisible')
      document.querySelector('.'+svg).classList.add('invisible')
      this.$emit('update-mode', mode[1])
    }
  }
}
</script>

<style>
.icon-mode {
  position: relative;
  height: 45px;
}
.icon-mode svg {
  position: absolute;
  top: 0;
  left: 0;
  transition: all .6s;
}
.invisible {
  opacity: 0;
}
@media screen and (max-width: 865px) {
  .header {
    justify-content: center;
  }
  .btn-hello {
    display: none;
  }
  .icon-mode {
    width: 45px;
    margin: 0 auto;
  }
}
</style>