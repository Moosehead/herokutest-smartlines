<template>
  <div class="hero-small">
    <div class="container">
      <div class="+uppercase +mg-b-xxl +pd-t-xl +flex +justify-content-center">
        <h1 class="+flex +justify-content-center">
          <div class="+flex +text-grey-3 +align-items-center">
            <div class="+flex +flex-direction-column +align-items-center +width-14rem">
              <team-badge class="+mg-b-md +elevation-5 +width-100px +height-100px" :team="event.team_name1" :sport="event.league" />
              <span class="+text-base +text-center +text-overflow">{{ event.team_name1 }}</span>
            </div>
            <span class="+mg-l-sm +mg-r-sm +text-base">VS</span>
            <div class="+flex +flex-direction-column +align-items-center +width-14rem">
              <team-badge class="+mg-b-md +elevation-5 +width-100px +height-100px" :team="event.team_name2" :sport="event.league" />
              <span class="+text-base +text-center +text-overflow">{{ event.team_name2 }}</span>
            </div>
          </div>
        </h1>
      </div>

      <div class="+flex +justify-content-space-between">
        <div class="+flex">
          <span class="+text-grey-3 +flex +align-items-center +mg-r-sm">
            <i class="material-icons +text-md +mg-r-xxs">calendar_today</i>
            <span>{{ gameDate }}</span>
          </span>
          <span class="+text-grey-3 +flex +align-items-center">
            <i class="material-icons +text-md +mg-r-xxs">alarm</i>
            <span>{{ event.starting_time | time }}</span>
          </span>
        </div>

        <span class="+flex +uppercase +align-self-flex-end +text-base +text-grey-3">Last updated: {{ lastUpdated }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import TeamBadge from '@/components/team-badge';

export default {
    components: { TeamBadge },
    props: {
        event: { type: Object, required: true }
    },
    computed: {
        lastUpdated() {
            return moment(this.event.last_updated).format('MMMM Do YYYY, h:mm:ss a');
        },
        gameDate() {
            return moment(this.event.starting_time).format('MMMM Do YYYY');
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(hero-small) {
    background-color: $primary;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='82.7' stroke-opacity='0.09' %3E%3Ccircle fill='%230094d2' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23188ac9' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%232481bf' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%232b77b5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23316eab' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%233565a1' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23375c96' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2339538b' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23394a81' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23394176' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2338396b' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23363160' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23342956' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2331214b' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%232d1941' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23291237' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23250a2d' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    padding: $xxl-unit 0;
}
</style>
