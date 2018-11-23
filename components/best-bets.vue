<template>
  <div class="best-bets +elevation-5">
    <div class="best-bets__category-header">
      <h2 class="+text-base +text-bold +uppercase +text-grey-6">Smartlines</h2>
    </div>

    <div class="best-bets__tabs" v-if="categories.length">
      <button
        @click="category = 'All'"
        :class="{ '--active': category === 'All' }"
        class="best-bets__tab +uppercase +text-bold">
        All
      </button>
      <button
        @click="category = item.category"
        :class="{ '--active': category === item.category }"
        class="best-bets__tab +uppercase +text-bold"
        v-for="(item, index) in categories"
        :key="index">
        {{ item.category }}
      </button>
    </div>

    <div class="best-bets__container">
      <div
        class="best-bets__item +pd-lg +flex +align-items-center +justify-content-space-between"
        v-for="category in currentCategory"
        :key="category.slug">

        <div class="+flex +flex-direction-column">
          <span class="">{{ category.team_1.full_name }}</span>
          <span class="+text-grey-6 +text-sm +uppercase">{{ category.odds[0].org }}</span>
        </div>
        <span class="">{{ Math.floor(Math.random() * (100 - 75 + 1)) + 75 }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        categories: [],
        category: 'All'
    }),
    computed: {
        currentCategory() {
            return this.category === 'All'
                ? this.categories.map(category => category.events).reduce((a, b) => a.concat(b), [])
                : this.categories.find(event => event.category === this.category).events;
        }
    },
    async created() {
        const categories = await axios.get('/events');
        this.categories = await categories.data;
    }
};
</script>

<style lang="scss" scoped>
@include component(best-bets) {
    background: $white;
    border-radius: 4px;
    overflow: hidden;

    @include part(tabs) {
        align-self: flex-end;
        border-bottom: 2px solid $grey-4;
        display: flex;
    }

    @include part(category-header) {
        align-items: center;
        background: $grey-1;
        border-radius: 4px 4px 0 0;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
        padding: $md-unit;
    }

    @include part(container) {
        height: 400px;
        overflow-y: auto;
    }

    @include part(item) {
        background: $white;

        &:hover {
            background: $grey-1;
        }
    }

    @include part(tab) {
        background: transparent;
        border: 0;
        color: $grey-7;
        cursor: pointer;
        flex: 1;
        font-size: $base-unit;
        line-height: 1;
        min-height: 40px;
        padding: $md-unit;
        position: relative;

        &:active,
        &:focus {
            color: $primary;
            outline: none;
        }

        &::after {
            background: $primary;
            bottom: -2px;
            content: '';
            height: 2px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            transform-origin: center;
            transition: width 300ms ease;
            width: 0;
        }

        @include option(active) {
            color: $primary;

            &::after {
                width: 100%;
            }
        }
    }
}
</style>
