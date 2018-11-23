export const state = () => ({
    dailyBankroll: 0
});

export const getters = {
    dailyBankroll: state => state.dailyBankroll
};

export const actions = {
    updateDailyBankroll({ commit }, val) {
        commit('setDailyBankroll', val);
    }
};

export const mutations = {
    setDailyBankroll(state, val) {
        state.dailyBankroll = val;
    }
};
