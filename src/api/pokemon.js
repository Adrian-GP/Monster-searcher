export default function Pokemon(Vue) {

    return {
        getPokemon: async (pokemon) => {
            return Vue.prototype.$http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
                return Promise.resolve(response.data)
            }).catch((err) => {
                return Promise.reject(err)

            })
        }
    }
}