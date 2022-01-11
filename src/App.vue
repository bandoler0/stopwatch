<template>
  <div id="app">
    <countdown></countdown>
    <buttons></buttons>
    <lap></lap>
  </div>
</template>

<script>

import Lap from './components/lap.vue'
import Countdown from './components/countdown.vue'
import Buttons from './components/buttons.vue'
export default {
  components: {
    'lap': Lap,
    'countdown': Countdown,
    'buttons': Buttons
  },
  data () {
    return {

    }
  },
  
}
</script>

<style>

</style>
