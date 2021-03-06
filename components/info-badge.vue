<template>
  <div class="info-badge">
    <v-btn class="info-badge__button" @click="showInfo = !showInfo">
      <i slot="icon" class="material-icons">info</i>
    </v-btn>

    <transition name="fade">
      <div class="info-badge__content +elevation-5" :class="activePosition" v-if="showInfo" v-on-clickaway="hideTooltip">
        <p class="+mg-0">{{ content }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
    mixins: [clickaway],
    props: {
        content: { type: String, required: true },
        position: { type: String, default: 'center' }
    },
    data: () => ({ showInfo: false }),
    computed: {
        activePosition() {
            return `--${this.position}`;
        }
    },
    methods: {
        hideTooltip() {
            this.showInfo = false;
        }
    }
};
</script>

<style lang="scss" scoped>
@include component(info-badge) {
    position: relative;

    @include part(button) {
        color: $grey-4;
        padding: 0;

        &:hover {
            color: $grey-6;
        }
    }

    @include part(content) {
        background: $white;
        border: 1px solid $grey-2;
        border-radius: $xxs-unit;
        min-width: 220px;
        padding: $md-unit;
        position: absolute;
        top: 130%;
        z-index: $z-four;

        @include option(center) {
            left: 50%;
            right: 50%;
            transform: translateX(-50%);

            &::after,
            &::before {
                left: 50%;
                right: 50%;
                transform: translateX(-50%);
            }
        }

        @include option(right) {
            right: -$sm-unit;

            &::after,
            &::before {
                right: $lg-unit;
                transform: translateX(50%);
            }
        }

        @include option(left) {
            left: -$sm-unit;

            &::after,
            &::before {
                left: $lg-unit;
                transform: translateX(-50%);
            }
        }

        &::after {
            border-bottom: 7px solid $white;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
            content: '';
            height: 0;
            position: absolute;
            top: -7px;
            width: 0;
        }

        &::before {
            border-bottom: 8px solid $grey-2;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            content: '';
            height: 0;
            position: absolute;
            top: -8px;
            width: 0;
        }
    }
}
</style>
