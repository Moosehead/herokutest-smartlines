<template>
  <div id="body">
    <main-nav/>
    <main>
      <nuxt/>
    </main>
    <main-footer/>
  </div>
</template>

<script>
import MainNav from '@/components/navigation/main-nav';
import MainFooter from '@/components/main-footer';

export default {
    components: { MainNav, MainFooter }
};
</script>
