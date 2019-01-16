<template>
  <div class="grid +align-items-center">
    <div class="col-6 +flex +flex-direction-column">
      <div class="+flex +align-items-center +flex">
        <team-badge class="+mg-r-xs" :team="team.name" :sport="team.league" />
        <span class="+text-overflow">{{ team.name }}</span>
      </div>
    </div>

    <events-bet-pill
      class="col-2"
      :team-name="team.name"
      :org="team.odds['moneyline'].best_book"
      :bet="team.odds"
      type="moneyline" />

    <events-bet-pill
      class="col-2"
      :team-name="team.name"
      :org="team.odds['spread'].best_book"
      :bet="team.odds"
      type="spread" />

    <events-bet-pill
      class="col-2"
      :team-name="team.name"
      :org="team.odds['over_pref'].best_book"
      :team="team.team"
      :bet="team.odds"
      type="total" />
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
};
</script>
