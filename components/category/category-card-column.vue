<template>
  <div class="col-2">
    <events-bet-pill :bet="bet"/>
  </div>
</template>

<script>
import EventsBetPill from '@/components/events/events-bet-pill';

export default {
    components: { EventsBetPill },
    props: {
        bet: { type: Object, required: true },
        type: { type: String, required: true },
        teams: { type: Array, required: true }
    },
    computed: {
        bets() {
            const types = ['over_pref', 'under_pref'];
            const teams = ['team_1', 'team_2'];

            if(this.type === 'total') {
                return types.map(type => {
                    return {
                        team: this.teams[types.indexOf(type)],
                        value: this.bet.total[type],
                        org: this.bet.org,
                        draw: this.bet.draw,
                        type: this.type
                    };
                });
            }

            return teams.map(team => {
                return {
                    team: this.teams[teams.indexOf(team)],
                    value: this.bet[team][this.type],
                    org: this.bet.org,
                    draw: this.bet.draw,
                    handicap: this.bet[team].handicap || null,
                    type: this.type
                };
            });
        }
    }
};
</script>
