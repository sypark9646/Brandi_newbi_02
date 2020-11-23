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
        
        
      >
      <!-- :v-bind="likeState[index]" -->
      <!-- :v-model="likeHandle[index]" -->
        {{likeState[index].active}}
        {{index}}
        <img
          v-if="likeState[index].active"
          class="icon"
          src="https://www.flaticon.com/svg/static/icons/svg/929/929417.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      for (let i=0; i<30; i++) {
        this.likeState.push({active: false})
      }
    },
    likeHandle(index) {
      console.log(index);
      this.likeState[index]['active'] = !this.likeState[index]['active']
      console.log(this.likeState, this.likeState[index])

      return 

      this.likeState[index] = !this.likeState[index];
      console.log(this.likeState, this.likeState[index])
      // this.$forceUpdate();
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
