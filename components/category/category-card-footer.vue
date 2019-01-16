<template>
  <div class="category-card__table-row-footer">
    <div class="+pd-t-sm +border-t-grey-1 +flex +justify-content-space-between +align-items-center">
      <div class="+flex +align-items-center">
        <span class="+text-grey-5 +block +mg-r-sm +uppercase +text-sm">{{ date(event.starting_time) }}</span>
      </div>

      <nuxt-link
        class="category-card__view-books +uppercase text-link +flex +align-items-center"
        :to="{ name: 'event-id-slug', params: { id: event.id, slug: event.slug }}">
        <span>View All Books</span>
        <i class="material-icons +mg-l-xs">arrow_forward</i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
    props: {
        event: { type: Object, required: true },
    },
    methods: {
        date(date) {
            return moment(date).format('MMMM Do YYYY | h:mm:ss a');
        },
        bookLogo(logo) {
            return logo.toLowerCase().split(' ').join('-');
        }
    }
};
</script>
