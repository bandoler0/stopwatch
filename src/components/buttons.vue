<template>
  <div id="buttons">
    <button :disabled="this.$store.state.isActive" v-on:click="startbutton();" class="button">START</button>
    <button :disabled="!this.$store.state.isActive" v-on:click="conditionstopTrue()" class="button">STOP</button>
    <button v-on:click="isLapTrue()" class="button">LAP</button>
    <button v-on:click="resetButton()" class="button">RESET</button>
  </div>
</template>

<script>
export default {
  methods: {

    startbutton: function(){
      this.disableButton();
      this.conditionstopFalse();
      this.incrementMillisecs1();
      this.incrementMillisecs2();
      this.incrementSeconds1();
      this.incrementSeconds2();
      this.incrementMinutes1();
      this.incrementMinutes2();
      this.incrementHours1();
      this.incrementHours2();
    },
    incrementMillisecs1: function(){
      this.$store.commit('incrementMillisecs1')   
    },
    incrementMillisecs2: function(){
      this.$store.commit('incrementMillisecs2')   
    },
    incrementSeconds1: function(){
        this.$store.commit('incrementSeconds1')  
    },
    incrementSeconds2: function(){
        this.$store.commit('incrementSeconds2')  
    },
    incrementMinutes1: function(){
      this.$store.commit('incrementMinutes1')  
    },
    incrementMinutes2: function(){
      this.$store.commit('incrementMinutes2')   
    },
    incrementHours1: function(){
        this.$store.commit('incrementHours1')   
    },
    incrementHours2: function(){
        this.$store.commit('incrementHours2')     
    },

    conditionstopTrue: function(){
      this.$store.commit('conditionstopTrue')
    },

    conditionstopFalse: function(){
      this.$store.commit('conditionstopFalse')
    },

    disableButton: function(){
      this.$store.commit('disableButton')
    },
    isLapTrue: function(){
      this.$store.commit('isLapTrue')
    },
    resetButton: function(){
      location.reload();
    }
  }
}
</script>

<style>
#buttons{
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px; 
}

.button{
  display: inline-block;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px #999;
}

button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(1px);
}
</style>
