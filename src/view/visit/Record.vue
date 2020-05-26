<template>
  <div>
    <div class="x-search">
      <el-form :inline="true">
        <el-form-item label="Host">
          <el-input v-model="search.host" placeholder="请输入host" style="width: 300px;" autosize></el-input>
        </el-form-item>
        <el-form-item label="IP">
          <el-input v-model="search.ip" placeholder="请输入ip"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSearch(1)" :loading="search.loading">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" class="demo-table-expand">
              <el-form-item label="IP">
                <span>{{ props.row.ip }}</span>
              </el-form-item>
              <el-form-item label="运营商">
                <span>{{ props.row.isp }}</span>
              </el-form-item>
              <el-form-item label="userAgent">
                <span>{{ props.row.userAgent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          prop="ip"
          label="IP">
        </el-table-column>
        <el-table-column
          prop="host"
          label="Host">
        </el-table-column>
        <el-table-column
          prop="uri"
          label="路径">
        </el-table-column>
        <el-table-column
          prop="accessTime"
          label="访问时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="city"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="browserName"
          label="浏览器"
          width="180">
        </el-table-column>
        <el-table-column
          prop="osName"
          label="操作系统"
          width="180">
        </el-table-column>
      </el-table>
      <div style="margin-top: 15px;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          background
          layout="prev, pager, next"
          :total="5000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Record',
  data () {
    return {
      currentPage: 1,
      tableData: [],
      search: {
        loading: false,
        host: '',
        ip: ''
      }
    }
  },
  methods: {
    handleCurrentChange (currPage) {

    }
  }
}
</script>

<style scoped>

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
