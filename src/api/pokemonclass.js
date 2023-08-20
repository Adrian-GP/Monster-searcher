class PokemonClass {
    constructor(Vue) {
        this.$http = Vue.prototype.$http
    }

    async getPokemon(pokemon) {
        return this.$http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
            return Promise.resolve(response.data)
        }).catch((err) => {
            return Promise.reject(err)

        })
    }
}

export default PokemonClass