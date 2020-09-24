<template>
  <div class="exhibition">
    <div class="menu">

      <!-- Vue styleBind 활용하기 (복합) -->
      <!-- vue 스타일 바인딩 개념을 이용하여 화면 진행중 탭을 누르면 진행중 탭 글자와 밑선이 빨갛게 스타일링을 해주고, 종료 탭은 글자와 밑선이 검게 스타일링 해줍니다. -->
      
      <div>
        <p>진행중</p>
      </div>
      <div>
        <p>종료</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "exhibition",
  data() {
    return {

    };
  },
  methods: {
    routerPush(path){

    // Vue styleBind 활용하기 (복합)
    // router를 이용하여 로컬호스트를 띄우면 바로 ing.vue 컴포넌트의 내용이 나오게 해줍니다.
    
    }
  }
};
</script>
<style lang="scss" scoped>
.exhibition {
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .menu {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
  }
  .ingMenu,
  .endMenu {
    width: 50%;
    text-align: center;

    font-size: 15px;
    line-height: 60px;
    border-bottom: 2px solid #ff204b;
    color: #ff204b;
    border-color: #ff204b;

    p {
      margin: unset
    }
  }
  .notIng, .notEnd {
    width: 50%;
    text-align: center;

    font-size: 15px;
    line-height: 60px;
    border-bottom: 1px solid lightgray;
    color: lightgray;
    border-color: lightgray;

    p {
      margin: unset
    }
  }
}
</style>

