<template>
  <v-card>
      <v-img :src="pokemon.sprites.front_default"></v-img>
      <v-card-title class="justify-center card-title">{{pokemon.name}}</v-card-title>
  </v-card>
</template>

<script>
export default {
    props: ["pokemon"]
}
</script>

<style scoped>
.card-title{
    text-transform: capitalize;
}
</style>