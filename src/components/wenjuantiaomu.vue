<template>
  <div>
    <div class="tabel_head">
      <p class="p1">问卷名称</p>
      <p class="p1">开始时间</p>
      <p class="p1">结束时间</p>
      <p class="p1">备注</p>
      <p class="p1">操作</p>
    </div>
    <div class="">
      <div v-for="(item, index) in data" :key="index" class="data_div2">
        <p class="p2">{{ item.name }}</p>
        <p class="p2">{{ item.time_start }}</p>
        <p class="p2">{{ item.time_over }}</p>
        <p class="p2">{{ item.note }}</p>

        <div class="button_div1" v-show="show == 0">
          <button class="button color1">修改</button>
          <button class="button color2">删除</button>
          <!-- <button class="button color3">用户管理</button> -->
          <el-button type="text" @click="dialogTableVisible = true" style="background-color:#007cff;color: #FFFFFF;margin-top: 5px; height: 30px ;width: 80px;" size="mini">
            用户管理
          </el-button>

          <el-dialog :visible.sync="dialogTableVisible">
            <el-autocomplete lock-scroll :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-autocomplete>
            <el-button style="margin-left: 250px;">添加用户</el-button>
            <div class="tabel_head">
              <p class="p11">税号</p>
              <p class="p11">名称</p>
              <p class="p11">法人</p>
              <p class="p11">电话</p>
              <p class="p11">操作</p>
            </div>
            <div v-for="(item2, index2) in data_wenjuan_mini" :key="index2" class="data_div22">
              <p class="p22">{{ item2.name }}</p>
              <p class="p22">{{ item2.time_start }}</p>
              <p class="p22">{{ item2.time_over }}</p>
              <p class="p22">{{ item2.note }}</p>
              <button class="button3 color1">修改</button>
              <button class="button3 color2">删除</button>
            </div>
          </el-dialog>
        </div>
        <div class="button_div2" v-show="show == 1">
          <button class="button color1 button2">查看作答</button>
          <button class="button color2 button2">结束问卷</button>
          <button class="button button2" style="background-color: #007CFF;">复制问卷</button>
        </div>
        <div class="button_div3" v-show="show == 2">
          <button class="button color1 button2">查看作答</button>
          <button class="button button2" style="background-color: #007CFF;">复制问卷</button>
        </div>
        <div class="button_div3" v-show="show == 3">
          <button class="button color1">使用</button>
          <button class="button color2 button2">结束问卷</button>
        </div>
      </div>
    </div>
    <div>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="page_size"
        layout="total, prev, pager, next"
        :total="data_wenjaun.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TiaoMu',
  props: {
    querySearch: String,
    data_wenjaun: Array,
    data_wenjuan_mini: Array,
    show: Number
  },
  created() {
    this.dataArray = this.sliceArray(this.data_wenjaun, this.page_size);
    this.data = this.dataArray[this.currentPage1 - 1];
    // window.console.log(this.data)
    // window.console.log(this.dataArray)
  },
  data() {
    return {
      data: [],
      dataArray: [],
      currentPage1: 1,
      page_size: 5,
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {
      this.data = this.dataArray[this.currentPage1 - 1];
    },
    handleSelect() {},
    //分割数据 分页
    sliceArray(array, size) {
      var result = [];
      for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
      }
      return result;
    }
  }
};
</script>

<style>
.tabel_head {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.p11 {
  margin-bottom: 5px;
  margin-right: 90px;
  margin-top: 5px;
  margin-left: 0px;
  font-size: 15px;
  text-align: left;
  width: 50px;
}
.p1 {
  margin-left: 10px;
  margin-right: 80px;
  font-size: 19px;
  width: 100px;
  text-align: left;
}
.data_div2 {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.data_div22 {
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #ffffff;
}
.p22 {
  text-align: left;
  margin-right: 0px;
  margin-top: 5px;
  margin-left: 0px;
  margin-bottom: 5px;
  font-size: 16px;
  width: 130px;
}
.p2 {
  width: 100px;
  text-align: left;
  margin-right: 90px;
}
.button {
  margin-top: 5px;
  margin-right: 10px;
  height: 30px;
  width: 50px;
  border-style: hidden;
  color: white;
  font-size: 12px;
  border-radius: 3px;
}
.button2 {
  width: 80px;
}
.button3 {
  margin-right: 10px;
  height: 30px;
  width: 50px;
  border-style: hidden;
  color: white;
  font-size: 12px;
  border-radius: 3px;
}
.color1 {
  background-color: #05c985;
}
.color2 {
  background-color: #ee423d;
}

.el-dialog__body {
  background-color: #f8f9ff;
}
</style>
