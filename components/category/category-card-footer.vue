<template>
  <div class="category-card__table-row-footer">
    <div class="+pd-t-sm +border-t-grey-1 +flex +justify-content-space-between +align-items-center">
      <div class="+flex +align-items-center">
        <span class="+block +mg-r-sm +uppercase +text-sm">Best odds on: </span>
        <img class="+height-16px" :src="`/book-logos/${bookLogo(event.odds[0].org)}.png`" :alt="event.odds[0].org">
      </div>

      <router-link
        class="category-card__view-books +uppercase text-link +flex +align-items-center"
        :to="{ name: 'event-category-slug', params: { category: category.category, slug: event.slug }}">
        <span>View All Books</span>
        <i class="material-icons +mg-l-xs">arrow_forward</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        event: { type: Object, required: true },
        category: { type: Object, required: true }
    },
    methods: {
        bookLogo(logo) {
            return logo
                .toLowerCase()
                .split(' ')
                .join('-');
        }
    }
};
</script>

<style>
</style>
