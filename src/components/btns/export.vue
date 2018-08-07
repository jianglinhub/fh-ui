<template>
  <el-button type="primary" @click="click">
    导出<i class="el-icon-download el-icon--right"></i>
  </el-button>
</template>

<script>
export default {
  name: 'export',
  methods: {
    click() {
      this.$emit('handleExport');
    },
  },
};
</script>
