<template>
  <div>
    <header>
      <Header @update-mode="updateMode($event)"/>
      <SectionApresentation/>      
    </header>
    <Skills/>
    <RecentWorks/>
    <Companies/>
    <footer class="flex-column align-center">
      <Banner/>
      <Footer :mode="mode"/>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: null
    }
  },
  mounted() {
    if (!this.mode) {
      this.mode = this.$store.state.mode
      console.log(this.mode)
    }
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
</style>