import AzUploader from "./src/AzUploader"

AzUploader.install = function (Vue,opts) {
  Vue.component(AzUploader.name,AzUploader)
}

export default AzUploader
