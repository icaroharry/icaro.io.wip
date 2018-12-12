<template lang="pug">
  q-page.flex.flex-container
    .row.full-width.justify-center
      .col-md-12.col-xl-6.q-mt-lg
          q-timeline(responsive color="primary").q-pa-md
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
              side="left"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
              side="left"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
              side="left"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}
            q-timeline-entry(
              title="Event Title"
              subtitle="February 22, 1986"
            )
              .q-body-1 {{lorem}}

</template>

<style lang="stylus">

</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
