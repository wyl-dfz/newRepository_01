<template>
  <div>
    <div class="x-search">
      <el-form :inline="true">
        <el-form-item label="访问时间">
          <el-date-picker
            v-model="search.accessTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSearch" :loading="search.loading">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="myChart" style="width: 100%; height: 360px"></div>
  </div>
</template>

<script>

  export default {
    name: 'Statistic',
    data() {
      return {
        search: {
          loading: false,
          accessTime: []
        },
        chart: {
          xAxis: ['**.com'],
          series: [0]
        }
      }
    }
  }
</script>

<style scoped>

</style>
