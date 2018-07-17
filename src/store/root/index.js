import createEasyFirestore from 'vuex-easy-firestore'
import createEasyAccess from 'vuex-easy-access'
import easyAccessConf from '@config/vuexEasyAccess'
// store root
import initialState from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// modules
import cart from '@modules/cart'
import user from '@modules/user'
import keypad from '@modules/keypad'
import animate from '@modules/animate'
import wallet from '@modules/wallet'
import ethEvents from '@modules/ethEvents'
import conversion from '@modules/conversion'
import modals from '@modules/modals'
// import _template from '@modules/_template'
// easy firestore modules
import menulist from '@modules/menulist'
import settings from '@modules/settings'
import history from '@modules/history'
const easyFirestores = createEasyFirestore([menulist, settings, history])
const easyAccess = createEasyAccess(easyAccessConf)

export default function () {
  return {
    state: initialState(),
    getters,
    mutations,
    actions,
    modules: {
      cart,
      user,
      keypad,
      animate,
      wallet,
      ethEvents,
      conversion,
      modals,
      // _template
      // 'menulist' and 'settings' are added as Vuex Easy Firestore!
    },
    plugins: [easyFirestores, easyAccess],
  }
}