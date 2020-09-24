<template>
  <div class="ing">
    <div class="bannerBox" v-for="( banner ) in banners" v-bind:key="banner.id">

      <!-- Vue를 이용해서 브랜디 API를 연동해보기 2 (복합) -->
      <!-- 받아온 image_url 은 img 태그가 아닌, div에 inline style backgroundImg로 구현합니다. -->
      <!-- 사진의 레이아웃을 아래 사진과 같이 2개씩 나오게 해봅시다. -->

      <img :src="banner.image_url" class="imgBox" />

      <!-- Vue v-if 활용하기 (복합)  -->
      <!-- 진행중 기획전 배너 이미지를 클릭하면 v-if를 이용하여 하트 이미지가 나오게 구현해주세요. -->
      <!-- 처음 누르면 하트가 생기고, 다시 누르면 하트가 없어지도록 구현해주세요. -->

      <img src="https://www.flaticon.com/svg/static/icons/svg/929/929417.svg" />
    </div>
  </div>
</template>

<script>

// Vue를 이용해서 브랜디 API를 연동해보기 2 (복합)
// 기존 이미지들은 로컬에 있는 mock data를 받아오고 있습니다. 이 것을 실제 api와 연결해 주세요.
// api 연동은 async await 를 이용합니다.

import bannersData from "../../static/ingBannersImg.json";

export default {
  data() {
    return {
      banners: bannersData,
      likeState: []
    };
  },

  methods: {
    likeHandle(id) {}
  }
};
</script>

<style lang="scss">

// Vue를 이용해서 브랜디 API를 연동해보기 2 (복합)
// 사진의 레이아웃을 아래 사진과 같이 2개씩 나오게 해봅시다.

</style>