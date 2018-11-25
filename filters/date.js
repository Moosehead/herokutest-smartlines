import moment from 'moment';

export default {
    name: 'date',
    callback: date => {
        return moment(date).format('M/D/YY');
    }
};
