<template>
  <div class="grade" v-tooltip.bottom="{ content: `Bet rated ${rank + 1}/${this.rating.length}` }">
    <div
      class="grade__tile"
      :class="[ value.active ? value.color : null ]"
      v-for="(value, index) in rating"
      :key="index"/>
  </div>
</template>

<script>
export default {
    props: {
        grade: { type: String, required: true },
        character: { type: Boolean, default: false }
    },
    data: () => ({
        rank: 0
    }),
    computed: {
        rating() {
            const grades = ['D', 'C', 'B', 'A'];
            const rating = grades.indexOf(this.grade);
            this.getRating(rating);

            return grades.map((grade, index) => {
                return {
                    grade,
                    rating: rating,
                    color: this.getStarColor(rating),
                    active: index <= rating
                };
            });
        }
    },
    methods: {
        getRating(rating) {
            this.rank = rating;
        },
        getStarColor(star) {
            if(star <= 1) {
                return '+bg-yellow-6';
            }

            if(star === 2) {
                return '+bg-green-6';
            }

            return '+bg-primary';
        },
    },
};
</script>

<style lang="scss" scoped>
@include component(grade) {
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    width: $xxl-unit;

    @include part(tile) {
        background: $grey-4;
        height: $xxs-unit;
        width: $base-unit;

        &:not(:last-of-type) {
            margin-right: 2px;
        }

        @include option(active) {
            background: $green-6;
        }
    }

    @include part(icon) {
        color: $grey-4;
        font-size: $base-unit;
        width: $base-unit;

        @include option(active) {
            color: #ffce48;
        }
    }
}
</style>
