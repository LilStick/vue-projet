<template>
  <Header />
  <router-view></router-view>

  <footer />
</template>

<script setup>
import Header from "./components/Header.vue";

import Footer from "./components/Footer.vue";
</script>
