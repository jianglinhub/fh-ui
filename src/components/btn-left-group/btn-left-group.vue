<template>
  <div id="btn-left-group">
    <el-button-group>
      <add v-if="btns.includes('add')" @handleAdd="handleClick('handleAdd')"></add>
      <update v-if="btns.includes('update')" @handleUpdate="handleClick('handleUpdate')"></update>
      <save v-if="btns.includes('save')" @handleSave="handleClick('handleSave')"></save>
      <delete v-if="btns.includes('del')" @handleDelete="handleClick('handleDelete')"></delete>
      <audit v-if="btns.includes('audit')" @handleAudit="handleClick('handleAudit')"></audit>
      <check v-if="btns.includes('check')" @handleCheck="handleClick('handleCheck')"></check>
      <start-use
        v-if="btns.includes('startUse')"
        @handleStartUse="handleClick('handleStartUse')">
      </start-use>
      <submit v-if="btns.includes('submit')" @handleSubmit="handleClick('handleSubmit')"></submit>
      <import v-if="btns.includes('imp')" @handleImport="handleClick('handleImport')"></import>
      <export v-if="btns.includes('exp')" @handleExport="handleClick('handleExport')"></export>
      <confirm-select
        class="confirm-select"
        v-if="btns.includes('confirmSelect')"
        @handleConfirmSelect="handleClick('handleConfirmSelect')">
      </confirm-select>
    </el-button-group>
  </div>
</template>

<script>
import Add from '../btns/add';
import Delete from '../btns/delete';
import Update from '../btns/update';
import Audit from '../btns/audit';
import Check from '../btns/check';
import Submit from '../btns/submit';
import Save from '../btns/save';
import StartUse from '../btns/start-use';
import Export from '../btns/export';
import Import from '../btns/import';
import ConfirmSelect from '../btns/confirm-select';

export default {
  props: {
    btns: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    handleClick(obj) {
      this.$emit(obj);
    },
  },
  components: {
    Add,
    Delete,
    Update,
    Audit,
    Check,
    ConfirmSelect,
    Export,
    Import,
    Save,
    StartUse,
    Submit,
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
      &.confirm-select {
        width: 100px;
      }
    }
  }
</style>
