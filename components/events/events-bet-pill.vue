<template>
  <button class="pill +text-left +flex" @click="setBet(calculatorData)">
    <div class="pill__book +mg-r-xs" v-if="showBookIcon">
      <img class="+height-24px" :src="bookLogo" alt="Book logo">
    </div>

    <div class="+flex-1" v-if="betType">
      <span class="+flex +text-regular +mg-b-xs +text-sm">
        <span class="+mg-r-xxs +text-grey-6" v-if="type === 'total'">({{ team === 'team_1' ? 'O' : 'U' }} {{ totalValue }})</span>
        <span class="+mg-r-xxs +text-grey-6" v-if="type === 'spread'">({{ betType.handicap }})</span>
        <span>{{ roundedValue }}</span>
      </span>

      <grade-badge :grade="betType.grade" />
    </div>
  </button>
</template>

<script>
import { mapMutations } from 'vuex';
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    props: {
        showBookIcon: { type: Boolean, default: true },
        bet: { type: Object, required: true },
        org: { type: String, required: true },
        teamName: { type: String, required: true },
        team: { type: String, default: null },
        type: { type: String, required: true }
    },
    computed: {
        bookLogo() {
            if(this.type === 'total') {
                return this.team === 'team_1'
                    ? `/book-icons/${this.bet.over_pref.best_book.toLowerCase().split(' ').join('-')}.jpg`
                    : `/book-icons/${this.bet.under_pref.best_book.toLowerCase().split(' ').join('-')}.jpg`;
            }

            return `/book-icons/${this.bet[this.type].best_book.toLowerCase().split(' ').join('-')}.jpg`;
        },
        totalValue() {
            if(this.betType.threshold) {
                return this.betType.threshold;
            }

            return this.team === 'team_1' ? this.bet.value :this.bet.value;
        },
        betType() {
            if(this.type === 'total') {
                return this.team === 'team_1' ? this.bet.over_pref : this.bet.under_pref;
            }

            return this.bet[this.type];
        },
        roundedValue() {
            return (Math.round(this.betType.value * 100) / 100).toFixed(2);
        },
        calculatorData() {
            return { ...this.bet, team: this.teamName, type: this.type, org: this.org };
        }
    },
    methods: {
        ...mapMutations({ setBet: 'payoutCalculator/setBet' }),
    },
};
</script>

<style lang="scss" scoped>
@include component(pill) {
    background: transparent;
    border: 0;
    border-radius: $xxs-unit;
    cursor: pointer;
    padding: $sm-unit;

    @include part(book) {
        border-radius: 50%;
        flex: none;
        height: $lg-unit;
        overflow: hidden;
        width: $lg-unit;

        > img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }

    &:hover {
        background: $grey-1;
    }

    @include option(active) {
        border-color: $primary;
    }
}
</style>
