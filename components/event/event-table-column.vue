<template>
  <div class="col-2">
    {{ bet }} {{ type }}
  </div>
</template>

<script>
export default {
    props: {
        bet: { type: Object, required: true },
        type: { type: String, required: true },
    }
};
</script>
