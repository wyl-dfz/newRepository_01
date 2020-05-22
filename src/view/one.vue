<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="value" filterable placeholder="请选择" clearable>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="添加时间">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="RULE_CODE"
        label="规则编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="RULE_DESC"
        label="外部描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="RULE_VARS"
        label="规则参数">
      </el-table-column>
      <el-table-column
        prop="REMARK"
        label="备注">
      </el-table-column>
      <el-table-column
        prop="LAST_TIME"
        label="最后修改时间">
      </el-table-column>
      <el-table-column
        prop="STATUS"
        label="状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "one",
    data() {
      return {
        loading: false,
        tableData: [],
        formInline: {
          user: '',
          region: ''
        },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: '',
      }
    },
    methods: {
      onSubmit() {
        var me = this;
        me.loading = true;
        me.tableData = [];
        const url = 'http://lpck.f3322.net:9001/rule/query.htm';
        this.$post(url)
          .then((response) => {
            console.log(response)
            me.loading = false;
            me.tableData = response.data;
          })
      }
    }
    ,
    mounted() {
      var me = this;
      const url = 'http://lpck.f3322.net:9001/rule/query.htm';
      this.$post(url)
        .then((response) => {
          console.log(response)
          me.tableData = response.data;
        })
    }
  }
</script>

<style scoped>

</style>
