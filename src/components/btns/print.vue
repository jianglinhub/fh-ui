<template>
  <el-button type="primary" icon="el-icon-printer" @click="click">打印</el-button>
</template>

<script>
export default {
  name: 'print',
  methods: {
    click() {
      this.$emit('handlePrint');
    },
  },
};
</script>
