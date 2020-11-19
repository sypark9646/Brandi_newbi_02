<template>
  <div class="endSlot">
    <slot name="endHeader"> </slot>
    <slot name="endSection"> </slot>
    <slot name="endFooter"> </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finishedId: null,
    };
  },
};
</script>

<style lang="scss">
.endSlot {
  font-size: small;
  text-align: center;
  color: gray;
}
</style>
