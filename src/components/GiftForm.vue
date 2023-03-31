


<template>
    <form class="d-flex flex-wrap pt-3" @submit="newGift()">
        <div class="mb-2 col-12">
            <label for="tag">Tag</label>
            <input type="text" name="tag" id="tag" class="form-control" required minlength="3" maxlength="30"
                placeholder="Your Memes Here...">
        </div>
        <div class="mb-2 col-12">
            <label for="url">Url</label>
            <input type="url" name="url" id="url" class="form-control" required
                placeholder="please enter a url for an image...">
        </div>
        <button class="btn btn-success mt-3" type="submit" title="create report">Submit</button>
    </form>
</template>
<script>
import { logger } from '../utils/Logger.js';


export default {
    formProp: { required: true },

    setup() {

        async function newGift() {
            try {
                
            } catch (error) {
                logger.error(error.message)
            }
        }

        return {};
    },
};
</script>
<style></style>