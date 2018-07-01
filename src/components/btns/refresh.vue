<template>
  <el-button type="primary" icon="el-icon-refresh" @click="refresh">刷新</el-button>
</template>

<script>
export default {
  name: 'refresh',
  methods: {
    refresh() {
      window.location.reload();
    },
  },
};
</script>
