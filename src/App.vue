<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <router-link to="/" class="main-logo-route">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <span class="">Pokemon Searcher</span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/pokemon">
        <v-btn
        text
      >
        <span class="mr-2">Go to Pokemon</span>
      </v-btn>
      </router-link>
      <router-link to="digimon">
        <v-btn
        text
      >
        <span class="mr-2">Go to Digimon</span>
      </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.main-logo-route{
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>