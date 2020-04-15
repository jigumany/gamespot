<template>
  <div>
    <compHeader />
    <router-view />
    <compFooter />
  </div>
</template>

<script>
import compHeader from "./components/Header-Footer/Header";
import compFooter from "./components/Header-Footer/Footer";

export default {
  components: {
    compHeader,
    compFooter
  },
  created() {
    this.$store.dispatch("refreshToken");
  }
};
</script>

<style>
@import "./assets/style.css";
</style>
