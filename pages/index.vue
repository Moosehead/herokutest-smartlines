<template>
  <section>
    <hero :smartlines="smartlines" class="+mg-b-xxl"/>

    <div class="container">
      <points />
    </div>

    <section class="+bg-white">
      <div class="container">
        <landing-faqs/>
      </div>
    </section>

    <section class="+bg-grey-2 +pd-t-xxl +pd-b-xxl">
      <div class="container">
        <landing-sign-up />
      </div>
    </section>
  </section>
</template>

<script>
import Hero from '@/components/landing/landing-hero';
import Points from '@/components/landing/landing-points';
import LandingFaqs from '@/components/landing/landing-faqs';
import LandingSignUp from '@/components/landing/landing-sign-up';

export default {
    components: { Hero, Points, LandingFaqs, LandingSignUp },
    transition: { name: 'page-transition', mode: 'out-in' },
    data: () => ({ smartlines: null })
};
</script>
