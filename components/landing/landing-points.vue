<template>
  <div class="grid --lg-gap +mg-b-xxl">
    <div class="col-12 +flex +justify-content-center +mg-b-lg">
      <div class="+max-ch +text-center">
        <h2 class="+mg-b-sm">Hundreds of sportsbooks offer different odds for the same event. We find the ones that pay you the most.</h2>
        <span>Find out a little more about our product</span>
      </div>
    </div>

    <div class="col-4 +pd-xxl +bg-white +elevation-5 +radius-xxs">
      <img class="points__image" src="/undraw/data.svg" alt="smartlines data aggregator">
      <h3 class="+text-lg +text-grey-6">Smart Sports Betting Aggregator</h3>
      <p class="+text-md +text-grey-5">Compare sportsbooks to identify arbitrage opportunities and ensure you’re betting on the best odds available.</p>
    </div>

    <div class="col-4 +pd-xxl +bg-white +elevation-5 +radius-xxs">
      <img class="points__image" src="/undraw/ui-testing.svg" alt="smartlines user interface">
      <h3 class="+text-lg +text-grey-6">Beginner Friendly User Interface</h3>
      <p class="+text-md +text-grey-5">New to online sports betting? So were we (once upon a time). SmartLines is easy to use with an explanatory onboarding for those that want to learn!</p>
    </div>

    <div class="col-4 +pd-xxl +bg-white +elevation-5 +radius-xxs">
      <img class="points__image" src="/undraw/product-tour.svg" alt="smartlines tba">
      <h3 class="+text-lg +text-grey-6">Lorem ipsum dolor sit amet.</h3>
      <p class="+text-md +text-grey-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate, laboriosam quod nihil quisquam consequuntur voluptate ad laudantium sint quasi!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include component(points) {
    @include part(image) {
        margin-bottom: $xl-unit;
        max-height: 200px;
    }
}
</style>
