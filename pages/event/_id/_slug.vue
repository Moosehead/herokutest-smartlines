<template>
  <div class="event">
    <banner :event="event"/>
    <bread-crumbs class="+mg-b-xl"/>

    <div class="container +mg-t-lg +mg-b-xl">
      <div class="grid">
        <div class="col-9">
          <event-table-header/>
          <event-table :event="event"/>
        </div>

        <div class="col-3">
          <div class="+sticky +pin-top-md">
            <bet-example class="+mg-b-md" :payout="calcData" @clear-payout="calcData = null"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/navigation/breadcrumbs';
import Banner from '@/components/event/banner';
import EventTableHeader from '@/components/event/event-table-header';
import EventTable from '@/components/event/event-table';
import BetExample from '@/components/bets/bet-example';

export default {
    components: { BreadCrumbs, EventTableHeader, EventTable, Banner, BetExample },
    transition: { name: 'page-transition', mode: 'out-in' },
    data: () => ({
        event: null,
        calcData: null,
    }),
    async asyncData({ params, $axios }) {
        const event = await $axios.get(`events/details/${params.id}`);
        return { event: event.data };
    }
};
</script>

<style lang="scss" scoped>
@include component(event) {
    padding-top: $nav-height;

    @include part(books) {
        background: $white;
        border-radius: $xxs-unit;
        box-shadow: $elevation-4;
        overflow: hidden;
    }
}
</style>
