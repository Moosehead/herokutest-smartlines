<template>
  <div>
    <h3 class="+text-lg +text-grey-6">{{ faq.question }}</h3>
    <p>{{ faq.answer }}</p>
  </div>
</template>

<script>
export default {
    props: {
        faq: { type: Object, required: true }
    }
};
</script>
