<template>
  <div class="breadcrumbs" v-if="$route.name === 'event-category-slug'">
    <div class="container">
      <div class="+flex +align-items-center">
        <router-link class="breadcrumbs__breadcrumb --is-link +uppercase +block" to="/events">Events</router-link>
        <span class="+block +mg-r-sm +mg-l-sm">/</span>
        <span class="breadcrumbs__breadcrumb +uppercase +block">{{ match }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        match() {
            return this.$route.params.slug.split('-').join(' ');
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(breadcrumbs) {
    background: $grey-2;
    padding: $md-unit 0;

    @include part(breadcrumb) {
        font-size: $base-unit;

        @include option(is-link) {
            color: $primary;
        }
    }
}
</style>
