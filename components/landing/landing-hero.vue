<template>
  <section class="hero +flex +align-items-center">
    <div class="container">
      <div class="grid">
        <div class="col-8 +mg-r-xxl +flex +justify-content-center +flex-direction-column">
          <h1 class="hero__lead +text-bold">Showing Sports Bettors the Best Odds, All the Time</h1>
          <p class="hero__sub-lead +text-lg +text-grey-3 +text-regular">Our mission is to connect users with the best odds.</p>
          <search/>
          <router-link class="hero__view-more +mg-t-xl +text-grey-1 +uppercase +text-bold +text-base +flex +align-self-flex-start +align-items-center" :to="{ name: 'events' }">
            <span class="+mg-r-md">View all events</span>
            <i class="material-icons hero__arrow">
              arrow_forward
            </i>
          </router-link>
        </div>
        <div class="col-4">
          <best-bets :smartlines="smartlines"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from '@/components/search';
import BestBets from '@/components/bets/best-bets';

export default {
    components: { Search, BestBets },
    data: () => ({ smartlines: [] })
};
</script>

<style lang="scss">
@include component(hero) {
    background-color: $primary;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='82.7' stroke-opacity='0.09' %3E%3Ccircle fill='%230094d2' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23188ac9' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%232481bf' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%232b77b5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23316eab' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%233565a1' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23375c96' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%2339538b' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23394a81' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23394176' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%2338396b' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23363160' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23342956' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2331214b' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%232d1941' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23291237' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23250a2d' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    min-height: 85vh;
    padding: $nav-height 0;

    @include part(lead) {
        color: $white;
    }

    @include part(arrow) {
        color: $white;
        transition: all 150ms ease;
    }

    @include part(view-more) {
        &:hover {
            .hero__arrow {
                color: $green-4;
                transform: translateX(10px);
            }
        }
    }

    @include part(sub-lead) {
        color: $white;
    }
}
</style>
