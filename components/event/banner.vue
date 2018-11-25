<template>
  <div class="hero-small">
    <div class="container">
      <div class="+uppercase +mg-b-xs +flex +justify-content-space-between">
        <div class="+flex +flex-direction-column">
          <h1 class="+flex +flex-direction-column">
            <span class="+mg-b-sm +text-base +text-grey-3">Comparing Book values for</span>
            <span class="+text-lg +text-white +mg-b-sm">{{ event.team_1.full_name }} vs {{ event.team_2.full_name }}</span>
          </h1>

          <div class="+flex">
            <span class="+text-sm +text-grey-3 +flex +align-items-center +mg-r-sm">
              <i class="material-icons +text-md +mg-r-xxs">calendar_today</i>
              <span>{{ event.date | date }}</span>
            </span>
            <span class="+text-sm +text-grey-3 +flex +align-items-center">
              <i class="material-icons +text-md +mg-r-xxs">alarm</i>
              <span>{{ event.starting_time }}</span>
            </span>
          </div>
        </div>

        <span class="+flex +align-self-flex-end +text-base +text-grey-3">Last updated: {{ event.created_at | date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        event: { type: Object, required: true }
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
