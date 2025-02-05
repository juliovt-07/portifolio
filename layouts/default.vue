<template>
 <div>
  <Nuxt v-show="mode" class="content" />
  <a href="#home" v-show="scrollY > 500" class="delay-06">
   <svg
    class="to-up"
    v-show="mode"
    width="69"
    height="69"
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   >
    <path
     d="M20.1862 40.0971L34.133 26.1503L48.0798 40.0971"
     stroke-opacity="0.75"
     stroke-width="3.4867"
     stroke-linecap="round"
     stroke-linejoin="round"
    />
    <circle
     cx="34.5"
     cy="34.5"
     r="33.766"
     stroke-opacity="0.75"
     stroke-width="1.46809"
    />
   </svg>
  </a>
  <div v-show="screenSelectMode" class="select-mode flex pointer">
   <div
    @click="selectMode('dark')"
    class="select-dark flex-column justify-center align-center"
   >
    <svg
     class="moon pointer"
     :width="svg"
     :height="svg"
     viewBox="0 0 59 59"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M25.8125 3.6875C16.5938 3.6875 5.53125 12.9062 5.53125 27.6562C5.53125 42.4062 16.5938 53.4688 31.3438 53.4688C46.0938 53.4688 55.3125 42.4062 55.3125 33.1875C35.0312 46.0938 12.9062 23.9688 25.8125 3.6875Z"
      stroke="#f5f3f5"
      stroke-width="4.125"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
    </svg>
    <h2>Dark</h2>
   </div>
   <div
    @click="selectMode('light')"
    class="select-light flex-column justify-center align-center"
   >
    <svg
     class="sun pointer"
     :width="svg"
     :height="svg"
     viewBox="0 0 59 59"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      d="M29.5 44.25C33.4119 44.25 37.1637 42.696 39.9298 39.9298C42.696 37.1637 44.25 33.4119 44.25 29.5C44.25 25.5881 42.696 21.8363 39.9298 19.0702C37.1637 16.304 33.4119 14.75 29.5 14.75C25.5881 14.75 21.8363 16.304 19.0702 19.0702C16.304 21.8363 14.75 25.5881 14.75 29.5C14.75 33.4119 16.304 37.1637 19.0702 39.9298C21.8363 42.696 25.5881 44.25 29.5 44.25V44.25Z"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M54.0833 29.5H56.5416"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M29.5 4.91668V2.45834"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M29.5 56.5417V54.0833"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M49.1666 49.1667L46.7083 46.7083"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M49.1666 9.83334L46.7083 12.2917"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M9.83331 49.1667L12.2916 46.7083"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M9.83331 9.83334L12.2916 12.2917"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M2.45831 29.5H4.91665"
      stroke="#363636"
      stroke-width="3.6875"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
    </svg>
    <h2>Light</h2>
   </div>
  </div>
 </div>
</template>

<script>
import { mapState } from "vuex";

export default {
 data() {
  return {
   mode: null,
   screenSelectMode: false,
   svg: 55,
   scrollY: 0,
  };
 },
 mounted() {
  if (this.getMode()) {
   this.selectMode(this.getMode());
  } else {
   this.screenSelectMode = true;
  }
  window.addEventListener("scroll", (event) => {
   this.scrollY = window.scrollY;
  });
 },

 methods: {
  getMode() {
   return this.$store && this.$store.state.mode;
  },
  selectMode(value) {
   this.mode = value;
   let mode = document.querySelector(".content").classList;
   let selectmode = document.querySelector(".select-mode");
   mode.add(value);
   this.$store.commit("setMode", value);
   selectmode.style.top = "100%";
   setTimeout(() => {
    selectmode.style.opacity = "0";
   }, 500);
   setTimeout(() => {
    selectmode.style.display = "none";
   }, 1300);
  },
 },
};
</script>

<style>
.to-up {
 position: fixed;
 bottom: 30px;
 right: 30px;
 cursor: pointer;
 stroke: var(--secondary);
 opacity: 0.4;
 transition: all 0.2s ease-in-out;

 -webkit-animation-name: fadeInDown;
 animation-name: fadeInDown;

 -webkit-animation-duration: 1s;
 animation-duration: 1s;
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;
}
.to-up:hover {
 opacity: 0.8;
}
.dark ~ .to-up {
 stroke: var(--primary);
}
.select-mode {
 position: absolute;
 width: 100%;
 height: 100vh;
 top: 0;
 transition: all 1s ease;
}
.select-mode h2 {
 font-size: 28px;
 font-weight: 300;
 transform: translateY(30px);
 position: relative;
}
.select-dark,
.select-light {
 transition: all 0.4s ease-in-out;
}
.select-mode .select-dark:hover {
 width: 55%;
}
.select-mode .select-light:hover {
 width: 55%;
}
.select-mode h2::before {
 content: "";
 position: absolute;
 left: 50%;
 bottom: -4px;
 width: 100%;
 height: 2px;
 opacity: 0.8;
 transform-origin: center;
 transform: translate(-50%, 0) scaleX(0);
 transition: transform 0.3s ease-in-out;
}
.select-mode .select-dark h2::before {
 background-color: var(--light);
}
.select-mode .select-light h2::before {
 background-color: var(--dark);
}
.select-mode .select-dark:hover > h2::before,
.select-mode .select-light:hover > h2::before {
 transform: translate(-50%, 0) scaleX(1);
}
.select-mode .select-dark {
 width: 50%;
 height: 100%;
 background-color: var(--dark);
 color: var(--light);
}
.select-mode .select-light {
 width: 50%;
 height: 100%;
 background-color: var(--light);
 color: var(--dark);
}
</style>