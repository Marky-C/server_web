<template>
  <div class="loading">
    <div class="loading-content">
      <transition name="opacity-effect">
        <div v-show="showElem[0]" class="loading-content-name">Millennium<span class="loading-content-name__mark">pre-alpha</span></div>
      </transition>
      <transition name="opacity-effect">
        <div v-show="showElem[1]" class="loading-content-bar">
          <div class="loading-content-bar__indicator"></div>
        </div>
        </transition>
      <transition name="opacity-effect">
        <div v-show="showElem[2]" class="loading-content__help">
          {{ loadingStep }}<br><br>
            <div v-for="(step, index) in loadingHistory" :key="index">{{ step }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Loading',
  data() {
    return {
      showElem: [false, false, false]
    }
  },
  computed:{
    ...mapState('loading', [
      'loadingStep',
      'loadingHistory'
    ])
  },
  methods:{
    
  },
  components: {
    
  },
  mounted(){
    setTimeout(() => {
      this.showElem.splice(0, 1, true)
    }, 900)

    setTimeout(() => {
      this.showElem.splice(1, 1, true)
      this.showElem.splice(2, 1, true)
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>

.opacity-effect-enter-active {
  transition: opacity 2s;
}
.opacity-effect-leave-active {
  transition: opacity 2s;
}
.opacity-effect-enter  {
  opacity: 0;
}
.opacity-effect-leave-to {
  opacity: 0;
}

.loading {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  background-color: #1B1A1A;
  display: flex;
  justify-content: center;

  &-content {
    text-align: center;
    align-self: center;

    height: 7.2rem;

    &-name {
      font-style: normal;
      font-weight: 325;
      font-size: 2.4rem;

      letter-spacing: 0.155em;

      &__mark {
        font-style: normal;
        font-weight: 325;
        font-size: 1rem;
        letter-spacing: 0em;
        vertical-align: text-top;
        color: #979797;
      }
    }

    &-bar {
      width: 30.5rem;
      height: 0.25rem;

      background: #313131;
      border-radius: 1rem;

      margin-top: 3.25rem;
      margin-bottom: 1.25rem;

      overflow: hidden;

      &__indicator {
        @keyframes loadingAnim {
          from {
            transform: translateX(-4rem);
          }

          to {
            transform: translateX(31rem);
          }
        }

        width: 4rem;
        height: 0.25rem;
        border-radius: 1rem;

        background: #FFFFFF;

        animation: loadingAnim 2s infinite;
      }
    }

    &__help {
      font-style: normal;
      font-weight: normal;
      font-size: 0.9rem;
      letter-spacing: 0.055em;

      color: #8D8D8D;
    }
  }
}

</style>
