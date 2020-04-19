import AzNavigation from "./src/AzNavigation"

AzNavigation.install = function (Vue,opts) {
  Vue.component(AzNavigation.name,AzNavigation)
}

export default AzNavigation

