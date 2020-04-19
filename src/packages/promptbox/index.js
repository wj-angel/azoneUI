import AzPromptBox from "./src/AzPromptBox"

AzPromptBox.install = function (Vue,opts) {
  Vue.component(AzPromptBox.name,AzPromptBox)
}

export default AzPromptBox

