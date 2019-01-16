const urls = [
    {
        name: 'pinnacle',
        url: 'https://www.pinnacle.com/en/'
    },
    {
        name: 'sports-interaction',
        url: 'https://www.sportsinteraction.com/'
    },
    {
        name: 'william-hill',
        url: 'http://sports.williamhill.com/bet/en-ca'
    },
    {
        name: 'bodog',
        url: 'https://www.bodog.eu/'
    }
];

export default {
    name: 'url',
    callback: url => {
        let org = url
            .toLowerCase()
            .split(' ')
            .join('-');

        return urls.find(url => url.name === org).url;
    }
};
