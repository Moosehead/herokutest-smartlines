<template>
  <div class="event-table +bg-white">
    <event-table-row v-for="(book, index) in odds" :key="index" :book="book"/>
  </div>
</template>

<script>
import EventTableRow from '@/components/event/event-table-row';

export default {
    components: { EventTableRow },
    props: {
        event: { type: Object, required: true },
    },
    computed: {
        odds() {
            return this.event.odds.map(odds => {
                return {
                    odds,
                    league: this.event.league,
                    team_name1: this.event.team_name1,
                    team_name2: this.event.team_name2
                };
            });
        }
    }
};
</script>
