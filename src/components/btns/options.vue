<template>
  <el-button type="primary" icon="el-icon-setting" @click="click">选项</el-button>
</template>

<script>
export default {
  name: 'options',
  methods: {
    click() {
      this.$emit('handleOptions');
    },
  },
};
</script>
