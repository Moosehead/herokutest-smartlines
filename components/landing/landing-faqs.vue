<template>
  <div class="grid +pd-t-xxl +pd-b-xxl">
    <div class="col-7 +mg-b-lg">
      <div class="+max-ch">
        <h2 class="+mg-b-sm">FAQ</h2>
        <span>Frequently Asked Questions</span>
      </div>
    </div>

    <landing-faq class="col-7 +mg-b-xl" v-for="(faq, index) in faqs" :key="index" :faq="faq"/>
  </div>
</template>

<script>
import LandingFaq from '@/components/landing/landing-faq';

export default {
    components: { LandingFaq },
    data: () => ({
        faqs: [
            {
                question: 'Do I need accounts on other sportsbooks to place bets right now?',
                answer: 'Currently, yes. ‍For users who currently have accounts with sportsbooks, our aggregator can help show where the smartest bets can be placed. Or, for a given game, which sportsbook provides the best odds. ‍ For users interested in setting up accounts on different sportsbooks, our aggregator can give you a taste for which books often give good odds on the games you plan to start betting on. Sports betting research can be time consuming and complicated. We want to show you simple ways to take advantage of desirable odds and start making money.'
            },
            {
                question: 'What makes SmartLines different than other sports betting aggregation sites?',
                answer: 'One of the biggest challenges of taking advantage of the best odds on the market is the accounts required to do so. Acquiring and maintaining accounts on multiple sportsbooks is a hassle, and tackling this problem by providing access to sportsbooks is how SmartLines brings a game-changing strategy to sports betting. By partnering with Sportsbooks around the globe, our plan is to be your one-stop-shop for sports betting. By using SmartLines, new players will be offered an easy-to-use explanatory onboarding to help with the unfamiliarity of the sports betting online world.'
            },
            {
                question: 'Okay then, how do you make money?',
                answer: 'We are currently in the development stage and free to use. Our priority is user growth and relationship building.'
            },
            {
                question: 'Why bet online? I’m used to going to the convenience store!',
                answer: 'Online sports is quickly moving into the mainstream, with more sportsbooks popping up all the time. While government offered betting options (like you see in North American convenience stores) have historically leveraged brand trust over their poor payouts, today there are many reliable online betting alternatives with significantly better odds.'
            },
            {
                question: 'Does it cost money to use SmartLines?',
                answer: 'No, we are a for-the-player betting company. After betting countless times ourselves, we started SmartLines to develop a more systematic way of taking advantage of the countless opportunities in this fragmented and unstandardized market. If we can make it easier for you to play smart and increase your chances of making money, we’ve done the job we set out to do.'
            },
        ]
    })
};
</script>
