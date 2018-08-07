<template>
  <el-button type="primary" icon="el-icon-arrow-left" @click="click">上一行</el-button>
</template>

<script>
export default {
  name: 'prev',
  methods: {
    click() {
      this.$emit('handlePrev');
    },
  },
};
</script>
