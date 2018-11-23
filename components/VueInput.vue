<template>
  <div class="vue-input">
    <div class="+relative">
      <i v-if="icon" class="material-icons +text-md +text-grey-5 +absolute +pin-left-sm +pin-top-sm"> {{ icon }} </i>

      <label :for="label" v-if="label" class="vue-input__label +block +uppercase">
        {{ label }}
        <input
          :id="label"
          :value="value"
          :disabled="disabled"
          :placeholder="placeholder"
          :type="type"
          :class="{ '+pd-r-xxl': figure, '+pd-l-xl': icon }"
          class="vue-input__input">
      </label>

      <span v-if="figure" class="vue-input__figure">{{ figure }}</span>
    </div>
    <slot name="errors"/>
  </div>
</template>

<script>
export default {
    name: 'vue-input',
    props: {
        value: { type: null, default: null },
        label: { type: String, default: null },
        placeholder: { type: String, default: null },
        type: { type: String, default: 'text' },
        icon: { type: String, default: null },
        figure: { type: String, default: null },
        disabled: { type: Boolean, default: false }
    }
};
</script>

<style lang="scss" scoped>
@include component(vue-input) {
    position: relative;

    @include part(input) {
        background: $grey-2;
        border: none;
        border-radius: $xxs-unit;
        color: $grey-7;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        height: $xxl-unit;
        padding: $sm-unit;
        transition: box-shadow 150ms ease-in-out, transform 150ms ease-in-out;
        width: 100%;

        &::placeholder {
            color: $grey-4;
        }

        &:focus {
            outline: none;
        }
    }

    @include part(label) {
        color: $grey-6;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        margin-bottom: $xxs-unit;
    }

    @include part(action) {
        color: $primary;
        font-size: $sm-unit;
        font-weight: $font-regular;
        margin: 0;
        padding: 0;
    }

    @include part(figure) {
        color: $grey-6;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        position: absolute;
        right: $sm-unit;
        top: 50%;
        transform: translateY(-50%);
    }

    @include part(error) {
        color: $red-7;
        display: block;
        font-size: $sm-unit;
        margin-top: $xxs-unit;
    }
}
</style>
