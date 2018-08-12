<template>
  <div id="base-search">
    <!--
    <div class="text">
      <span>筛选方案</span>
      <span class="selected">默认筛选</span>
    </div>
    -->
    <div class="search">
      <search-sub
        :fields="fields"
        v-for="item in (moreConditions.slice(0, 1))"
        :key="item.randomKey"
        :options="item">
      </search-sub>
      <i class="el-icon-d-arrow-left add-btn" @click="showMoreCondition"></i>
      <el-button type="primary" size="small" style="width:100px;" @click="search">查询</el-button>
      <el-button type="primary" size="small" style="width:100px;" @click="reset">重置</el-button>
      <!--
      <div class="condition-action">
        <span @click="isShowSearchModal = true">保存查询条件</span>
        <span>重置</span>
      </div>
      -->
    </div>
    <transition name="fade">
      <div class="more-condition" v-show="isShowMoreCondition">
        <transition-group tag="ul" name="fade" class="rule-items">
          <li v-for="(item, index) in (moreConditions.slice(1))" :key="item.randomKey">
            <search-sub
              :fields="fields"
              :options="item">
            </search-sub>
            <el-button
              type="primary"
              size="small"
              icon="el-icon-minus"
              class="minus-btn"
              @click="delOne(index + 1)">
            </el-button>
          </li>
        </transition-group>
        <el-button
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="addOne"
          v-show="moreConditions.length < 10">
        </el-button>
      </div>
    </transition>

    <!--
    <el-dialog
      title="筛选方案"
      :visible.sync="isShowSearchModal"
      width="800px">
      <div class="wrapper">
        <div class="search-date">
          <el-button size="small">默认筛选</el-button>
          <el-button type="primary" size="small">今天</el-button>
          <el-button size="small">本周（默认）</el-button>
          <el-button size="small">本月</el-button>
          <el-button size="small">查单号</el-button>
        </div>
        <div class="search-content">
          <div class="save-name">
            方案名称：
            <el-input
              placeholder="请输入内容"
              v-model="value"
              size="small"
              style="width:160px">
            </el-input>
            <el-checkbox>进页面时带入</el-checkbox>
          </div>
          <el-tabs v-model="activeName2" type="card" class="tabs" size="small">
            <el-tab-pane label="筛选条件" name="first">
              <el-table
                class="table-condition"
                :data="tableConditionData"
                style="width:600px"
                border
                size="small">
                <el-table-column
                  prop="date"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="字段">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="条件">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="值">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="逻辑">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="展示字段及顺序" name="second">
              <el-table
                class="table-condition"
                :data="tableConditionData"
                style="width:600px"
                border
                size="small">
                <el-table-column
                  prop="date"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="字段">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="条件">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="值">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="逻辑">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="排序规则" name="third">
              <el-table
                class="table-condition"
                :data="tableConditionData"
                style="width:600px"
                border
                size="small">
                <el-table-column
                  prop="date"
                  label="序号">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="字段">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="条件">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="值">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="逻辑">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-dialog>
    -->
  </div>
</template>

<script>
import SearchSub from './search-sub';

export default {
  data() {
    return {
      moreConditions: [{
        fieldCode: '',
        fileType: 'contain',
        defValue: '',
        logic: 'AND',
        randomKey: 'djdhn&d163',
      }],
      value: '',
      isShowMoreCondition: false,
      isShowSearchModal: false,
      activeName2: 'first',
      tableConditionData: [],
      tmpCondition: {
        fieldCode: '',
        fileType: 'contain',
        defValue: '',
        logic: 'AND',
      },
    };
  },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    moreConditions(val) {
      if (val.length === 10) {
        this.$message({
          message: '目前仅支持10条（包含）以内的查询条件',
          type: 'warning',
        });
      }
    },
  },
  methods: {
    search() {
      const arr = this.handleSeqNo();
      this.$emit('onSearch', arr);
    },
    // 附加seqNo
    handleSeqNo() {
      const conditions = this.copyConditions();
      for (let i = 0; i < conditions.length; i += 1) {
        conditions[i].seqNo = i + 1;
        delete conditions[i].randomKey;
        conditions[i].groupCode = 0;
      }
      return conditions;
    },
    delOne(index) {
      const conditions = this.copyConditions();
      conditions.splice(index, 1);
      this.moreConditions = conditions;
    },
    addOne() {
      const condition = JSON.parse(JSON.stringify(this.tmpCondition));
      condition.randomKey = (Math.random() * 10000).toFixed(4);
      this.moreConditions.push(condition);
    },
    showMoreCondition() {
      this.isShowMoreCondition = !this.isShowMoreCondition;
    },
    copyConditions() {
      return JSON.parse(JSON.stringify(this.moreConditions));
    },
    reset() {
      this.moreConditions = [{
        fieldCode: '',
        fileType: 'contain',
        defValue: '',
        logic: 'AND',
        randomKey: (Math.random() * 10000).toFixed(4),
      }];
    },
  },
  components: {
    SearchSub,
  },
};
</script>

<style lang="less" scoped>
  #base-search {
    border: 1px solid #dcdfe6;
    padding: 10px;
    border-radius: 6px;
    display: inline-block;
    .fade-enter-active, .fade-leave-active {
      transition: all .3s ease;
    }
    .fade-enter, .fade-leave-to {
      transform: translateY(-10px);
      opacity: 0;
    }
    ul {
      margin-top: 0;
      padding-left: 0;
      li {
        margin-bottom: 10px;
        list-style-type: none;
      }
    }
    .text {
      padding: 10px 0 10px 0;
      font-weight: 600;
      cursor: pointer;
      .selected {
        color: #0b24fb;
      }
      span {
        &:hover {
          color: #000;
        }
      }
    }
    .search {
      display: flex;
      flex-direction: row;
      .add-btn {
        vertical-align: middle;
        font-size: 24px;
        margin-left: 10px;
        transform: rotate(-90deg);
        color: #409EFF;
        cursor: pointer;
      }
      .condition-action {
        width: 104px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10px;
        font-size: 12px;
        color: #0b24fb;
        font-weight: 600;
        cursor: pointer;
        span {
          align-self: flex-end;
          &:hover {
            color: #4c59c7;
          }
        }
      }
    }
    .more-condition {
      margin-top: 10px;
      .rule-items {
        li {
          display: flex;
          flex-direction: row;
          .minus-btn {
            margin-left: 10px;
          }
        }
      }
    }
    .wrapper {
      display: flex;
      flex-direction: row;
      .search-date {
        width: 140px;
        height: 400px;
        border: 1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
        align-items: center;
        .el-button {
          margin: 4px auto;
          width: 120px;
          height: 26px;
          padding: 0 0;
          font-size: 11px;
        }
      }
      .search-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        border: 1px solid #f2f2f2;
        padding: 10px;
        margin-left: 10px;
        .save-name {
          width: 60%;
          height: 32px;
          font-size: 12px;
          font-weight: 500;
          display: flex;
          flex-direction: row;
          align-items: center;
          .el-checkbox {
            margin-left: 20px;
          }
        }
        .tabs {
          margin-top: 20px;
        }
      }
    }
  }
</style>
