import AzApi from './src/AzApi'

AzApi.install = function (Vue,opts) {
  Vue.component(AzApi.name,AzApi)
}

export default AzApi
