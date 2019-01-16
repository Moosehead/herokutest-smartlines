export default {
    name: 'bet',
    callback: bet => {
        return (Math.round(bet * 100) / 100).toFixed(2);
    }
};
