<template>
  <div class="grade" :class="gradeStyle" v-tooltip="{ content: `Grade ${grade} bet by Smartlines` }">
    {{ grade }}
  </div>
</template>

<script>
export default {
    props: {
        grade: { type: String, required: true },
        character: { type: Boolean, default: false }
    },
    computed: {
        gradeStyle() {
            return this.character && this.grade
                ? `--character --${this.grade.toLowerCase()}-character`
                : `--${this.grade.toLowerCase()}`;
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(grade) {
    align-items: center;
    background: linear-gradient($grey-3, lighten($grey-5, 10%));
    border-radius: 50%;
    color: $grey-9;
    display: flex;
    font-size: $sm-unit;
    height: 25px;
    justify-content: center;
    line-height: 1;
    width: 25px;

    &:hover {
        cursor: help;
    }

    @include option(character) {
        background: transparent !important;
        height: unset;
        width: unset;
    }

    @include option(a-character) {
        color: $green-8;
    }

    @include option(b-character) {
        color: $green-6;
    }

    @include option(c-character) {
        color: $red-6;
    }

    @include option(d-character) {
        color: $red-8;
    }

    @include option(a) {
        background: $green-4;
    }

    @include option(b) {
        background: $green-2;
    }

    @include option(c) {
        background: $red-2;
    }

    @include option(d) {
        background: $red-4;
    }
}
</style>
