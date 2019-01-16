<template>
  <div class="events">
    <events-filters class="+mg-t-lg"/>

    <div class="container +mg-t-lg +mg-b-xl">
      <div class="grid">
        <div class="col-9">
          <category-card v-for="(events, index) in categories" :category="index" :key="index" :events="events"/>
        </div>

        <div class="col-3">
          <div class="+sticky +pin-top-md">
            <bet-example class="+mg-b-md" :payout="calcData" @clear-payout="calcData = null"/>
            <best-bets small :smartlines="smartlines"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groupBy } from 'lodash';
import CategoryCard from '@/components/category/category-card';
import BetExample from '@/components/bets/bet-example';
import EventsFilters from '@/components/events/events-filters';
import BestBets from '@/components/bets/best-bets';

export default {
    components: { EventsFilters, BetExample, BestBets, CategoryCard },
    transition: { name: 'page-transition', mode: 'out-in' },
    data: () => ({
        events: null,
        calcData: null,
        smartlines: []
    }),
    asyncData: async ({ $axios }) => {
        const events = await $axios.$get('events/best');
        return { events: events };
    },
    computed: {
        categories() {
            return groupBy(this.events, 'league');
        },
    }
};
</script>

<style lang="scss" scoped>
@include component(events) {
    padding-top: $nav-height;
}
</style>
