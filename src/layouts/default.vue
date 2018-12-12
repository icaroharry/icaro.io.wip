<template lang="pug">
  q-layout(view="hHh lpr fFf").main-layout
    q-scroll-observable(@scroll="userHasScrolled")
    q-layout-header(reveal :reveal-offset="300").main-header.bg-primary.no-shadow.row.items-start.justify-center
      q-toolbar(color="primary").justify-between.items-start.col-md-12.col-xl-6
        div.row.name.q-ml-sm.q-mt-sm Ícaro Harry
      div.avatar-place.row.justify-center
        img.avatar.no-shadow(alt="Quasar logo" src="~assets/profile.jpg")
        .social-btns.row.justify-center.q-mt-xl
          q-btn(round color="tertiary" @click="openURL('https://github.com/icaroharry')").no-shadow
            q-icon(name="mdi-github-circle")
          q-btn(round color="tertiary" @click="openURL('https://www.linkedin.com/in/%C3%ADcaro/')").no-shadow.q-ml-xl
            q-icon(name="mdi-linkedin")
          q-btn(round color="tertiary" @click="openURL('https://twitter.com/icaroharry')").no-shadow.q-ml-xl
            q-icon(name="mdi-twitter")
        div.bike.justify-start
          q-icon(name="mdi-bike" color="white" size="25px", :style="{ marginLeft: scrollPosition + 'px'}")
      .bg-white.row.justify-center.main-tabs.shadow-8
        q-tabs(inverted align="justify").col-md-12.col-xl-6
          q-route-tab(default slot="title" label="Carreer" name="tab-1" icon="business_center" to="/")
          q-route-tab(slot="title" name="tab-2" label="Activity" icon="code" to="/activity")
          q-route-tab(slot="title" name="tab-3" label="Projects" icon="build" to="/projects")
          q-route-tab(slot="title" name="tab-4" label="Blog" icon="create" to="/blog")
          q-route-tab(slot="title" name="tab-5" label="Contact" icon="chat" to="/contact")

    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      scrollPosition: 0
    }
  },
  methods: {
    openURL,
    userHasScrolled (scroll) {
      this.scrollPosition = scroll.position
    }
  }
}
</script>

<style lang="stylus">
body
  background-color #fafafa

.main-layout
  .q-layout-header.main-header
    height 350px

  .name
    font-weight 600
    font-size 20px

  .bike
    margin-top 15px
    width 100%

  .main-tabs
    width 100%

  .avatar-place
    width 100%
    margin-top 10px
    .avatar
      height 120px
      width 120px
   .social-btns
      width 100%

  .q-layout-header-hidden
    transform translateY(-87%)
</style>
