<template>
  <div class="event">
    <banner :event="event"/>
    <bread-crumbs class="+mg-b-xl"/>

    <div class="container +mg-b-xl">
      <div class="event__books">
        <event-table-header/>
        <event-table :odds="event.odds" :teams="[event.team_1.full_name, event.team_2.full_name]"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BreadCrumbs from '@/components/navigation/breadcrumbs';
import Banner from '@/components/event/banner';
import EventTableHeader from '@/components/event/event-table-header';
import EventTable from '@/components/event/event-table';

export default {
    components: { BreadCrumbs, EventTableHeader, EventTable, Banner },
    transition: {
        name: 'page-transition',
        mode: 'out-in'
    },
    data: () => ({
        event: null
    }),
    async asyncData({ params }) {
        const events = await axios.get('/events');
        const category = events.data.find(category => category.category === params.category);
        return { event: category.events.find(event => event.slug === params.slug) };
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
