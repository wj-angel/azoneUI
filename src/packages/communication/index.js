import AzCommunication from "./src/AzCommunication"

AzCommunication.install = function (Vue,opts) {
  Vue.component(AzCommunication.name,AzCommunication)
}

export default AzCommunication
