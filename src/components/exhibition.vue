<template>
  <div class="exhibition">
    <div class="menu">
      <div class="notIng" @click="routerReplace('/ing')">
        <p :class="{ ingMenu: isActiveIng }">
          진행중
        </p>
      </div>
      <div class="notEnd" @click="routerReplace('/end')">
        <p :class="{ endMenu: !isActiveIng }">
          종료
        </p>
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
      isActiveIng: true,
    };
  },
  mounted() {
    let path = this.$route.path;
    console.log(path);
    if (this.$route.path == "/" || this.$route.path == "/ing") {
      console.log("진행중");
      this.isActiveIng = true;
    } else {
      console.log("완료");
      this.isActiveIng = false;
    }
  },
  methods: {
    routerReplace(path) {
      // router를 이용하여 로컬호스트를 띄우면 바로 ing.vue 컴포넌트의 내용이 나오게 해줍니다.
      if (this.$route.path != path) {
        this.$router.push({ path });
      }

      if (path == "/ing") {
        this.isActiveIng = true;
      } else if (path == "/end") {
        this.isActiveIng = false;
      }
    },
  },
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
      margin: unset;
    }
  }
  .notIng,
  .notEnd {
    width: 50%;
    text-align: center;

    font-size: 15px;
    line-height: 60px;
    border-bottom: 1px solid lightgray;
    color: lightgray;
    border-color: lightgray;

    p {
      margin: unset;
    }
  }
}
</style>
