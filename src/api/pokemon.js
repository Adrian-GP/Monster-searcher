export default function Pokemon(Vue) {
    
    return {
         getPokemon: async (pokemon)=> {
           return Vue.prototype.$http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
               return response.data
           }).catch((err) => {
               console.log("WE HAVE AN ERROR")
               console.log(err)
           })
       }
    }
}