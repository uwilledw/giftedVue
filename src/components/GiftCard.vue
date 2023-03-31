

<template>
    <img v-if="giftProp?.opened" class="img-fluid" :src="giftProp?.url" alt="">
    <img @click="openGift(giftProp.id)" v-else class="img-fluid"
        src="https://th.bing.com/th/id/OIP.qcx8NchLcw6y5wOK-KUkwAHaHo?pid=ImgDet&rs=1" alt="">
    <p>{{ giftProp?.tag }}</p>
</template>


<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';



export default {
    props: {
        giftProp: { type: Gift, required: true }
    },

    setup() {

        async function openGift(giftId) {
            try {
                await giftsService.openGift(giftId)
            } catch (error) {
                logger.log(error.message)
            }
        }

        return {
            openGift


        };
    },
};
</script>

<style ></style>