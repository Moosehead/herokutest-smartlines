import moment from 'moment';

export default {
    name: 'time',
    callback: time => {
        return moment(time).format('h:mm a');
    }
};
