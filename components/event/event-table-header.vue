<template>
  <div class="grid +bg-grey-1 +border-b-grey-2">
    <span class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base">Book</span>
    <span class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base">Teams</span>
    <div class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base +flex +align-items-center">
      <span>Moneyline</span>
      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
    </div>
    <div class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base">
      <span>Spread</span>
      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
    </div>
    <div class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base">
      <span>Total</span>
      <info-badge class="+mg-l-sm" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, asperiores."/>
    </div>
    <div class="col-2 +pd-md +flex +align-items-center +uppercase +text-grey-6 +text-base"/>
  </div>
</template>

<script>
import InfoBadge from '@/components/info-badge';

export default {
    components: { InfoBadge }
};
</script>
