import AzFold from "./src/AzFold"

AzFold.install = function (Vue,opts) {
  Vue.component(AzFold.name,AzFold)
}

export default AzFold
