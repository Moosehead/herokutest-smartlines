<template>
  <div class="events-filters">
    <div class="container">
      <div class="grid">
        <div class="col-4">
          <v-input label="Team" placeholder="Filter by team..." v-model.trim="filters.event.value"/>
        </div>
        <div class="col-2"/>
        <div class="col-2">
          <v-select label="book" v-model="filters.books.value" :options="filters.books.options"/>
        </div>
        <div class="col-2">
          <v-select label="grade" v-model="filters.grades.value" :options="filters.grades.options"/>
        </div>
        <div class="col-2">
          <v-select label="risk" v-model="filters.risk.value" :options="filters.risk.options"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    components: { Multiselect },
    data: () => ({
        activeTab: 'all',
        displayValue: ['American', 'Fraction', 'Decimal'],
        filters: {
            sport: {
                value: 'All Sports',
                options: ['All Sports', 'Hockey', 'Baseball', 'Basketball', 'Football']
            },
            books: {
                value: 'All Books',
                options: ['All Books', 'Bodog', 'William Hill', 'Pinnacle', 'Sports Interaction']
            },
            grades: {
                value: 'All Grades',
                options: ['All Grades', 'A', 'B', 'C', 'D']
            },
            risk: {
                value: 'All Risk',
                options: ['All Risk', 'High', 'Medium', 'Low']
            },
            event: {
                value: null
            }
        }
    }),
    watch: {
        filters: {
            handler() {
                this.$emit('filter-update', this.filters);
            },
            deep: true
        }
    },
    methods: {
        setActiveTab(name) {
            this.activeTab = name;
        }
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style lang="scss" scoped>
@include component(event-filters) {
    @include part(tabs) {
        align-self: flex-end;
        border-bottom: 2px solid $grey-4;
        display: flex;
    }

    @include part(tab) {
        background: transparent;
        border: 0;
        color: $grey-7;
        cursor: pointer;
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

@include component(input) {
    background: $grey-3;
    border: 0;
    border-radius: $xs-unit;
    font-size: $base-unit;
    padding: $md-unit;
    width: 100%;
}
</style>
