<template>
  <div class="table-header grid +align-items-center +border-b-grey-3">
    <div class="col-6 +uppercase +text-sm +text-grey-6 +pd-sm">Teams</div>
    <div class="col-2 +uppercase +text-sm +text-grey-6">
      <div class="+flex +align-items-center +pd-sm">
        Moneyline
        <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
      </div>
    </div>
    <div class="col-2 +uppercase +text-sm +text-grey-6 +pd-sm">
      <div class="+flex +align-items-center">
        Spread
        <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
      </div>
    </div>
    <div class="col-2 +uppercase +text-sm +text-grey-6 +pd-sm">
      <div class="+flex +align-items-center">
        Total
        <info-badge class="+mg-l-sm" position="right" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
      </div>
    </div>
  </div>
</template>

<script>
import InfoBadge from '@/components/info-badge';

export default {
    components: { InfoBadge }
};
</script>

<style lang="scss" scoped>
@include component(table-header) {
    background: $white;
    position: sticky;
    top: 0;
    z-index: $z-three;

    @include tablet() {
        display: none;
    }
}
</style>
