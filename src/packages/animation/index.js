import AzAnimation from "./src/AzAnimation"

AzAnimation.install = function (Vue,opts) {
  Vue.component(AzAnimation.name,AzAnimation)
}

export default AzAnimation

