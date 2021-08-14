<template>
  <v-card>
      <v-img :src="digimon.img"></v-img>
      <v-card-title class="justify-center card-title">{{digimon.name}}</v-card-title>
  </v-card>
</template>

<script>
export default {
    props: ["digimon"]
}
</script>

<style scoped>
.card-title{
    text-transform: capitalize;
}
</style>