import AzDate from "./src/AzDate"

AzDate.install = function (Vue,opts) {
  Vue.component(AzDate.name,AzDate)
}

export default AzDate
