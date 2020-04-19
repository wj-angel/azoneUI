import AzTool from "./src/AzTool"

AzTool.install = function (Vue,opts) {
  Vue.component(AzTool.name,AzTool)
}

export default AzTool
