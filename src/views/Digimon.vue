<template>
  <v-container class="pa-8">
    <v-img
      max-width="500"
      style="margin: 0 auto"
      :src="require('../assets/digimon.png')"
      class="mb-12"
    ></v-img>
    <v-row>
      <v-col class="small-col-center">
        <v-text-field
          outlined
          label="Write the digimon to search"
          v-model="digimonName"
          @keydown="searchDigimon"
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
        <h2 v-if="!isLoading && !digimon && digimonName.length > 0">
          No digimon found with that name
        </h2>
        <h2 v-else-if="!isLoading && !digimon">Please type a name</h2>
        <div v-else-if="digimon">
          <digimon-card :digimon="digimon"></digimon-card>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import DigimonCard from "../components/DigimonCard.vue";
export default {
  name: "Home",

  components: {
    DigimonCard,
  },
  data() {
    return {
      digimonName: "",
      isLoading: false,
      digimon: null,
    };
  },
  methods: {
    searchDigimon: _.debounce(async function () {
      this.digimon = null;
      this.isLoading = true;
      if (!!this.digimonName && this.digimonName.length > 0) {
        this.$API.digimon
          .getDigimon(this.digimonName.toLowerCase())
          .then((response) => {
            console.log(response);
            let arr = response;
            if (arr) {
              this.digimon = arr[0];
              console.log(this.digimon);
            }
          })
          .catch((err) => {
            console.warn(err);
            this.$store.commit("show_alert", {
              color: "error",
              text: "Digimon not found",
            });
          });
      }
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
