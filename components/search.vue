<template>
  <div class="search +elevation-5" :class="{ '--active': results }">
    <i class="material-icons search__icon">search</i>
    <input
      class="search__input"
      aria-labelledby="search"
      type="search"
      placeholder="Search for an events by name, sport, date..."
      v-model="search">

    <loader border-width="4" class="search__loader" v-if="loading"/>

    <transition name="fade" mode="out-in">
      <div class="search__dropdown" v-if="results" v-on-clickaway="clearResults">
        <div v-if="!results.length" class="+pd-lg +text-center">
          <span>No results found for <span class="+text-primary">{{ search }}</span></span>
        </div>

        <template>
          <div class="search__header" v-if="results.length">
            <span class="+uppercase +text-grey-6 +text-sm">Match</span>
            <span class="+uppercase +text-grey-6 +text-sm">Money Line</span>
            <span class="+uppercase +text-grey-6 +text-sm">True Odds</span>
          </div>

          <div v-for="(category, index) in results" :key="index" class="+mg-b-md">
            <span class="search__category +uppercase +text-sm">{{ category.category }}</span>
            <router-link v-for="(event, index) in category.events" :key="index" :to="{ name: 'event-category-slug', params: { category: category.category, slug: event.slug } }">
              <div class="search__row">
                <div class="search__row-team +flex +align-items-center +justify-content-space-between">
                  <span class="+flex +align-items-center">
                    <img class="search__img +mg-r-sm" :src="event.team1.logo" :alt="event.team1.full_name">
                    <span class="+uppercase +text-grey-6 +text-sm">{{ event.team1.full_name }}</span>
                  </span>
                  <span class="+uppercase +text-grey-6 +text-sm">{{ event.odds[0].team_1.moneyline }}</span>
                  <span class="+uppercase +text-grey-6 +text-sm">{{ event.odds[0].team_1.total }}</span>
                </div>
                <div class="search__row-team +flex +align-items-center +justify-content-space-between">
                  <span class="+flex +align-items-center">
                    <img class="search__img +mg-r-sm" :src="event.team2.logo" :alt="event.team2.full_name">
                    <span class="+uppercase +text-grey-6 +text-sm">{{ event.team2.full_name }}</span>
                  </span>
                  <span class="+uppercase +text-grey-6 +text-sm">{{ event.odds[0].team_2.moneyline }}</span>
                  <span class="+uppercase +text-grey-6 +text-sm">{{ event.odds[0].team_2.total }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import Algolia from '@/config/algolia.js';
import Loader from '@/components/global/loader';
import { mixin as clickaway } from 'vue-clickaway';

export default {
    components: { Loader },
    mixins: [clickaway],
    data: () => ({ search: '', results: null, loading: false }),
    watch: {
        async search() {
            const algolia = new Algolia('smartlines_data');
            this.results = await algolia.search(this.search);
        }
    },
    methods: {
        clearResults() {
            this.search = '';
            this.results = null;
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(search) {
    background: $white;
    border-radius: $xxs-unit;
    position: relative;

    @include option(active) {
        border-radius: $xxs-unit $xxs-unit 0 0;
    }

    @include part(loader) {
        position: absolute;
        right: $xxl-unit;
        top: $sm-unit;
    }

    @include part(category) {
        border-bottom: 1px solid $grey-2;
        display: block;
        padding: $xs-unit $sm-unit;
    }

    @include part(row-team) {
        > span {
            &:first-child {
                flex: 3;
            }

            flex: 1;
        }
    }

    @include part(header) {
        background: $grey-1;
        display: flex;
        padding: $sm-unit;
        position: sticky;
        top: 0;

        > span {
            &:first-child {
                flex: 3;
            }

            flex: 1;
        }
    }

    @include part(img) {
        border: 1px solid $grey-3;
        border-radius: 50%;
        height: 25px;
        width: 25px;
    }

    @include part(row) {
        padding: $sm-unit;

        &:hover {
            background: $grey-2;
        }
    }

    @include part(icon) {
        left: $md-unit;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    @include part(input) {
        background: transparent;
        border: 0;
        flex: 1;
        font-size: $md-unit;
        font-weight: $font-bold;
        padding: $md-unit;
        padding-left: $xxl-unit;
        width: 100%;
    }

    @include part(dropdown) {
        background: $white;
        border-radius: 0 0 $xxs-unit $xxs-unit;
        border-top: 1px solid $grey-3;
        box-shadow: $elevation-4;
        left: 0;
        max-height: 350px;
        overflow-y: auto;
        position: absolute;
        right: 0;
        top: 100%;
    }
}
</style>
