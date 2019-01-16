<template>
  <div class="category-card +elevation-5">
    <div class="category-card__header">
      <h2 class="+text-base +text-bold +uppercase +text-grey-6">Top Books for {{ category }}</h2>
      <div class="+flex">
        <span class="category-card__count +mg-r-xs">{{ sortedEvents.length }}</span>
        <button @click="showPanel = !showPanel" class="+btn-reset +mg-l-xxs +cursor-pointer" v-tooltip="showPanel ? 'Collapse' : 'Expand'">
          <i class="material-icons">{{ showPanel ? 'expand_less' : 'expand_more' }}</i>
        </button>
      </div>
    </div>

    <transition @enter="velocityEnter" @leave="velocityLeave" :css="false">
      <div class="col-12" v-if="showPanel">
        <category-card-header />
        <category-row :event="event" v-for="event in sortedEvents" :key="event.id"/>
      </div>
    </transition>
  </div>
</template>

<script>
if (process.browser) {
    const Velocity = require('velocity-animate');
}

import { keys } from 'lodash';
import moment from 'moment';
import CategoryCardHeader from '@/components/category/category-card-header';
import CategoryRow from '@/components/category/category-row';
import CategoryCardColumn from '@/components/category/category-card-column';
import CategoryCardFooter from '@/components/category/category-card-footer';

export default {
    components: { CategoryCardHeader, CategoryCardFooter, CategoryCardColumn, CategoryRow },
    props: {
        events: { type: Array, required: true },
        category: { type: String, required: true },
    },
    data: () => ({
        showPanel: true,
    }),
    computed: {
        sortedEvents() {
            return this.events
                .filter(event => moment(event.starting_time).isSame(moment(), 'days'))
                .sort((a, b) => moment(a.starting_time) - moment(b.starting_time));
        },
    },
    methods: {
        dateFormatter(date) {
            return moment(date).format('MMMM Do YYYY, h:mm:ss a');
        },
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
    border-radius: $xxs-unit;

    &:not(:last-child) {
        border-radius: $xxs-unit;
        margin-bottom: $xl-unit;
    }

    @include part(header) {
        align-items: center;
        background: $grey-1;
        border-radius: $xxs-unit $xxs-unit 0 0;
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
        border-radius: $xxs-unit;
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
