<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        value="1"
        @change="countChanged"
        ref="numbox"
      >
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from "../../../static/mui/js/mui.min.js";

export default {
  // 初始化数字选择框
  mounted() {
    mui(".mui-numbox").numbox();
  },

  methods: {
    countChanged() {
      
    }
  },
  props: ["max"],
  
};
</script>

<style lang="scss" scoped>
.mui-numbox{
    height: 25px;
    margin: 0 6px;
}
</style>
