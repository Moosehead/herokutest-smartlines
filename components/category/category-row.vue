<template>
  <div class="category-card__table-row +pd-sm">
    <category-team v-for="(team, index) in odds" :team="team" :key="index"/>
    <category-card-footer class="+mg-t-sm" :event="event"/>
  </div>
</template>

<script>
import CategoryTeam from '@/components/category/category-team';
import CategoryCardFooter from '@/components/category/category-card-footer';

export default {
    components: { CategoryTeam, CategoryCardFooter },
    props: {
        event: { type: Object, required: true },
    },
    computed: {
        odds() {
            const teams = ['team_1', 'team_2'];

            return teams.map((team, index) => {
                return {
                    name: this.event[`team_name${index + 1}`],
                    team,
                    odds: { ...this.event[team], ...this.event.total },
                    league: this.event.league,
                };
            });
        }
    }
};
</script>
