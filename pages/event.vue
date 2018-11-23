<template>
  <div class="event">
    <div class="container +text-center +mg-t-lg" v-if="!event">
      <loader border-width="4" size="36"/>
      <h2 class="+uppercase +text-md +mg-t-md">Loading Event</h2>
    </div>

    <template v-else>
      <div class="event__hero +flex +flex-direction-column">
        <div class="event__logos">
          <div class="+mg-r-xxl +text-center +flex +flex-direction-column +align-items-center">
            <div class="event__logo +mg-b-md">
              <img :src="event.team_1.logo" :alt="event.team_1.full_name">
            </div>
            <h2 class="+uppercase +text-md +text-bold">{{ event.team_1.city }}</h2>
            <span class="+uppercase +text-grey-5 +block +text-md +mg-b-xs">{{ event.team_1.team_name }}</span>
            <span class="+uppercase +text-grey-5 +text-base">{{ event.team_1.record }}</span>
          </div>
          <div class="+text-center +flex +flex-direction-column +align-items-center">
            <div class="event__logo +mg-b-md">
              <img :src="event.team_2.logo" :alt="event.team_2.full_name">
            </div>
            <h2 class="+uppercase +text-md +text-bold">{{ event.team_2.city }}</h2>
            <span class="+uppercase +text-grey-5 +block +text-md +mg-b-xs">{{ event.team_2.team_name }}</span>
            <span class="+uppercase +text-grey-5 +text-base">{{ event.team_2.record }}</span>
          </div>
        </div>
        <div class="+mg-t-lg +flex +flex-direction-column +align-items-center +border-t-grey-4 +pd-t-sm">
          <span class="+uppercase">{{ date(event.date) }}</span>
          <span class="+uppercase +text-base +text-grey-5">{{ event.starting_time }}</span>
        </div>
      </div>

      <div class="container +mg-b-xl">
        <div class="event__books">
          <table class="event__table">
            <tr class="events__table-header">
              <th class="+uppercase +text-sm +text-grey-6">Book</th>
              <th class="+uppercase +text-sm +text-grey-6">Teams</th>
              <th class="+uppercase +text-sm +text-grey-6">
                <div class="+flex +align-items-center">
                  Moneyline
                  <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                </div>
              </th>
              <th class="+uppercase +text-sm +text-grey-6">
                <div class="+flex +align-items-center">
                  Runline
                  <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                </div>
              </th>
              <th class="+uppercase +text-sm +text-grey-6">
                <div class="+flex +align-items-center">
                  Total
                  <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
                </div>
              </th>
              <th class="+uppercase +text-sm +text-grey-6">
                &nbsp;
              </th>
            </tr>
            <tr class="event__table-row" v-for="(row, index) in event.odds" :key="index">
              <td>
                <img class="event__book-logo" :src="`/book-logos/${bookLogo(row.org)}.png`" :alt="row.org">
              </td>
              <td>
                <div class="event__odds-data +flex +flex-direction-column">
                  <span>{{ teamOneName }}</span>
                  <span>{{ teamTwoName }}</span>
                </div>
              </td>
              <td>
                <div class="event__odds-data +flex +flex-direction-column">
                  <span class="+text-md">{{ event.odds[0].team_1.moneyline.direction }}{{ event.odds[0].team_1.moneyline.value }}</span>
                  <span class="+text-md">{{ event.odds[0].team_2.moneyline.direction }}{{ event.odds[0].team_2.moneyline.value }}</span>
                </div>
              </td>
              <td>
                <div class="event__odds-data +flex +flex-direction-column">
                  <span class="+text-md">{{ event.odds[0].team_1.true_odds.direction }}{{ event.odds[0].team_1.true_odds.value }}</span>
                  <span class="+text-md">{{ event.odds[0].team_2.true_odds.direction }}{{ event.odds[0].team_2.true_odds.value }}</span>
                </div>
              </td>
              <td>
                <div class="event__odds-data +flex +flex-direction-column">
                  <span class="+text-md">{{ event.odds[0].team_1.spread.direction }}{{ event.odds[0].team_1.spread.value }}</span>
                  <span class="+text-md">{{ event.odds[0].team_2.spread.direction }}{{ event.odds[0].team_2.spread.value }}</span>
                </div>
              </td>
              <td class="+text-right">
                <a href="https://www.bodog.eu" target="_blank" class="+pd-md +bg-green-5 +radius-xs +inline-flex +align-items-center">
                  NEXT
                  <i slot="icon" class="material-icons +mg-l-sm">arrow_forward</i>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import axios from 'axios';
import Loader from '@/components/loader';
import InfoBadge from '@/components/info-badge';

export default {
    components: { Loader, InfoBadge },
    data: () => ({ event: null }),
    computed: {
        ...mapGetters(['dailyBankroll']),
        teamOneName() {
            return this.event.team_1.team_name;
        },
        teamTwoName() {
            return this.event.team_2.team_name;
        }
    },
    async created() {
        const events = await axios.get('/events');
        const category = await events.data.find(category => category.category === this.$route.params.category);
        this.event = category.events.find(event => event.slug === this.$route.params.slug);
    },
    methods: {
        date(date) {
            return moment(date).format('MMM Do, YY');
        },
        bookLogo(logo) {
            return logo
                .toLowerCase()
                .split(' ')
                .join('-');
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(event) {
    @include part(arrow) {
        fill: $green-5;
        max-width: 20px;
    }

    @include part(book-logo) {
        height: 20px;
    }

    @include part(grade) {
        align-items: center;
        background: linear-gradient($grey-3, lighten($grey-5, 10%));
        border-radius: 50%;
        color: $grey-9;
        display: flex;
        font-size: $base-unit;
        height: 25px;
        justify-content: center;
        line-height: 1;
        width: 25px;

        @include option(a) {
            background: linear-gradient($green-4, lighten($green-6, 10%));
        }

        @include option(b) {
            background: linear-gradient($green-2, lighten($green-4, 10%));
        }

        @include option(c) {
            background: linear-gradient($red-2, lighten($red-4, 10%));
        }

        @include option(d) {
            background: linear-gradient($red-4, lighten($red-6, 10%));
        }
    }

    @include part(odds-data) {
        > span {
            color: $grey-6;
            display: block;

            &:first-child {
                margin-bottom: $sm-unit;
            }
        }
    }

    @include part(table) {
        border-collapse: collapse;
        width: 100%;

        td,
        th {
            padding: $md-unit;
            text-align: left;
        }
    }

    @include part(table-header) {
        border-bottom: 2px solid $grey-3;
    }

    @include part(table-row) {
        &:not(:last-of-type) {
            border-bottom: 1px solid $grey-2;
        }

        &:hover {
            background: $grey-1;
        }
    }

    @include part(books) {
        background: $white;
        border-radius: $xs-unit;
        box-shadow: $elevation-4;
        overflow: hidden;
    }

    @include part(hero) {
        align-items: center;
        background-color: $grey-3;
        display: flex;
        justify-content: center;
        margin-bottom: $xl-unit;
        padding: $lg-unit 0;
    }

    @include part(logos) {
        display: flex;
    }

    @include part(logo) {
        background: $white;
        border: 1px solid $grey-2;
        border-radius: 50%;
        box-shadow: $elevation-4;
        height: 100px;
        overflow: hidden;
        width: 100px;

        > img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }
}
</style>
