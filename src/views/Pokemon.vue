<template>
  <v-container class="pa-8">
    <v-img
      max-width="500"
      style="margin: 0 auto"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
      class="mb-12"
    ></v-img>
    <v-row>
      <v-col class="small-col-center">
        <v-text-field
          outlined
          label="Write the pokemon to search"
          v-model="pokemonName"
          @keydown="searchPokemon"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="fill-height">
      <div class="perfect-center">
        <v-progress-circular
          v-show="isLoading"
          indeterminate
          color="amber"
        ></v-progress-circular>
        <h2 v-if="!isLoading && !pokemon && pokemonName.length > 0">
          No pokemon found with that name
        </h2>
        <h2 v-else-if="!isLoading && !pokemon">Please type a name</h2>
        <div v-else-if="pokemon">
          <pokemon-card :pokemon="pokemon"></pokemon-card>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import PokemonCard from "../components/PokemonCard.vue";
export default {
  name: "Home",

  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemonName: "",
      isLoading: false,
      pokemon: null,
    };
  },
  methods: {
    searchPokemon: _.debounce(async function () {
      this.pokemon = null;
      this.isLoading = true;
      if (this.pokemonName.length > 0) {
         this.$API.pokemon
          .getPokemon(this.pokemonName.toLowerCase())
          .then((response) => {
            console.log(response);
            this.pokemon = response
          })
          .catch((err) => {
            console.warn(err);
            this.$store.commit("show_alert", {
              color: "error",
              text: "Pokemon not found",
            });
          });
      }
      console.log(this.pokemon);
      this.isLoading = false;
    }, 1000),
  },
};
</script>
<style scoped>
.perfect-center {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.small-col-center {
  max-width: 400px;
  margin: 0 auto;
}
</style>
