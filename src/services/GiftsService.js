import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { sandboxApi } from "./AxiosService.js"



class GiftsService {


    async getGifts() {
        const res = await sandboxApi.get('api/gifts')
        logger.log(res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
        logger.log(AppState.gifts, 'appstate gifts')
    }

    async openGift(giftId) {
        let found = AppState.gifts.find(g => g.id == giftId)
        found.opened = true
        logger.log(found)
        const res = await sandboxApi.put(`api/gifts/${giftId}`, found)
        logger.log(res.data)
        let index = AppState.gifts.findIndex(g => g.id == giftId)
        AppState.gifts.splice(index, 1, new Gift(res.data))
    }

}

export const giftsService = new GiftsService()