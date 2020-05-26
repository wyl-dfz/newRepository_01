<template>
  <div>
    <div class="x-search">
      <el-form :inline="true">
        <el-form-item label="日期">
          <el-date-picker
            v-model="search.dailyDate"
            type="date"
            format="yyyy-MM-dd"
            value-format="yyyyMMdd"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="人员姓名">
          <el-input v-model="search.userName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSearch(1)" :loading="search.loading">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="x-oper">
      <el-button type="success" size="small" @click="exportDaily">导出日报</el-button>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="dailyDate" label="日期" width="120"></el-table-column>
        <el-table-column prop="userName" label="人员姓名" width="120"></el-table-column>
        <el-table-column prop="planContent" label="计划工作内容"></el-table-column>
        <el-table-column
          prop="isComplete"
          label="是否完成"
          width="120"
          :formatter="isCompleteConverter"
        ></el-table-column>
        <el-table-column prop="completeContent" label="实际完成的内容"></el-table-column>
        <el-table-column prop="problem" label="遇到的问题" width="180"></el-table-column>
      </el-table>
      <div style="margin-top: 15px;">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          background
          layout="prev, pager, next"
          :total="10"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { daily_list, daily_exportDaily } from '@/request/api'

export default {
  name: 'Record',
  data () {
    return {
      currentPage: 1,
      tableData: [],
      search: {
        loading: false,
        dailyDate: '',
        userName: ''
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },
  methods: {
    doSearch (currPage) {
      console.log(currPage)
      const me = this
      me.search.loading = true

      const params = {}
      params.page = currPage
      if (me.search.dailyDate && me.search.dailyDate.length > 0) {
        params.dailyDate = me.search.dailyDate
      }
      if (me.search.userName.length > 0) {
        params.userName = me.search.userName
      }
      daily_list(params).then(res => {
        me.search.loading = false
        const code = res.code
        if (code === 200) {
          me.tableData = res.data
          this.currentPage = currPage
        } else {
          this.$message.error(res.resMsg)
        }
      })
    },
    handleCurrentChange (currPage) {
      this.doSearch(currPage)
    },
    isCompleteConverter (row, cell, cellVal, rowIndex) {
      if (cellVal == 1) {
        return '是'
      } else {
        return '否'
      }
    },
    exportDaily () {
      const me = this
      let dailyDate = me.search.dailyDate
      if (dailyDate.length > 0) {
        dailyDate =
          dailyDate.substring(0, 4) +
          '-' +
          dailyDate.substring(4, 6) +
          '-' +
          dailyDate.substring(6, 8)
        window.location.href =
          window.baseUrl + 'daily/exportDaily?day=' + dailyDate
      } else {
        window.location.href = window.baseUrl + 'daily/exportDaily'
      }
    }
  },
  mounted () {}
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

.el-table .cell {
  white-space: pre-line !important;
}
</style>
