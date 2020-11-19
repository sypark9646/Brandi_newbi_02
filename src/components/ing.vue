<template>
  <div class="ing">
    <div
      class="bannerBox"
      v-for="(banner, index) in banners"
      v-bind:key="index"
    >
      <div
        :style="{
          backgroundImage: 'url(' + banner.image_url + ')',
          width: '540px',
          height: '180px',
          backgroundSize: 'cover',
        }"
        @click="likeHandle(index)"
        :v-model="likeHandle[index]"
        :v-bind="likeState[index]"
      >
        <!-- Vue v-if 활용하기 (복합)  -->
        <!-- 진행중 기획전 배너 이미지를 클릭하면 v-if를 이용하여 하트 이미지가 나오게 구현해주세요. -->
        <!-- 처음 누르면 하트가 생기고, 다시 누르면 하트가 없어지도록 구현해주세요. -->
        <img
          v-if="likeState[index]"
          class="icon"
          src="https://www.flaticon.com/svg/static/icons/svg/929/929417.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Vue를 이용해서 브랜디 API를 연동해보기 2 (복합)
// 기존 이미지들은 로컬에 있는 mock data를 받아오고 있습니다. 이 것을 실제 api와 연결해 주세요.
// api 연동은 async await 를 이용합니다.
const axios = require("axios");
const url = "{{url}}";
const token =
  "{{token}}";

export default {
  data() {
    return {
      banners: null,
      likeState: [],
    };
  },
  mounted() {
    this.getBrandiIngData();
    this.initializeLikeState();
  },
  methods: {
    async getBrandiIngData() {
      let config = {
        headers: {
          Authorization: token,
        },
      };
      const result = await axios.get(url, config);
      this.banners = result.data.data;
    },
    initializeLikeState() {
      this.likeState = new Array(30).fill(false);
    },
    likeHandle(index) {
      console.log(index);
      this.likeState[index] = !this.likeState[index];
      this.$forceUpdate();
    },
  },
};
</script>

<style lang="scss">
.ing {
  width: 100%;
  .bannerBox {
    position: relative;
    display: inline-grid;
    grid-template-columns: auto auto;
    padding: 10px;
    .icon {
      position: absolute;
      top: 75%;
      left: 90%;
      width: 7%;
      text-align: right;
      padding-right: 5px;
    }
  }
}
</style>
