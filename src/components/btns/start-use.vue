<template>
  <el-button type="primary" icon="el-icon-remove-outline" @click="click">启用</el-button>
</template>

<script>
export default {
  name: 'start-use',
  methods: {
    click() {
      this.$emit('handleStartUse');
    },
  },
};
</script>
