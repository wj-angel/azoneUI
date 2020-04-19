import AzProgressBar from "./src/AzProgressBar"

AzProgressBar.install = function (Vue,opts) {
  Vue.component(AzProgressBar.name,AzProgressBar)
}

export default AzProgressBar

