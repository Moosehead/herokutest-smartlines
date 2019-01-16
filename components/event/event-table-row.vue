<template>
  <div class="event-table-row grid">
    <div class="col-2 +pd-md">
      <img class="+height-24px" :src="`/book-logos/${book.odds.org.toLowerCase().split(' ').join('-')}.png`" alt="Book logo">
    </div>

    <div class="col-10">
      <event-team v-for="(team, index) in odds" :team="team" :key="index"/>
    </div>
  </div>
</template>

<script>
import EventTeam from '@/components/event/event-team';

export default {
    components: { EventTeam },
    props: {
        book: { type: Object, required: true }
    },
    computed: {
        odds() {
            const teams = ['team_1', 'team_2'];

            return teams.map((team, index) => {
                return {
                    name: this.book[`team_name${index + 1}`],
                    team,
                    org: this.book.odds.org,
                    odds: { ...this.book.odds[team], ...this.book.odds.total },
                    league: this.book.league,
                };
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(event-table-row) {
    padding: $sm-unit;

    &:not(:last-of-type) {
        border-bottom: 1px solid $grey-2;
    }
}
</style>
