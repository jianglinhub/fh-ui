<template>
  <el-button type="primary" @click="click">
    下一行<i class="el-icon-arrow-right el-icon--right"></i>
  </el-button>
</template>

<script>
export default {
  name: 'next',
  methods: {
    click() {
      this.$emit('handleNext');
    },
  },
};
</script>
