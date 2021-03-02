<template>
  <ul>
    <router-link to="/">Home</router-link>
    <router-link to="/test">Test</router-link>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue { }
</script>

<style>

</style>
