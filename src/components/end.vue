<template>
  <div class="end">
    <div class="bannerBox" v-for="banner in banners" v-bind:key="banner.id">
      <div>
        <div
          :style="{
            backgroundImage: 'url(' + banner.image_url + ')',
            width: '540px',
            height: '180px',
            backgroundSize: 'cover',
          }"
        />
        <EndSlot>
          <div slot:endHeader class="text-align">
            안녕하십니까 고객님
          </div>
          <div slot:endSection class="text-align">
            {{ banner.id }} 기획전은 이미 종료되었습니다.
          </div>
          <div slot:endFooter>
            찾아주셔서 감사합니다.
          </div>
        </EndSlot>
      </div>
    </div>
  </div>
</template>

<script>
import EndSlot from "./endSlot.vue";

const axios = require("axios");
const url = "{{url}}";
const token = "{{token}}";

export default {
  mounted() {
    this.getBrandiEndData();
  },
  data() {
    return {
      banners: null,
    };
  },
  methods: {
    async getBrandiEndData() {
      let config = {
        headers: {
          Authorization: token,
        },
      };
      const result = await axios.get(url, config);
      this.banners = result.data.data;
    },
    likeHandle(id) {},
  },
};
</script>

<style lang="scss">
.end {
  width: 100%;
  .bannerBox {
    display: inline-grid;
    grid-template-columns: auto auto;
    padding: 10px;
  }
  .text-align {
    text-align: center;
  }
}
</style>
