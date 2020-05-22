<template>
  <div>
    <div class="x-search">
      <el-form :inline="true">
        <el-form-item label="用户昵称">
          <el-input v-model="search.username" placeholder="请输入要查询的用户昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSearch" :loading="search.loading">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="x-actions">
      <el-button type="primary" size="small">新增用户</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="用户昵称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="手机号码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
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

  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: {
          loading: false,
          username: ''
        }
      }
    },
    methods: {
      doSearch() {
        const me = this;
        me.search.loading = true;

      }


    }
  }
</script>

<style scoped>

</style>
