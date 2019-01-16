export const state = () => ({
    dailyBankroll: 0
});

export const mutations = {
    setDailyBankroll(state, val) {
        state.dailyBankroll = val;
    }
};
