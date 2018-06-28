<template>
  <div id="base-search">
    <div class="text">
      <span>筛选方案</span>
      <span class="selected">默认筛选</span>
    </div>
    <el-select v-model="field" placeholder="列表字段" size="small" style="width:160px">
      <el-option
        v-for="item in fields"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="condition" placeholder="包含" size="small" style="width:80px">
      <el-option
        v-for="item in conditions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input placeholder="请输入内容" v-model="value" size="small" style="width:160px"></el-input>
    <el-select v-model="and" placeholder="并且" size="small" style="width:80px">
      <el-option
        v-for="item in ands"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <i class="el-icon-d-arrow-left add-btn" @click="showMoreCondition"></i>
    <el-button type="primary" size="small" style="width:100px;">查询</el-button>
    <el-button type="primary" size="small" style="width:100px;">重置</el-button>
    <div class="condition-action">
      <span @click="isShowSearchModal = true">保存查询条</span>
      <span>重置</span>
    </div>
    <transition name="fade">
        <div class="more-condition" v-show="isShowMoreCondition">
        <el-button type="primary" size="small" icon="el-icon-plus"></el-button>
      </div>
    </transition>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      conditions: [{
        value: '不等于',
        label: '不等于',
      }, {
        value: '等于',
        label: '等于',
      }, {
        value: '大于',
        label: '大于',
      }, {
        value: '小于',
        label: '小于',
      }, {
        value: '大于等于',
        label: '大于等于',
      }, {
        value: '小于等于',
        label: '小于等于',
      }, {
        value: '左包含',
        label: '左包含',
      }, {
        value: '右包含',
        label: '右包含',
      }, {
        value: 'in',
        label: 'in',
      }, {
        value: '包含',
        label: '包含',
      }, {
        value: '不为空',
        label: '不为空',
      }],
      ands: [{
        value: '并且',
        label: '并且',
      }, {
        value: '或者',
        label: '或者',
      }],
      field: '',
      condition: '包含',
      value: '',
      and: '并且',
      isShowMoreCondition: false,
      isShowSearchModal: false,
      activeName2: 'first',
      tableConditionData: [],
    };
  },
  methods: {
    showMoreCondition() {
      this.isShowMoreCondition = !this.isShowMoreCondition;
    },
  },
};
</script>

<style lang="less" scoped>
  #base-search {
    /*css过渡样式 start*/
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    /*css过渡样式 end*/
    position: relative;
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
    .add-btn {
      vertical-align: middle;
      font-size: 24px;
      transition: all .2s;
      transform: rotate(-90deg);
      color: #409EFF;
      cursor: pointer;
    }
    .condition-action {
      height: 32px;
      display: inline-block;
      margin-left: 4px;
      font-size: 12px;
      color: #0b24fb;
      font-weight: 600;
      cursor: pointer;
      span {
          &:hover {
          color: #000;
        }
      }
    }
    .more-condition {
      position: absolute;
      top: 80px;
      left: 0;
      width: 470px;
      padding: 10px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
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
