export default function Digimon(Vue) {
    
    return {
         getDigimon: async (digimon)=> {
           return Vue.prototype.$http.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`).then((response) => {
               return response.data
           }).catch((err)=> {
               console.log("WE HAVE AN REROR")
               console.log(err)
               return err.data
           })
       }
    }
}