<template>
  <div class="event-team +flex">
    <div class="+flex-1 +pd-md +flex +flex-direction-column">
      <div class="+flex +align-items-center +flex">
        <team-badge class="+mg-r-xs" :team="team.name" :sport="team.league" />
        <span class="+text-overflow">{{ team.name }}</span>
      </div>
    </div>

    <div class="+flex +flex-1">
      <events-bet-pill
        class="+flex-1"
        :show-book-icon="false"
        :team-name="team.name"
        :bet="team.odds"
        :org="team.org"
        type="moneyline" />

      <events-bet-pill
        class="+flex-1"
        :show-book-icon="false"
        :team-name="team.name"
        :bet="team.odds"
        :org="team.org"
        type="spread" />

      <events-bet-pill
        class="+flex-1"
        :show-book-icon="false"
        :team-name="team.name"
        :team="team.team"
        :bet="team.odds"
        :org="team.org"
        type="total" />
    </div>
  </div>
</template>

<script>
import TeamBadge from '@/components/team-badge';
import EventsBetPill from '@/components/events/events-bet-pill';

export default {
    components: { TeamBadge, EventsBetPill },
    props: {
        team: { type: Object, required: true },
    },
    computed: {
        totalValue() {
            return this.team.team === 'team_1'
                ? this.team.odds.over_pref.value
                : this.team.odds.under_pref.value;
        },
        oddsWithOrg() {
            return {...this.team.odds, bestBook: this.team.org };
        }
    }
};
</script>
