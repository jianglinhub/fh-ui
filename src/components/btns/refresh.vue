<template>
  <el-button type="primary" icon="el-icon-refresh" @click="click">刷新</el-button>
</template>

<script>
export default {
  name: 'refresh',
  methods: {
    click() {
      this.$emit('handleRefresh');
    },
  },
};
</script>
