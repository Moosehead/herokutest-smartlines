<template>
  <div class="grid">
    <div class="col-7 +mg-b-lg">
      <div class="+max-ch">
        <h2 class="+mg-b-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptas!</h2>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates id, pariatur expedita ullam maxime delectus cumque veniam cupiditate laborum?</span>
      </div>
    </div>
    <div class="col-7 +pd-xxl +bg-white +elevation-5 +radius-xxs">
      <form action="">
        <label class="+block +mg-b-lg">
          <span class="+block +text-sm +uppercase +text-grey-6 +mg-b-xxs">Name</span>
          <input type="text" class="+text-md +pd-sm +border-grey-3 +radius-xxs +block +width-100percent" placeholder="you@example.com">
        </label>
        <label class="+block +mg-b-xl">
          <span class="+block +text-sm +uppercase +text-grey-6 +mg-b-xxs">Email Address</span>
          <input type="text" class="+text-md +pd-sm +border-grey-3 +radius-xxs +block +width-100percent" placeholder="you@example.com">
        </label>

        <v-btn button-style="primary" label="Sign Up"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
