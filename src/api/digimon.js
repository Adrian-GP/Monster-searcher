export default function Digimon(Vue) {
    return {
         getDigimon: async(digimon) => {
           return Vue.prototype.$http.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`).then((response) => {
               return Promise.resolve(response.data)
           }).catch((err)=> {
               return Promise.reject(err)
           })
       }
    }
}