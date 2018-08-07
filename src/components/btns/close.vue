<template>
  <el-button type="primary" icon="el-icon-close" @click="click">关闭</el-button>
</template>

<script>
export default {
  name: 'close',
  methods: {
    click() {
      this.$emit('handleClose');
    },
  },
};
</script>
