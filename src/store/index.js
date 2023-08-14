import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import getters from './getters'
import { importVuexModules } from '@/utils/glob-import'

Vue.use(Vuex)

export default new Store({
  getters,
  modules: importVuexModules()
})
