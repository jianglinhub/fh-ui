<template>
  <el-button type="primary" icon="el-icon-circle-check" @click="click">确认选择</el-button>
</template>

<script>
export default {
  name: 'confirm-select',
  methods: {
    click() {
      this.$emit('handleConfirmSelect');
    },
  },
};
</script>
