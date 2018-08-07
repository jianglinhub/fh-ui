<template>
  <el-button type="primary" icon="el-icon-edit" @click="click">批改</el-button>
</template>

<script>
export default {
  name: 'check',
  methods: {
    click() {
      this.$emit('handleCheck');
    },
  },
};
</script>
