<template>
  <div id="btn-left-group">
    <el-button-group>
      <add v-if="btns.includes('add')" :options="options.addOptions"></add>
      <update v-if="btns.includes('update')" :options="options.updateOptions"></update>
      <save v-if="btns.includes('save')" :options="options.saveOptions"></save>
      <delete
        v-if="btns.includes('del')"
        @deleteAction="doHandle"
      ></delete>
      <audit
        v-if="btns.includes('audit')"
        :options="options.auditOptions"
        @auditAction="auditAction"
      ></audit>
      <check v-if="btns.includes('check')" :options="options.checkOptions"></check>
      <start-use
        v-if="btns.includes('startUse')"
        :options="options.startUseOptions"
        @startUseAction="doHandle">
      </start-use>
      <submit v-if="btns.includes('submit')" :options="options.submitOptions"></submit>
      <import v-if="btns.includes('imp')" :options="options.importOptions"></import>
      <export v-if="btns.includes('exp')" :options="options.exportOptions"></export>
      <confirm-select
        class="confirm-select"
        v-if="btns.includes('confirmSelect')"
        :options="options.confirmSelectOptions">
      </confirm-select>
    </el-button-group>
    <!-- 确认操作弹窗 -->
    <el-dialog
      :title="`${actionName}提示`"
      :visible.sync="noticeDialogVisible"
      :before-close="handleNoticeClose"
      width="30%">
      <span>是否确认{{actionName}}所选数据？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleNoticeClose">取 消</el-button>
        <el-button type="primary" @click="handleNoticeConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 审核弹窗 -->
    <el-dialog
      title="审核意见"
      :visible.sync="auditDialogVisible"
      :before-close="handleAuditClose"
      width="460px">
      <div>
        <div>
          <span
            style="display:inline-block;margin-right:10px;width:80px;text-align:right;">
          审核意见</span>
          <el-radio v-model="auditRadio" label="1">通过</el-radio>
          <el-radio v-model="auditRadio" label="2">驳回</el-radio>
        </div>
        <div style="margin-top:12px;overflow:hidden;">
          <span
            style="display:inline-block;float:left;
              margin-right:10px;width:80px;height:40px;text-align:right;">
            附件</span>
          <el-upload
            style="width:300px;display:inline-block;overflow:hidden;"
            :action="uploadUrl"
            :on-remove="handleRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        </div>
        <div style="margin-top:12px;">
          <span
            style="display:inline-block;margin-right:10px;width:80px;height:74px;text-align:right;"
          >备注</span>
          <el-input
            type="textarea"
            :rows="3"
            style="width: 300px;"
            placeholder="请输入内容">
          </el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleAuditClose">取 消</el-button>
        <el-button type="primary" @click="handleAuditConfirm">确 定</el-button>
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
      actionName: '删除',
      noticeDialogVisible: false,
      auditDialogVisible: false,
      uploadUrl: '',
      auditRadio: '1',
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
    auditAction(data) {
      this.auditDialogVisible = true;
      this.uploadUrl = data.action;
    },
    doHandle(data) {
      this.noticeDialogVisible = true;
      this.actionName = data.actionName;
    },
    handleNoticeClose() {
      this.noticeDialogVisible = false;
      if (this.actionName === '删除') {
        this.$emit('handleDelClose');
      } else if (this.actionName === '启用') {
        this.$emit('handleStartUseClose');
      }
    },
    handleNoticeConfirm() {
      this.noticeDialogVisible = false;
      if (this.actionName === '删除') {
        this.$emit('handleDelConfirm');
      } else if (this.actionName === '启用') {
        this.$emit('handleStartUseConfirm');
      }
    },
    handleAuditClose() {
      this.auditDialogVisible = false;
      this.$emit('handleAuditClose');
    },
    handleAuditConfirm() {
      this.auditDialogVisible = false;
      this.$emit('handleAuditConfirm');
    },
    handleRemove(file, fileList) {
      console.log(file, fileList); // eslint-disable-line
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
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
