<template>
  <div class="category-card +elevation-5">
    <div class="category-card__header">
      <h2 class="+text-base +text-bold +uppercase +text-grey-6">Top {{ category.category }} Books</h2>
      <div class="+flex">
        <span class="category-card__count +mg-r-xs">{{ category.events.length }}</span>
        <button @click="showPanel = !showPanel" class="+btn-reset +mg-l-xxs +cursor-pointer" v-tooltip="showPanel ? 'Collapse' : 'Expand'">
          <i class="material-icons">{{ showPanel ? 'expand_less' : 'expand_more' }}</i>
        </button>
      </div>
    </div>

    <transition @enter="velocityEnter" @leave="velocityLeave" :css="false">
      <div class="col-12" v-if="showPanel">
        <category-card-header/>

        <div class="category-card__table-row grid +pd-sm" v-for="(event, index) in category.events" :key="`top-row-${index}`">
          <div class="col-2 +flex +flex-direction-column +justify-content-center">
            <span class="+block +text-base +mg-b-sm">{{ event.date | date }}</span>
            <span class="+block +text-grey-5 +text-sm">{{ event.starting_time }}</span>
          </div>

          <div class="col-4 +flex +flex-direction-column">
            <div class="+height-38px +flex +align-items-center +mg-b-sm +flex">
              <img :src="event.team_1.logo" class="category-card__logo +mg-r-xs" :alt="event.team_1.full_name">
              <span class="+text-overflow">{{ event.team_1.team_name }}</span>
            </div>
            <div class="+height-38px +flex +align-items-center +flex">
              <img :src="event.team_2.logo" class="category-card__logo +mg-r-xs" :alt="event.team_2.full_name">
              <span class="+text-overflow">{{ event.team_2.team_name }}</span>
            </div>
          </div>

          <category-card-column :teams="[event.team_1.full_name, event.team_2.full_name]" :bet="event.odds[0]" type="moneyline"/>
          <category-card-column :teams="[event.team_1.full_name, event.team_2.full_name]" :bet="event.odds[0]" type="spread"/>
          <category-card-column :teams="[event.team_1.full_name, event.team_2.full_name]" :bet="event.odds[0]" type="total"/>
          <category-card-footer class="col-12" :event="event" :category="category"/>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
if (process.browser) {
    const Velocity = require('velocity-animate');
}

import CategoryCardHeader from '@/components/category/category-card-header';
import CategoryCardColumn from '@/components/category/category-card-column';
import CategoryCardFooter from '@/components/category/category-card-footer';

export default {
    components: { CategoryCardHeader, CategoryCardFooter, CategoryCardColumn },
    props: {
        category: { type: Object, required: true }
    },
    data: () => ({ showPanel: true }),
    methods: {
        velocityEnter(el, done) {
            Velocity(el, 'slideDown', {
                easing: 'linear',
                duration: 300,
                complete: done
            });
        },
        velocityLeave(el, done) {
            Velocity(el, 'slideUp', {
                easing: 'linear',
                duration: 300,
                complete: done
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(category-card) {
    background: $white;

    &:not(:last-child) {
        border-radius: 4px;
        margin-bottom: $xl-unit;
    }

    @include part(header) {
        align-items: center;
        background: $grey-1;
        border-radius: 4px 4px 0 0;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
        padding: $md-unit;
    }

    @include part(count) {
        align-items: center;
        background: $primary;
        border-radius: 50%;
        color: $white;
        display: flex;
        font-size: $base-unit;
        height: 25px;
        justify-content: center;
        width: 25px;
    }

    @include part(logo) {
        border: 1px solid $grey-2;
        border-radius: 50%;
        height: 25px;
        width: 25px;

        > img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }

    @include part(split-column) {
        align-items: center;
        display: flex;
        min-height: 45px;
    }

    @include part(next) {
        align-items: center;
        border-radius: 50%;
        display: flex;
        flex: none;
        height: 40px;
        justify-content: center;
        width: 40px;

        &:hover {
            background: $grey-2;
        }
    }

    @include part(category) {
        background: $white;
        border-radius: 4px;
        box-shadow: $elevation-5;

        &:not(:first-of-type) {
            margin-top: $xl-unit;
        }
    }

    @include part(table) {
        border-collapse: collapse;
        width: 100%;

        td,
        th {
            padding: $md-unit;
            position: relative;
            text-align: left;
        }
    }

    @include part(table-header) {
        border-bottom: 1px solid $grey-3;
    }

    @include part(table-row) {
        &:not(:last-of-type) {
            border-bottom: 1px solid $grey-2;
        }
    }

    @include part(table-row-footer) {
        > td {
            padding: 0 $md-unit;
        }

        &:not(:last-of-type) {
            border-bottom: 1px solid $grey-2;
        }
    }
}
</style>
