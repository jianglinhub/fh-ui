<template>
  <el-button type="primary" icon="el-icon-check" @click="click">保存</el-button>
</template>

<script>
export default {
  name: 'save',
  methods: {
    click() {
      this.$emit('handleSave');
    },
  },
};
</script>
