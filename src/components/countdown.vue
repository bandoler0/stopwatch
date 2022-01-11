<template>
  <div id="countdown">
    <div class="border">
      <p>{{ hours2 }}{{ hours1 }}:{{ minutes2 }}{{ minutes1 }}:{{ seconds2 }}{{ seconds1 }}:{{ millisecs2 }}{{ millisecs1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
  },
}
</script>

<style>
#countdown{
  font-size: 3.0em;
  text-align: center;
}

.border {
  margin: auto;
  width: 30%;
  border: 3px solid #000000;
  padding: 10px;
  border-radius: 8px;
  background-color: rgb(219, 219, 219);
}
</style>
