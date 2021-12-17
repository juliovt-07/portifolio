<template>
  <div>
    <header id="home">
      <Header @update-mode="updateMode($event)"/>
      <SectionApresentation/>      
    </header>
    <Skills/>
    <RecentWorks class="section-delay" :style="scrollY < 300 ? 'opacity: 0' : ''"/>
    <Companies class="section-delay" :style="scrollY < 830 ? 'opacity: 0' : ''"/>
    <footer class="flex-column align-center">
      <Banner class="section-delay" :style="scrollY < 1000 ? 'opacity: 0' : ''"/>
      <Footer :mode="mode"/>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: null,
      scrollY: 0
    }
  },
  mounted() {
    if (!this.mode) {
      this.mode = this.$store.state.mode
      console.log(this.mode)
    }
    window.addEventListener('scroll',(event) => {
      this.scrollY = window.scrollY
    });
  },
  methods: {
    updateMode(event) {
      console.log(event)
      this.mode = event
    }
  }
}
</script>

<style>
header {
  padding: 30px 45px 220px 45px;
  background: var(--header-bg);
}
.section-delay {
  transition: all .8s ease-in-out;
}
</style>