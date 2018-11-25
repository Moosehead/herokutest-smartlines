<template>
  <div class="events">

    <events-filters class="+mg-t-lg"/>

    <div class="container +mg-t-lg +mg-b-xl">
      <div class="grid">
        <div class="col-9">
          <category-card v-for="(category, index) in events" :key="index" :category="category"/>
        </div>

        <div class="col-3">
          <div class="+sticky +pin-top-md">
            <bet-example class="+mg-b-md" :payout="calcData" @clear-payout="calcData = null"/>
            <!-- <best-bets small :smartlines="smartlines"/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CategoryCard from '@/components/category/category-card';
import BetExample from '@/components/bets/bet-example';
import EventsFilters from '@/components/events/events-filters';
import BestBets from '@/components/bets/best-bets';

export default {
    components: { EventsFilters, BetExample, BestBets, CategoryCard },
    transition: {
        name: 'page-transition',
        mode: 'out-in'
    },
    data: () => ({
        events: null,
        calcData: null,
        smartlines: []
    }),
    asyncData: async () => {
        const events = await axios.get('/events');
        const smartlines = await axios.get('/smartlines');
        return { events: events.data, smartlines: smartlines.data };
    },
    methods: {
        checkPayout(event, type, team) {
            this.calcData = {
                team: event[team].full_name,
                type,
                grade: event.odds[0][team][type].grade,
                direction: event.odds[0][team][type].direction,
                org: event.odds[0].org,
                val: event.odds[0][team][type].value
            };
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(events) {
    padding-top: $nav-height;
}
</style>
