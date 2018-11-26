import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 250 });
const grades = ['A', 'B', 'C', 'D'];

const books = ['bodog', 'Sports Interaction', 'Pinnacle', 'William Hill'];
const odds = books.map(book => {
    return {
        org: book,
        created_at: Date.now(),
        team_1: {
            spread: {
                overUnder: 'O',
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.95',
                payoutDirection: '-',
                spread: Math.floor(Math.random() * 12 + 1),
                spreadDirection: '+'
            },
            moneyline: {
                overUnder: null,
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.91',
                payoutDirection: '+',
                spread: null
            },
            total: {
                overUnder: 'O',
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.91',
                payoutDirection: '-',
                spread: Math.floor(Math.random() * 12 + 1),
                spreadDirection: '+'
            }
        },
        team_2: {
            spread: {
                overUnder: 'O',
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.87',
                payoutDirection: '-',
                spread: Math.floor(Math.random() * 12 + 1),
                spreadDirection: '+'
            },
            moneyline: {
                overUnder: null,
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.91',
                payoutDirection: '+',
                spread: null
            },
            total: {
                overUnder: 'O',
                grade: grades[Math.floor(Math.random() * grades.length)],
                created_at: Date.now(),
                payout: '1.91',
                payoutDirection: '-',
                spread: Math.floor(Math.random() * 12 + 1),
                spreadDirection: '+'
            }
        },
    };
});

mock.onGet('/smartlines').reply(200, [
    {
        category: 'NHL',
        team: 'Toronto Maple Leafs',
        created_at: Date.now(),
        book: 'Bodog',
        value: {
            overUnder: 'O',
            payout: 105,
            payoutDirection: '-',
            spreadDirection: '-',
            spread: 1.5
        },
        type: 'Total',
        grade: 'A',
        logo: 'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/hockey/nhl/toronto-maple-leafs.png',
        slug: 'toronto-maple-leafs-vs-montreal-canadiens',
    },
    {
        category: 'NHL',
        team: 'Calgary Flames',
        created_at: Date.now(),
        book: 'Pinnacle',
        value: {
            overUnder: 'U',
            payout: 155,
            payoutDirection: '-',
            spreadDirection: '-',
            spread: 1.5
        },
        type: 'Spread',
        grade: 'A',
        logo: 'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/calgary-flames.png',
        slug: 'calgary-flames-vs-buffalo-sabres'
    },
    {
        category: 'NHL',
        team: 'Washington Capitals',
        created_at: Date.now(),
        book: 'Sports Interaction',
        value: {
            overUnder: null,
            payout: 180,
            payoutDirection: '+',
            spreadDirection: '+',
            spread: null
        },
        type: 'Moneyline',
        grade: 'B',
        logo: 'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/washington-capitals.png',
        slug: 'washington-capitals-vs-boston-bruins',
    },
    {
        category: 'NFL',
        team: 'Atlanta Falcons',
        created_at: Date.now(),
        book: 'Sports Interaction',
        value: {
            overUnder: null,
            payout: 120,
            payoutDirection: '+',
            spreadDirection: '+',
            spread: 6.5
        },
        type: 'Spread',
        grade: 'A',
        logo: 'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/atlanta-falcons.png',
        slug: 'atlanta-falcons-vs-philadelphia-eagles',
    }
]);

mock.onGet('/events').reply(200, [
    {
        category: 'NHL',
        events: [
            {
                arena: 'Scotiabank Arena',
                id: '12345A',
                slug: 'toronto-maple-leafs-vs-montreal-canadiens',
                location: 'Toronto, ON',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '7:00 PM ET',
                odds,
                team_1: {
                    full_name: 'Toronto Maple Leafs',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Toronto',
                    team_name: 'Maple Leafs',
                    name_short: 'TOR',
                    record: '40-5-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/hockey/nhl/toronto-maple-leafs.png',
                    division_rank: 1,
                    power_rank: 1,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                },
                team_2: {
                    full_name: 'Montreal Canadians',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'Toronto',
                    team_name: 'Canadiens',
                    name_short: 'MTL',
                    record: '5-40-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/hockey/nhl/montreal-canadiens.png',
                    division_rank: 10,
                    power_rank: 13,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                }
            },
            {
                arena: 'Scotiabank Saddledome',
                id: '12345B',
                slug: 'calgary-flames-vs-buffalo-sabres',
                location: 'Calgary, AL',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '7:30 PM ET',
                odds,
                team_1: {
                    full_name: 'Calgary Flames',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Calgary',
                    team_name: 'Flames',
                    name_short: 'CAL',
                    record: '40-5-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/calgary-flames.png',
                    division_rank: 5,
                    power_rank: 4,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                },
                team_2: {
                    full_name: 'Buffalo Sabres',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'Buffalo',
                    team_name: 'Sabres',
                    name_short: 'BUF',
                    record: '5-40-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/buffalo-sabres.png',
                    division_rank: 12,
                    power_rank: 22,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                }
            },
            {
                arena: 'Capital One Arena',
                id: '12345C',
                slug: 'washington-capitals-vs-boston-bruins',
                location: 'Washington, DC',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '10:00 PM ET',
                odds,
                team_1: {
                    full_name: 'Washington Capitals',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Washington',
                    team_name: 'Capitals',
                    name_short: 'WAS',
                    record: '24-5-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/washington-capitals.png',
                    division_rank: 3,
                    power_rank: 4,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                },
                team_2: {
                    full_name: 'Boston Bruins',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'Boston',
                    team_name: 'Bruins',
                    name_short: 'BOS',
                    record: '30-2-11',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/hockey/nhl/boston-bruins.png',
                    division_rank: 6,
                    power_rank: 15,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                }
            },
        ]
    },
    {
        category: 'MLB',
        events: [
            {
                arena: 'Rogers Center',
                id: '12345F',
                slug: 'toronto-blue-jays-vs-new-york-yankees',
                location: 'Toronto, ON',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '7:00 PM ET',
                odds,
                team_1: {
                    full_name: 'Toronto Blue Jays',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Toronto',
                    team_name: 'Blue Jays',
                    name_short: 'TOR',
                    record: '40-5-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/baseball/mlb/toronto-blue-jays.png',
                    division_rank: 1,
                    power_rank: 1,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                },
                team_2: {
                    full_name: 'New York Yankees',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'New York',
                    team_name: 'Yankees',
                    name_short: 'NYY',
                    record: '5-40-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/90x90/baseball/mlb/new-york-yankees.png',
                    division_rank: 8,
                    power_rank: 18,
                    division: 'Atlantic',
                    last_10: '8-1-0'
                }
            }
        ]
    },
    {
        category: 'NFL',
        events: [
            {
                arena: 'Lincoln Financial Field',
                id: '12345E',
                slug: 'atlanta-falcons-vs-philadelphia-eagles',
                location: 'Philadelphia, Pennsylvania',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '7:00 PM ET',
                odds,
                team_1: {
                    full_name: 'Atlanta Falcons',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'Atlanta',
                    team_name: 'Falcons',
                    name_short: 'ATL',
                    record: '1-0-0',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/atlanta-falcons.png',
                    division_rank: 1,
                    power_rank: 1,
                    division: 'Atlantic',
                    last_10: '1-0-0'
                },
                team_2: {
                    full_name: 'Philadelphia Eagles',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Philadelphia',
                    team_name: 'Eagles',
                    name_short: 'PHL',
                    record: '0-0-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/philadelphia-eagles.png',
                    division_rank: 8,
                    power_rank: 18,
                    division: 'Atlantic',
                    last_10: '0-0-1'
                }
            },
            {
                arena: 'M&T Bank Stadium',
                id: '12345G',
                slug: 'buffalo-bills-vs-baltimore-ravens',
                location: 'Baltimore, Maryland',
                created_at: Date.now(),
                date: new Date(+new Date() - Math.floor(Math.random() * 10000000000)),
                starting_time: '7:00 PM ET',
                odds,
                team_1: {
                    full_name: 'Buffalo Bills',
                    is_home_team: false,
                    created_at: Date.now(),
                    city: 'Buffalo',
                    team_name: 'Bills',
                    name_short: 'BUF',
                    record: '1-0-0',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/buffalo-bills.png',
                    division_rank: 5,
                    power_rank: 4,
                    division: 'Atlantic',
                    last_10: '0-0-1'
                },
                team_2: {
                    full_name: 'Baltimore Ravens',
                    is_home_team: true,
                    created_at: Date.now(),
                    city: 'Baltimore',
                    team_name: 'Ravens',
                    name_short: 'BAL',
                    record: '0-0-1',
                    logo:
                        'https://images.rogersdigitalmedia.com/www.sportsnet.ca/team_logos/200x200/football/nfl/baltimore-ravens.png',
                    division_rank: 2,
                    power_rank: 4,
                    division: 'Atlantic',
                    last_10: '1-0-0'
                }
            }
        ]
    }
]);
