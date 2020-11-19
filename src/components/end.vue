<template>
  <div class="end">
    <div class="bannerBox" v-for="banner in banners" v-bind:key="banner.id">
      <div
        :style="{
          backgroundImage: 'url(' + banner.image_url + ')',
          width: '540px',
          height: '180px',
          backgroundSize: 'cover',
        }"
      />

      <EndSlot>
        <!-- Vue - slot 활용하기 -->
      </EndSlot>
    </div>
  </div>
</template>

<script>
// Vue를 이용해서 브랜디 API를 연동해보기 2 (복합)
// 기존 이미지들은 로컬에 있는 mock data를 받아오고 있습니다. 이 것을 실제 api와 연결해 주세요.
// api 연동은 async await 를 이용합니다.
// end.vue 컴포넌트에서는 기획전 종료된 API 데이터로 연동시켜 봅시다.
const axios = require("axios");
const url = "{{url}}";
const token =
  "{{token}}";

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
}
</style>
