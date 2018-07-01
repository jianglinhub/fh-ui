<template>
  <div id="btn-left-group">
    <el-button-group>
      <add v-if="btns.includes('add')" :options="options.addOptions"></add>
      <update v-if="btns.includes('update')" :options="options.updateOptions"></update>
      <save v-if="btns.includes('save')" :options="options.saveOptions"></save>
      <delete
        v-if="btns.includes('del')"
        :options="options.delOptions"
        @deleteAction="doHandle"
      ></delete>
      <audit v-if="btns.includes('audit')" :options="options.auditOptions"></audit>
      <check v-if="btns.includes('check')" :options="options.checkOptions"></check>
      <start-use v-if="btns.includes('startUse')" :options="options.startUseOptions"></start-use>
      <submit v-if="btns.includes('submit')" :options="options.submitOptions"></submit>
      <import v-if="btns.includes('imp')" :options="options.importOptions"></import>
      <export v-if="btns.includes('exp')" :options="options.exportOptions"></export>
      <confirm-select
        class="confirm-select"
        v-if="btns.includes('confirmSelect')"
        :options="options.confirmSelectOptions">
      </confirm-select>
    </el-button-group>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      width="30%">
      <span>确定要{{actionName}}【id={{id}}】的项吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
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
  data() {
    return {
      id: '-1',
      actionName: '删除',
      dialogVisible: false,
    };
  },
  props: {
    btns: {
      type: Array,
      default: () => [],
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {
          addOptions: {},
          updateOptions: {},
          delOptions: {},
          auditOptions: {},
          checkOptions: {},
          submitOptions: {},
          saveOptions: {},
          startUseOptions: {},
          exportOptions: {},
          importOptions: {},
          confirmSelectOptions: {},
        };
      },
      required: true,
    },
  },
  methods: {
    doHandle(data) {
      this.dialogVisible = true;
      this.id = data.id;
      this.actionName = data.actionName;
    },
    handleClose() {
      this.dialogVisible = false;
      if (this.actionName === '删除') {
        this.$emit('handleDelClose');
      }
    },
    handleConfirm() {
      this.dialogVisible = false;
      if (this.actionName === '删除') {
        this.$emit('handleDelConfirm');
      }
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
