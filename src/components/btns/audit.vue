<template>
  <el-button type="primary" icon="el-icon-view" @click="click">审核</el-button>
</template>

<script>
export default {
  name: 'audit',
  methods: {
    click() {
      this.$emit('handleAudit');
    },
  },
};
</script>
