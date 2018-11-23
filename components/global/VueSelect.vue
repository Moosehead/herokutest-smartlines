<template>
  <div class="vue-select">
    <label :for="label" class="vue-select__label +block +uppercase" v-if="label">{{ label }}</label>
    <multiselect
      :value="value"
      :options="options"
      :id="label"
      :show-labels="false"
      :allow-empty="false"
      :searchable="searchable"
      :options-limit="optionsLimit"
      @input="$emit('input', $event)"/>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    components: { Multiselect },
    props: {
        value: { type: [String, Object, Number, Array], default: null },
        options: { type: Array, required: true },
        label: { type: String, default: null },
        searchable: { type: Boolean, default: false },
        optionsLimit: { type: Number, default: 6 },
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css" scoped></style>

<style lang="scss" scoped>
@include component(vue-select) {
    position: relative;

    @include part(label) {
        color: $grey-6;
        font-size: $sm-unit;
        font-weight: $font-semi-bold;
        margin-bottom: $xxs-unit;
    }
}
</style>
