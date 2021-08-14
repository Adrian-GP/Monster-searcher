<template>
  <v-container>
    <h1>What do you want to look for?</h1>
    <v-row>
      <v-col>
        <router-link to="/pokemon">
          <v-img
          max-width="500"
          style="margin: 0 auto"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        ></v-img>
        </router-link>
      </v-col>
       <v-col>
        <router-link to="/digimon">
          <v-img
          max-width="500"
          style="margin: 0 auto"
          :src="require('../assets/digimon.png')"
        ></v-img>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
</style>
