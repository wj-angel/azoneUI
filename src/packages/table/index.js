import AzTable from "./src/AzTable"

AzTable.install = function (Vue,opts) {
  Vue.component(AzTable.name,AzTable)
}

export default AzTable

