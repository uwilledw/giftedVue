<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-3 bg-info" v-model="">
        <GiftForm :giftForm="gift"/>
      </div>
      <div class="col-9">
        <section class="row justify-content-evenly">
          <div class="col-3 rounded elevation-5 m-3" v-for="giftFromVFor in gifts" :key="giftFromVFor">
            <GiftCard :giftProp="giftFromVFor" />
          </div>
          <div class="col-3"></div>
          <div class="col-3"></div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js'
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js';
import GiftCard from '../components/GiftCard.vue'


export default {
  setup() {

    async function getGifts() {
      try {
        await giftsService.getGifts()
        AppState.gifts[2].opened = false
      }
      catch (error) {
        logger.error(error.message)
      }
    }

    onMounted(() => {
      getGifts();
      logger.log('getting movies on mount')
    });

    return {
      gifts: computed(() => AppState.gifts),

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
