<template>
  <el-button type="primary" @click="click">
    导入<i class="el-icon-upload el-icon--right"></i>
  </el-button>
</template>

<script>
export default {
  name: 'import',
  methods: {
    click() {
      this.$emit('handleImport');
    },
  },
};
</script>
