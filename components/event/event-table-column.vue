<template>
  <div class="+pd-md +flex +flex-direction-column">
    <span class="+height-38px +flex +align-items-center +mg-b-xs">
      <grade-badge class="+mg-r-xs flex-none" :grade="odds.team_1.grade"/>
      <span class="+block +mg-r-xxs">{{ odds.team_1.overUnder }} {{ odds.team_1.spreadDirection }}{{ odds.team_1.spread }}</span>
      <span :class="[ odds.team_1.payoutDirection === '+' ? '+text-green-8' : '+text-red-8' ]">{{ odds.team_1.payoutDirection }}{{ odds.team_1.payout }}</span>
    </span>
    <span class="+height-38px +flex +align-items-center">
      <grade-badge class="+mg-r-xs flex-none" :grade="odds.team_1.grade"/>
      <span class="+block +mg-r-xxs">{{ odds.team_2.overUnder }} {{ odds.team_2.spreadDirection }}{{ odds.team_2.spread }}</span>
      <span :class="[ odds.team_2.payoutDirection === '+' ? '+text-green-8' : '+text-red-8' ]">{{ odds.team_2.payoutDirection }}{{ odds.team_2.payout }}</span>
    </span>
  </div>
</template>

<script>
import GradeBadge from '@/components/grade-badge';

export default {
    components: { GradeBadge },
    props: {
        odds: { type: Object, required: true }
    }
};
</script>
