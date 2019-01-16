import dateFilter from './date';
import timeFilter from './time';
import urls from './urls';
import bet from './bet';

export default {
    install(Vue) {
        [dateFilter, timeFilter, urls, bet].forEach(filter => {
            Vue.filter(filter.name, filter.callback);
        });
    }
};
