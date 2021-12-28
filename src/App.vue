<template>
  <app-navbar></app-navbar>
  <router-view />
</template>

<script>
import Navbar from "./components/Nav.vue";
export default {
  components: {
    AppNavbar: Navbar,
  },
};
</script>
