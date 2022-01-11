import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isActive: false,
        stop: true,
        lap: false,
        timeArray: [],
        millisecs1: 0,
        millisecs2: 0,
        seconds1: 0,
        seconds2: 0,
        minutes1: 0,
        minutes2: 0,
        hours1: 0,
        hours2: 0,
    },
    mutations: {

        incrementMillisecs1: state => {
            var intervalMillisecs1 = setInterval (() => {
                if (state.millisecs1 < 9){
                //check if the user clicked in stop before to enter in the loop
                if (state.stop){
                    clearInterval(intervalMillisecs1);
                    return
                } 
                state.millisecs1 = state.millisecs1 + 1;
                }
                else {
                state.millisecs1 = 0;
                }
            }, 10);   
        },

        incrementMillisecs2: state => {
            var intervalMillisecs2 = setInterval (() => {
                if (state.millisecs2 < 9){
                  if (state.stop){
                    clearInterval(intervalMillisecs2);
                    return
                  } 
                state.millisecs2 = state.millisecs2 + 1;
                }
                else {
                  state.millisecs2 = 0;
                }
            }, 100);
        },

        incrementSeconds1: state => {
            var intervalSeconds1 = setInterval (() => {
              if (state.stop){
                  clearInterval(intervalSeconds1);
                  return
              } 
              if (state.seconds1 < 9){
                state.seconds1 = state.seconds1 + 1;
              }
              else {
                state.seconds1 = 0;
              }
            }, 1000);   
        },
        
        incrementSeconds2: state => {
            var intervalSeconds2 = setInterval (() => {
              if (state.seconds2 < 5){
                if (state.stop){
                  clearInterval(intervalSeconds2);
                  return state.seconds2;
                } 
                state.seconds2 = state.seconds2 + 1;
              }
              else {
                state.seconds2 = 0;
              }
            }, 10000);   
        },

        incrementMinutes1: state => {
            var intervalMinutes1 = setInterval (() => {
              if (state.minutes1 < 9){
                if (state.stop){
                  clearInterval(intervalMinutes1);
                  return
                } 
                state.minutes1 = state.minutes1 + 1;
              }
              else {
                state.minutes1 = 0;
              }
            }, 60000);   
        },

        incrementMinutes2: state => {
            var intervalMinutes2 = setInterval (() => {
              if (state.minutes2 < 9){
                if (state.stop){
                  clearInterval(intervalMinutes2);
                  return
                } 
                state.minutes2 = state.minutes2 + 1;
              }
              else {
                state.minutes2 = 0;
              }
            }, 600000);   
        },
        
        incrementHours1: state => {
            var intervalHours1 = setInterval (() => {
              if (state.hours1 < 9){
                if (state.stop){
                  clearInterval(intervalHours1);
                  return
                } 
                state.hours1 = state.hours1 + 1;
              }
              else {
                state.hours1 = 0;
              }
            }, 3600000);
        },

        incrementHours2: state => {
            var intervalHours2 = setInterval (() => {
              if (state.hours2 < 9){
                if (state.stop){
                  clearInterval(intervalHours2);
                  return
                } 
                state.hours2 = state.hours2 + 1;
              }
              else {
                state.hours2 = 0;
              }
            }, 36000000);
        },
        
        conditionstopTrue: state => {
            state.stop = true;
        },

        conditionstopFalse: state => {
            state.stop = false;
        },

        disableButton: state => {
            state.isActive = true;
        },
        isLapTrue: state => {
          state.lap = true;
          return state.timeArray.push( '' + state.hours2 + state.hours1 + ':' + state.minutes2 + state.minutes1 + ':' + state.seconds2 + state.seconds1 + ':' + state.millisecs2 + state.millisecs1 )
        }
    }
})

export default store;