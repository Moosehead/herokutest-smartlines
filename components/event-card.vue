<template>
  <div class="event-card">
    <div class="event-card__time">
      <span class="+block">{{ event.starting_time }}</span>
      <span class="+block">{{ event.date }}</span>
    </div>

    <div class="event-card__data">
      <div class="event-card__team">
        <img :src="event.team1.logo" class="event-card__logo" :alt="event.team1.full_name">
        <span>{{ event.team1.full_name }}</span>
      </div>

      <div class="event-card__team">
        <img :src="event.team2.logo" class="event-card__logo" :alt="event.team2.full_name">
        <span>{{ event.team2.full_name }}</span>
      </div>
    </div>

    <!-- <div class="grid +pd-t-md">
      <div class="col-6 +flex +flex-direction-column +align-items-center">
        <div class="event-card__logo">
          <img :src="event.team1.logo" class="event-card__logo" :alt="event.team1.full_name">
          <div class="event-card__rank">{{ event.team1.division_rank }}</div>
        </div>
        <span class="event-card__team-city">{{ event.team1.city }}</span>
        <span class="event-card__team-name +uppercase">{{ event.team1.team_name }}</span>
        <span class="event-card__team-record">{{ event.team1.record }}</span>
      </div>

      <div class="col-6 +flex +flex-direction-column +align-items-center">
        <div class="event-card__logo">
          <img :src="event.team2.logo" class="event-card__logo" :alt="event.team2.full_name">
          <div class="event-card__rank">{{ event.team2.division_rank }}</div>
        </div>
        <span class="event-card__team-city">{{ event.team2.city }}</span>
        <span class="event-card__team-name +uppercase">{{ event.team2.team_name }}</span>
        <span class="event-card__team-record">{{ event.team2.record }}</span>
      </div>
    </div>

    <div class="grid +bg-grey-1 +mg-t-sm +b-radius-sm +pd-sm">
      <div class="col-4 +text-center">
        <span class="+text-base +text-grey-6">{{ event.odds[0].team_1.moneyline }}</span>
      </div>
      <div class="col-4 +text-center">
        <span class="+text-base +text-grey-6">{{ event.odds[0].draw }}</span>
      </div>
      <div class="col-4 +text-center">
        <span class="+text-base +text-grey-6">{{ event.odds[0].team_2.moneyline }}</span>
      </div>
    </div>

    <div class="+pd-t-sm +border-t-grey-2 +text-center +mg-t-lg">
      <router-link class="text-link +text-sm +uppercase" :to="{ name: 'event', params: { category, slug: event.slug }}">
        View Books
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
    props: {
        event: { type: Object, required: true },
        category: { type: String, required: true }
    }
};
</script>

<style lang="scss" scoped>
@include component(event-card) {
    background: $white;
    display: flex;
    padding: $md-unit;
    transition: all 400ms cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        box-shadow: $elevation-5;
    }

    @include part(date) {
    }

    @include part(data) {
    }

    @include part(team) {
        align-items: center;
        display: flex;

        &:not(:last-of-type) {
            border-bottom: 1px solid red;
        }
    }

    @include part(logo) {
        border: 1px solid $grey-2;
        border-radius: 50%;
        height: 25px;
        width: 25px;

        > img {
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }

    @include part(rank) {
        align-items: center;
        background: $white;
        border: 1px solid $grey-3;
        border-radius: 50%;
        display: flex;
        font-size: $sm-unit;
        height: 20px;
        justify-content: center;
        left: -5px;
        position: absolute;
        top: -5px;
        width: 20px;
    }

    @include part(team-city) {
        color: $grey-5;
        font-size: $base-unit;
    }

    @include part(team-name) {
        color: $grey-6;
        font-size: $md-unit;
    }

    @include part(team-record) {
        color: $grey-5;
        font-size: $base-unit;
    }

    @include part(starting-time) {
        color: $grey-5;
        font-size: $sm-unit;
    }

    @include part(date) {
        color: $grey-8;
        font-size: $md-unit;
    }

    @include part(location) {
        color: $grey-5;
        font-size: $sm-unit;
    }
}
</style>
