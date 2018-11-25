<template>
  <div class="col-2">
    <div class="+height-38px +flex +align-items-center +mg-b-sm +flex">
      <events-bet-pill :bet="teamData('team_1')"/>
    </div>

    <div class="+height-38px +flex +align-items-center +flex">
      <events-bet-pill :bet="teamData('team_2')"/>
    </div>
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
    methods: {
        teamData(team) {
            return {
                value: this.bet[team][this.type],
                team: this.teams[0],
                org: this.bet.org,
                type: this.type
            };
        }
    }
};
</script>
