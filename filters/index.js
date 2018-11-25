import dateFilter from './date';

export default {
    install(Vue) {
        [dateFilter].forEach(filter => {
            Vue.filter(filter.name, filter.callback);
        });
    }
};
