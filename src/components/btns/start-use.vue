<template>
  <el-button type="primary" icon="el-icon-remove-outline" @click="handleClick">启用</el-button>
</template>

<script>
export default {
  name: 'start-use',
  props: {
    options: {
      type: Object,
      default() {},
      required: true,
    },
  },
  methods: {
    handleClick() {
      const params = {
        id: this.options.id,
        actionName: '启用',
      };
      this.$emit('startUseAction', params);
    },
  },
};
</script>
