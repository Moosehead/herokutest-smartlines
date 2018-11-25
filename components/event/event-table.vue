<template>
  <div class="event-table">
    <div class="grid +align-items-center" v-for="(book, index) in odds" :key="index">
      <div class="col-2 +pd-md">
        <img class="+height-24px" :src="`/book-logos/${bookLogo(book.org)}.png`" :alt="book.org">
      </div>
      <div class="col-2 +pd-md +flex +flex-direction-column">
        <span class="+height-38px +flex +align-items-center +mg-b-xs">
          {{ teams[0] }}
        </span>
        <span class="+height-38px +flex +align-items-center">
          {{ teams[1] }}
        </span>
      </div>

      <event-table-column class="col-2" :odds="{ team_1: book.team_1.moneyline, team_2: book.team_2.moneyline }"/>
      <event-table-column class="col-2" :odds="{ team_1: book.team_1.spread, team_2: book.team_2.spread }"/>
      <event-table-column class="col-2" :odds="{ team_1: book.team_1.total, team_2: book.team_2.moneyline }"/>

      <div class="col-2 +pd-md">
        <v-btn label="Place Bet" button-style="success">
          <i slot="icon" class="material-icons +mg-l-xxs">arrow_forward</i>
        </v-btn>
      </div>

      <div class="col-12 +pd-l-md +pd-r-md +pd-b-md +border-b-grey-2">
        <div class="grid +border-t-grey-2 +pd-t-md">
          <span class="col-4 +text-sm +text-grey-5 +uppercase">Last Updated: {{ book.created_at | date }}</span>
          <div class="col-4 +text-sm +text-grey-5 +uppercase"/>
          <div class="col-4 +text-right">
            <router-link to="/" class="text-link +text-sm +uppercase">Learn how to use {{ book.org }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventTableColumn from '@/components/event/event-table-column';

export default {
    components: { EventTableColumn },
    props: {
        odds: { type: Array, required: true },
        teams: { type: Array, required: true }
    },
    methods: {
        bookLogo(logo) {
            return logo
                .toLowerCase()
                .split(' ')
                .join('-');
        }
    }
};
</script>

<style lang="scss">
@include component(event-table) {
    > .grid {
        &:not(:last-of-type) {
            border-bottom: $grey-2;
        }
    }
}
</style>
