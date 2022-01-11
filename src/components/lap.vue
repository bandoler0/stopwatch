<template>
  <div id="laps">
    <p v-for="(time, index) in timeArray" :key="time" class="lap">LAP {{ index }} - {{ time }}</p>
  </div>
</template>

<script>
export default {
  name: 'lap',
  computed: {
    millisecs1(){
      return this.$store.state.millisecs1
    },
    millisecs2(){
      return this.$store.state.millisecs2
    },
    seconds1(){
      return this.$store.state.seconds1
    },
    seconds2(){
      return this.$store.state.seconds2
    },
    minutes1(){
      return this.$store.state.minutes1
    },
    minutes2(){
      return this.$store.state.minutes2
    },
    hours1(){
      return this.$store.state.hours1
    },
    hours2(){
      return this.$store.state.hours2
    },
    lap(){
      return this.$store.state.lap
    },
    timeArray(){
      return this.$store.state.timeArray
    }
  },
  methods: {
    isLapTrue: function(){
      this.$store.commit('isLapTrue')
    }
  },
}

</script>

<style>
  .lap{
    text-align: center;
    font-size: 1.5em;
    text-align: center;
    margin: auto;
    width: 30%;
    border: 1px solid #f37777;
    padding: 10px;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    margin-bottom: 4px;
  }
</style>
