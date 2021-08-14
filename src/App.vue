<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/" class="main-logo-route">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="
              $vuetify.theme.dark
                ? require('./assets/digivice.png')
                : 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'
            "
            transition="scale-transition"
            width="40"
          />

          <span class=""
            >{{
              $vuetify.theme.dark
                ? 'Digimon'
                : 'Pokemon'
            }}
            Searcher</span
          >
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/pokemon">
        <v-btn text>
          <span class="mr-2">Go to Pokemon</span>
        </v-btn>
      </router-link>
      <router-link to="digimon">
        <v-btn text>
          <span class="mr-2">Go to Digimon</span>
        </v-btn>
      </router-link>
      <v-switch
        color="secondary"
        v-model="$vuetify.theme.dark"
        hint="This toggles in between Pokemon or Digimon theme"
        inset
        :label="($vuetify.theme.dark ? 'Digimon' : 'Pokemon') + ' theme'"
        persistent-hint
      ></v-switch>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-snackbar v-model="snackbar" :timeout="3000" bottom center :color="color">
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    snackbar: {
      get() {
        return this.$store.state.alert;
      },
      set(value) {
        this.$store.state.alert = value;
      },
    },
    text() {
      return this.$store.state.text;
    },
    color() {
      return this.$store.state.color;
    },
  },
};
</script>
<style scoped>
.main-logo-route {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.theme--dark.v-application {
  background: #1b203a;
  color: #ffffff;
}
</style>