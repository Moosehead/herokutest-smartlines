<template>
  <div class="bet-example">
    <div class="bet-example__category-header">
      <h2 class="+text-base +text-bold +uppercase +text-grey-6">Payout Calculator</h2>
    </div>

    <div class="bet-example__content +pd-md">
      <p class="+mg-0 +text-grey-6" v-if="!bet">Select an odd to view payout example</p>
      <div class="+flex +flex-direction-column" v-else>
        <div class="+flex +justify-content-space-between +text-regular +text-grey-6 +mg-b-xxs">
          <span>{{ bet.team }}</span>
          <span>{{ currentBet.value }}</span>
        </div>

        <grade-badge :grade="currentBet.grade" class="+mg-b-xxs"/>

        <span class="+block +uppercase +text-sm +mg-b-sm +text-grey-5">{{ bet.type }}</span>

        <div class="+flex +mg-b-md">
          <v-input
            icon="attach_money"
            v-model="risk"
            class="+mg-r-sm"
            label="Risk"/>

          <v-input
            icon="attach_money"
            v-model="totalPayout"
            readonly
            label="To Win"/>
        </div>

        <a :href="bet.org | url" class="+block +width-100percent" target="_blank">
          <v-btn button-style="success" class="+width-100percent" :label="`Place Bet on ${bet.org}`"/>
        </a>

        <v-btn
          label="Clear"
          class="+block +text-center +mg-t-sm +text-primary +uppercase"
          @click="cancelOrder"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    data: () => ({
        risk: null
    }),
    computed: {
        ...mapState({
            bet: state => state.payoutCalculator.bet
        }),
        currentBet() {
            if(this.bet.type === 'total') {
                return this.bet.team === 'team_1' ? this.bet.over_pref : this.bet.under_pref;
            }

            return this.bet[this.bet.type];
        },
        totalPayout() {
            if (!this.risk) {
                return null;
            }

            return (Math.round((parseInt(this.risk) * this.currentBet.value) * 100) / 100).toLocaleString('en-US', {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            });
        }
    },
    methods: {
        ...mapMutations({ setBet: 'payoutCalculator/setBet' }),
        cancelOrder() {
            this.risk = null;
            this.setBet(null);
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(bet-example) {
    background: $white;
    border-radius: 4px;
    box-shadow: $elevation-5;
    overflow: hidden;
    z-index: $z-three;

    @include part(category-header) {
        align-items: center;
        background: $grey-1;
        display: flex;
        justify-content: space-between;
        min-height: 57px;
        padding: $md-unit;
    }
}
</style>
