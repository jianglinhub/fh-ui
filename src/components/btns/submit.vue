<template>
  <el-button type="primary" icon="el-icon-upload2" @click="click">提交</el-button>
</template>

<script>
export default {
  name: 'submit',
  methods: {
    click() {
      this.$emit('handleSubmit');
    },
  },
};
</script>
