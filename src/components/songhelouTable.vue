<template>
  <div class="songhelou_table">
    <div class="table_wrap">
      <div class="table_header">
        <div class="title">{{table.title}}</div>
        <div class="operation">
          <div class="operation_icon">
            <i class="el-icon-caret-right"></i>
          </div>
          <div class="operation_name">{{table.operate}}</div>
        </div>
      </div>
      <div class="table_content">
        <div class="table_nav">
          <div class="nav_item" v-for="(item, index) in table.nav" :key="index">{{item}}</div>
        </div>
        <div class="table_item">
          <div class="item_list" v-for="(item, index) in table.itemList" :key="index">
            <div class="item" v-for="(val, key) in item" :key="key">{{val}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "songhelouTable",
    props: {
      table: {
        type: Object,
        default: () => ({
          title: '销售列表',
          operate:  '批量销售',
          nav: [
            '姓名',
            '性别',
            '年龄',
            '生日',
            '爱好',
          ],
          itemList: [
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
            {
              name: '小明',
              sex: '男',
              age: 18,
              date: '2018-11-11',
              hobby: '篮球'
            },
          ]
        })
      },
    }

  }
</script>

<style lang="scss" scoped>
.songhelou_table{
  width: 100%;
  font-size: 13px;
  color: #303343;
  .table_wrap{
    .table_header{
      display: flex;
      align-items: center;
      background-color: #f56c6c;
      height: 32px;
      font-size: 14px;
      .title{
        margin-right: 10px;
      }
      .operation{
        display: flex;
        align-items: center;
        cursor: pointer;
        .operation_icon{
          color: #4A90E2;
        }
      }
    }
    .table_content{
      .table_nav{
        display: flex;
        align-items: center;
        .nav_item{
          min-width: 120px;
          position: relative;
          &:before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            background-color: #f56c6c;
            cursor: w-resize;
          }
        }
      }
      .table_item{
        .item_list{
          display: flex;
          align-items: center;
          .item{
            min-width: 120px;
          }
        }
      }
    }
  }
}
</style>
