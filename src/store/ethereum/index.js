import { Web3 } from 'web3'
const provider = window['ethereum'] || window.web3.currentProvider

const ethereum = {
  namespaced: true,
  state: {
    provider,
    hasProvider: typeof provider !== 'undefined',
    account: null,
    web3: null
  },
  mutations: {
    setAccount(state, account) {
      state.account = account
    },
    setWeb3(state, web3) {
      state.web3 = web3
    }
  },
  actions: {
    async login({ commit, state }) {
      if (state.hasProvider) {
        const accounts = await state.provider.enable()
        console.log(state.provider)
        commit('setAccount', accounts[0])
        commit('setWeb3', new Web3(state.provider))
      }
    }
  },
  getters: {}
}

export { ethereum }
