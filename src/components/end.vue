
<template>
  <div class="end">
    <div class="bannerBox" v-for="banner in banners" v-bind:key="banner.id">

      <!-- Vue를 이용해서 브랜디 API를 연동해보기 2 (복합) -->
      <!-- 받아온 image_url 은 img 태그가 아닌, div에 inline style backgroundImg로 구현합니다. -->
      <!-- 사진의 레이아웃을 아래 사진과 같이 2개씩 나오게 해봅시다. -->

      <img :src="banner.image_url" class="imgBox" />

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

import bannersData from "../../static/endBannersImg.json";

export default {
  data() {
    return {
      banners: bannersData
    };
  },

};
</script>

<style lang="scss">

// Vue를 이용해서 브랜디 API를 연동해보기 2 (복합)
// 사진의 레이아웃을 아래 사진과 같이 2개씩 나오게 해봅시다.


</style>