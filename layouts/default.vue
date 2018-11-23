<template>
  <div id="body">
    <main-nav/>
    <main>
      <nuxt/>
    </main>
    <bank-roll @show-bankroll="showDailyBankroll = true"/>
    <daily-bank-roll v-if="showDailyBankroll" @close-bankroll="showDailyBankroll = false"/>
    <main-footer/>
  </div>
</template>

<script>
import MainNav from '@/components/main-nav';
import MainFooter from '@/components/main-footer';
import BankRoll from '@/components/bankroll';
import DailyBankRoll from '@/components/daily-bankroll';

export default {
    components: { MainNav, MainFooter, BankRoll, DailyBankRoll },
    data: () => ({
        showDailyBankroll: false
    })
};
</script>
