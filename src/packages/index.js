import button from "./button"
import form from "./form"
import popup from "./popup"
import shopCart from "./shopCart"
import azinput from "./input"
import azrow from "./row"
import dropDownMenu from "./dropDownMenu"
import azfold from "./fold"
import azdate from "./date"
import tool from "./tool"
import rate from "./rate"
import yzm from "./yzm"
import yzm3 from "./yzm3"
import yzm4 from "./yzm4"
import accordion from "./accordion/"
import azcomm from "./communication"
import azuploader from "./uploader"
import azcolorpicker from "./colorPicker"
import threeShuffing from './threeShuffing'
import tab from './tab'
import progressbar from './progressbar'
import table from './table'
import tablesecond from './tablesecond'
import animation from './animation'
import animationsecond from './animationsecond'
import theslider from './theslider'
import theslidersecond from './theslidersecond'
import animationthird from './animationthird'
import animationfourth from './animationfourth'
import animationfifth from './animationfifth'
import animationsixteen from './animationsixteen'
import animationsevteen from './animationsevteen'
import animationeighteen from './animationeighteen'
import animationnineteen from './animationnineteen'
import progressbarsecond from './progressbarsecond'
import progressbarthird from './progressbarthird'
import slideshow from "./slideshow"
import slideshow2 from "./slideshow2"
import slideshow3 from "./slideshow3"
import paging from "./paging"
import azthefrom from './theform'
import azprombox from './promptbox'
import azpromboxsend from './promptboxsecond'
import aznavigativg from './navigation'
import azbred from './breadcrumbs'
import api from "./api"

const AzoneUI = {};

AzoneUI.install = function (Vue,opts) {
  Vue.component(button.name,button),
  Vue.component(form.name,form),
  Vue.component(popup.name,popup),
  // Vue.component(search.name,search)
  // Vue.component(skin.name,skin)
  Vue.component(shopCart.name,shopCart),
  Vue.component(azinput.name,azinput),
  Vue.component(azrow.name,azrow),
  Vue.component(dropDownMenu.name,dropDownMenu),
  Vue.component(azfold.name,azfold),
  Vue.component(azdate.name,azdate),
  Vue.component(tool.name,tool),
  Vue.component(rate.name,rate),
  Vue.component(yzm.name,yzm),
  Vue.component(yzm3.name,yzm3),
  Vue.component(yzm4.name,yzm4),
  Vue.component(accordion.name,accordion),
  Vue.component(azcomm.name,azcomm),
  Vue.component(azuploader.name,azuploader),
  Vue.component(azcolorpicker.name,azcolorpicker),
  Vue.component(threeShuffing.name,threeShuffing),
  Vue.component(tab.name,tab),
  Vue.component(progressbar.name,progressbar),
  Vue.component(table.name,table),
  Vue.component(animation.name,animation),
  Vue.component(theslider.name,theslider),
  Vue.component(theslidersecond.name,theslidersecond),
  Vue.component(animationsecond.name,animationsecond),
  Vue.component(animationthird.name,animationthird),
  Vue.component(animationfourth.name,animationfourth),
  Vue.component(animationfifth.name,animationfifth),
  Vue.component(animationsixteen.name,animationsixteen),
  Vue.component(animationsevteen.name,animationsevteen),
  Vue.component(animationeighteen.name,animationeighteen),
  Vue.component(animationnineteen.name,animationnineteen),
  Vue.component(progressbarsecond.name,progressbarsecond),
  Vue.component(progressbarthird.name,progressbarthird),
  Vue.component(tablesecond.name,tablesecond),
  Vue.component(slideshow.name,slideshow),
  Vue.component(slideshow2.name,slideshow2),
  Vue.component(slideshow3.name,slideshow3),
  Vue.component(paging.name,paging)
  Vue.component(azthefrom.name,azthefrom)
  Vue.component(azprombox.name,azprombox)
  Vue.component(azpromboxsend.name,azpromboxsend)
  Vue.component(aznavigativg.name,aznavigativg)
  Vue.component(azbred.name,azbred)
  Vue.component(api.name,api)
};


export default AzoneUI
