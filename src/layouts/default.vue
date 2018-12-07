<template lang="pug">
  q-layout(view="hHh lpr fFf").main-layout
    q-scroll-observable(@scroll="userHasScrolled")
    q-layout-header(reveal :reveal-offset="400").main-header.bg-primary.no-shadow.row.items-start.justify-center
      q-toolbar(color="primary").justify-between.items-start.col-md-12.col-xl-6
        div.row.name.q-ml-sm Ícaro Harry
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
      .bg-white.row.justify-center.main-tabs.shadow-5
        q-tabs(inverted align="justify").col-md-12.col-xl-6
          q-tab(default slot="title" label="About" name="tab-1" icon="person")
          q-tab(slot="title" name="tab-2" label="Activity" icon="code")
          q-tab(slot="title" name="tab-3" label="Projects" icon="build")
          q-tab(slot="title" name="tab-4" label="Blog" icon="create")
          q-tab(slot="title" name="tab-5" label="Contact" icon="chat")

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
    height 420px

  .name
    font-family 'Schoolbell', cursive
    font-weight 600
    font-size 25px

  .bike
    margin-top 22px
    width 100%

  .main-tabs
    width 100%

  .avatar-place
    width 100%
    margin-top 20px
    .avatar
      height 220px
      width 220px
   .social-btns
      width 100%

  .q-layout-header-hidden
    transform translateY(-100%)
</style>
