<template>
  <div id="btn-left-group">
    <el-button-group>
      <refresh
        v-if="btns.includes('refresh')"
        @handleRefresh="handleClick('handleRefresh')">
      </refresh>
      <prev v-if="btns.includes('prev')" @handlePrev="handleClick('handlePrev')"></prev>
      <next v-if="btns.includes('next')" @handleNext="handleClick('handleNext')"></next>
      <options
        v-if="btns.includes('options')"
        @handleOptions="handleClick('handleOptions')">
      </options>
      <print v-if="btns.includes('print')" @handlePrint="handleClick('handlePrint')"></print>
      <close v-if="btns.includes('close')" @handleClose="handleClick('handleClose')"></close>
    </el-button-group>
  </div>
</template>

<script>
import Refresh from '../btns/refresh';
import Prev from '../btns/prev';
import Next from '../btns/next';
import Options from '../btns/options';
import Print from '../btns/print';
import Close from '../btns/close';

export default {
  props: {
    btns: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(obj) {
      this.$emit(obj);
    },
  },
  components: {
    Refresh,
    Prev,
    Next,
    Options,
    Print,
    Close,
  },
};
</script>

<style lang="less" scoped>
  #btn-left-group {
    .el-button {
      width: 80px;
      padding: 9px 15px;
      width: 82px;
      height: 32px;
      font-size: 12px;
    }
  }
</style>
