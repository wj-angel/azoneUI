import AzShopCart from "./src/AzShopCart"

AzShopCart.install = function (Vue,opts) {
  Vue.component(AzShopCart.name,AzShopCart)
}

export default AzShopCart
