export const state = () => ({
    bet: null
});

export const mutations = {
    setBet(state, val) {
        state.bet = val;
    }
};
