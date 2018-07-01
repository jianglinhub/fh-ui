<template>
  <el-button type="primary" icon="el-icon-close" @click="close">关闭</el-button>
</template>

<script>
export default {
  name: 'close',
  methods: {
    close() {
      window.close();
    },
  },
};
</script>
