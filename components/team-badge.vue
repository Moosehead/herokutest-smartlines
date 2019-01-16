<template>
  <div class="team-badge">
    <img :src="teamLogo" :alt="team">
    <!-- <span>{{ initials }}</span> -->
  </div>
</template>

<script>
export default {
    props: {
        team: { type: String, required: true },
        sport: { type: String, required: true }
    },
    computed: {
        teamLogo() {
            const team = this.team.toLowerCase().split(' ').join('-');
            return `/${this.sport}-logos/${team}.gif`;
        },
        initials() {
            const team = this.team.split(' ');
            return `${team[0].charAt(0)}${team[1].charAt(0)}`;
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(team-badge) {
    align-items: center;
    background: $white;
    border: 1px solid $grey-2;
    border-radius: 50%;
    display: flex;
    height: $xl-unit;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: $xl-unit;

    > img {
        height: 100%;
        object-fit: contain;
        object-position: center center;
        width: 100%;
    }

    > span {
        color: $grey-5;
        font-size: $sm-unit;
        z-index: -1;
    }
}
</style>
