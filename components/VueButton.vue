<template>
  <button
    :class="[ buttonStyle ? `button-styled --${buttonStyle}` : null ]"
    :disabled="loading || disabled"
    class="button"
    v-on="$listeners">

    <span v-if="loading">Loading...</span>
    <span v-else>{{ label }}</span>
    <slot name="label"/>
    <slot name="icon"/>
  </button>
</template>

<script>
export default {
    name: 'vue-button',
    props: {
        label: { type: String, default: null },
        loading: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        buttonStyle: { type: String, default: null }
    }
};
</script>

<style lang="scss" scoped>
$_button-min-width: 7.75rem;
$_button-letter-spacing: 0.05rem;

@include component(button) {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font-weight: $font-bold;
    white-space: nowrap;
}

@include component(button-styled) {
    border: 1px solid transparent;
    border-radius: $xxs-unit;
    color: $grey-3;
    font-size: $sm-unit;
    justify-content: center;
    letter-spacing: $_button-letter-spacing;
    min-width: $_button-min-width;
    padding: $sm-unit $lg-unit;
    text-transform: uppercase;
    transition: box-shadow 150ms ease-in-out, transform 150ms ease-in-out;

    &:hover {
        box-shadow: $elevation-4;
        transform: translateY(-1px);
    }

    @include option(error) {
        background: $red-9;
        border-color: $red-9;
        color: $white;
    }

    @include option(primary) {
        background: $primary;
        border-color: $primary;
        color: $white;
    }

    @include option(success) {
        background: $green-7;
        border-color: $green-7;
        color: $white;
    }

    @include option(warning) {
        background: $orange-7;
        border-color: $orange-7;
        color: $white;
    }

    &[disabled] {
        border-color: $grey-6;
        color: $grey-6;
    }
}
</style>
