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
      // 监听文本框数据是否被修改 如果修改 立即把最新的数据 通过事件调用 传递给父组件
      // console.log(this.$refs.numbox.value)
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"],
  watch: {
    // 监听 max 变化
    max: (newVal, oldVal) => {
      // 用numbox 的JS API 重新设置max
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
