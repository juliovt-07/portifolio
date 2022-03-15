<template>
  <div>
    <div v-if="modal" id="modal-contact" class="flex-column align-center justify-center">
      <div class="modal-content">
        <div id="close" class="pointer" @click="updateModeModal(false)">
          <svg width="39" height="39" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.7976 16.9777C32.7976 16.7672 32.6253 16.5949 32.4147 16.5949L29.2565 16.6093L24.5001 22.2797L19.7484 16.6141L16.5854 16.5997C16.3749 16.5997 16.2026 16.7672 16.2026 16.9825C16.2026 17.0734 16.2361 17.1596 16.2936 17.2314L22.519 24.6483L16.2936 32.0606C16.2357 32.1307 16.2036 32.2185 16.2026 32.3094C16.2026 32.5199 16.3749 32.6922 16.5854 32.6922L19.7484 32.6778L24.5001 27.0074L29.2518 32.673L32.41 32.6874C32.6205 32.6874 32.7928 32.5199 32.7928 32.3046C32.7928 32.2137 32.7593 32.1275 32.7019 32.0558L26.4859 24.6436L32.7114 17.2266C32.7688 17.1596 32.7976 17.0687 32.7976 16.9777Z" fill="#F5F3F5"/>
            <path d="M24.5 3.11035C12.6615 3.11035 3.0625 12.7094 3.0625 24.5479C3.0625 36.3863 12.6615 45.9854 24.5 45.9854C36.3385 45.9854 45.9375 36.3863 45.9375 24.5479C45.9375 12.7094 36.3385 3.11035 24.5 3.11035ZM24.5 42.3486C14.6713 42.3486 6.69922 34.3766 6.69922 24.5479C6.69922 14.7191 14.6713 6.74707 24.5 6.74707C34.3287 6.74707 42.3008 14.7191 42.3008 24.5479C42.3008 34.3766 34.3287 42.3486 24.5 42.3486Z" fill="#F5F3F5"/>
          </svg>
        </div>
        <ModalChange v-show="!email_form" @close-modal="updateModeModal($event)" @form-email="email_form = true"/>
        <EmailForm v-show="email_form" @close-modal="updateModeModal($event)"/>
      </div>
    </div>
    <header id="home">
      <Header @update-mode="updateMode($event)" @open-modal="updateModeModal($event)"/>
      <SectionApresentation/>      
    </header>
    <Skills/>
    <RecentWorks @open-modal="updateModeModal($event)" class="section-delay" :style="scrollY < 300 ? 'opacity: 0' : ''"/>
    <Companies class="section-delay" :style="scrollY < 830 ? 'opacity: 0' : ''"/>
    <footer class="flex-column align-center">
      <Banner class="section-delay" @open-modal="updateModeModal($event)" :style="scrollY < 1000 ? 'opacity: 0' : ''"/>
      <Footer :mode="mode"/>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: null,
      scrollY: 0,
      modal: false,
      email_form: false
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
  watch: {
    modal(value) {
      if (value === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
        this.email_form = false
      }
    }
  },
  methods: {
    updateMode(event) {
      console.log(event)
      this.mode = event
    },
    updateModeModal(mode) {
      this.modal = mode
    }
  }
}
</script>

<style>
#modal-contact {
  position: fixed;
  background: rgba(0, 0, 0, .9);
  width: 100%;
  height: 100vh;
  z-index: 8;

  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;

  -webkit-animation-duration: .3s;
  animation-duration: .3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.modal-content {
  width: 600px;
  min-height: 400px;
  background-color: var(--modal-bg);
  border-radius: 16px;
  position: relative;
  max-width: 90%;
}
#close {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
}
header {
  padding: 30px 45px 220px 45px;
  background: var(--header-bg);
}
.section-delay {
  transition: all .8s ease-in-out;
}
@media screen and (min-height: 970px) {
  .section-delay {
    opacity: 1 !important;
  }
}
</style>