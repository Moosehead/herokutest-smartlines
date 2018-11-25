<template>
  <button class="pill" @click="setBet(bet)">
    <grade-badge :grade="bet.value.grade" class="+flex-none +mg-r-xs" />
    <span class="+text-grey-6 +text-sm +text-bold">
      {{ bet.value.overUnder }} {{ bet.value.spreadDirection }}{{ bet.value.spread }} <span :class="[ bet.value.payoutDirection === '+' ? '+text-green-8' : '+text-red-8' ]">{{ bet.value.payoutDirection }}{{ bet.value.payout }}</span>
    </span>
  </button>
</template>

<script>
import { mapMutations } from 'vuex';
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    props: {
        bet: { type: Object, required: true }
    },
    methods: mapMutations({ setBet: 'payoutCalculator/setBet' })
};
</script>

<style lang="scss" scoped>
@include component(pill) {
    align-items: center;
    border: 1px solid $grey-2;
    border-radius: 50px;
    cursor: pointer;
    display: inline-flex;
    flex: none;
    justify-content: space-between;
    min-width: 120px;
    padding: $xxs-unit;
    padding-right: $sm-unit;

    &:hover {
        background: $grey-1;
    }

    @include option(active) {
        border-color: $primary;
    }
}
</style>
