<template>
    <el-form ref="channelForm" :model="form" label-width="90px" class="new_channel">
      <el-form-item label="权限名称" prop="channelAuthName" :rules="[{ required: true, message: '请输入渠道权限名称'}]" v-if="hasName">
        <el-input placeholder="请输入渠道权限名称" maxlength="15" class="width-200" v-model.trim="form.channelAuthName" :disabled="handleType.type == 2"></el-input>
        <span class="append_span">该商户下须不重复</span>
      </el-form-item>
      <el-form-item label="选择渠道" prop="channelCode" :rules="[{ required: true, message: '请选择渠道'}]">
        <el-checkbox-group v-model="form.channelCode" :disabled="handleType.type == 2">
          <el-checkbox :label="list.channelCode" v-for="(list,index) in channelList" :key="index">{{list.channelName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="选择门店" prop="organiRootId" required>
        <el-radio-group v-model="form.organiRootId" @change="getOrganizeList()" :disabled="handleType.type == 2">
          <el-radio :label="list.organiRootId+''" v-for="(list,index) in tabList" :key="index">{{list.organiLabel}}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="tree_list" prop="organiId">
        <el-tree :data="treeList" node-key="polyOrganiId" ref="treeList" highlight-current :props="defaultProps" default-expand-all :expand-on-click-node="false">
          <div class="custom-tree-node2" slot-scope="{ node, data }">
            <div :class="{selected:data.selected,checked:data.is_checked||handleType.type == 2}">
              <span class="addborder" @click="handleType.type!=2&&checkedNode(data,true)">{{data.organiLabel}}</span>
            </div>
          </div>
        </el-tree>
      </el-form-item>
    </el-form>
</template>

<script>
export default {
  props: {
    handleType: { type: Object, default: ()=> ({ type: 0, data: {organiId:''} }) },
    tabList: { type: Array, default: ()=> [] },
    channelList: { type: Array, default: ()=> [] },
    hasName: { type: Boolean, default: true }
  },
  watch: {
    form: {
      handler(newVal) {
        this.$emit('change', newVal)
      },
      deep: true
    }
  },
  data() {
    return {
      defaultProps: {
        label: 'polyOrganiLabel',
        children: 'childList',
        organiLevel: 'organiLevel'
      },
      form: {},
      activeId: {},
      treeList: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }]
            }
            ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ]
    }
  },
  created() {
    this.form = this.handleType.data
    let arr = this.handleType.data.organiId.split('#')
    arr.forEach(val => { this.activeId[val] = true })
    this.getOrganizeList()
  },
  methods: {
    // 获取树
    getOrganizeList() {
      // this.api.post(`organize/list?showBrandId=true&organiRootId=${this.form.organiRootId}`).then(res => {
      //   if (res.success === 1 && res.data) {
      //     this.treeList = res.data
      //     this.checkedNode(res.data[0], false)
      //   }
      // })
    },
    // 选择节点
    checkedNode(data, type) {
      if (data.is_checked) return false
      this.$nextTick(() => {
        let arr = this.getNodeId(this.treeList[0])
        this.form.organiId = arr.join('#')
      })
      if (type || this.activeId[data.organiId]) {
        if (this.activeId[data.organiId]) delete this.activeId[data.organiId]
        data.selected = !data.selected
      }
      if (!data.childList || !data.childList.length) return false
      if (data.selected) {
        data.childList.map(res => { this.isNodeChecked(res) })
      } else {
        data.childList.map(res => { this.isNodeSelect(res) })
      }
    },
    isNodeSelect(list) {
      this.$set(list, 'is_checked', false)
      if (list.selected || this.activeId[list.organiId]) {
        list.selected = true
        if (this.activeId[list.organiId]) delete this.activeId[list.organiId]
        if (!list.childList || !list.childList.length) return false
        list.childList.map(res => { this.isNodeChecked(res) })
      } else {
        if (!list.childList || !list.childList.length) return false
        list.childList.map(res => { this.isNodeSelect(res) })
      }
    },
    // 节点过滤
    isNodeChecked(list) {
      list.selected = false
      this.$set(list, 'is_checked', true)
      if (list.childList && list.childList.length) {
        list.childList.map(res => { this.isNodeChecked(res) })
      }
    },
    // 获取选择节点
    getNodeId(data) {
      let arr = []
      if (data.selected) {
        arr.push(data.organiId)
        return arr
      } else if (data.childList && data.childList.length) {
        data.childList.map(res => {
          arr = arr.concat(this.getNodeId(res))
        })
        return arr
      }
      return arr
    }
  }
}
</script>
<style lang="scss">
@import "../colorManage";
.new_channel{
  .width-200{width:200px}
  .append_span{font-size: 12px;color:#bbbbbb;margin-left: 10px}
  .tree_list {
    .el-dialog__body{padding:5px 20px;}
    .el-form-item__content{
      min-height: 100px;
      max-height: 300px;
      border:1px solid #ebebeb;
      border-radius: 5px;
      padding:10px;
      overflow: auto;
    }
    .el-tree>.el-tree-node {
      left: 0;
      &:before {
        display: none;
      }
      >.el-tree-node__content {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-left: 22px !important;
        >.el-tree-node__expand-icon {
          display: none
        }
      }
    }
    .el-tree-node {
      position: relative;
      left: 50px;
      &:before {
        content: '';
        position: absolute;
        left: 6px;
        top: 0;
        height: 100%;
        border-left: 1px dashed $label_color;
      }
    }
    .el-tree-node__content {
      height: 32px;
      padding-left: 0 !important; //
      background: rgba(0,0,0,0) !important;
    }
    .el-tree-node__children {
      >.el-tree-node:last-child {
        &:before {
          height: 20px;
          ;
        }
      }
    }
    .el-tree-node__expand-icon {
      padding: 0 !important;
      border: 1px solid $body_bg;
      border-radius: 2px;
      line-height: 10px;
      text-align: center;
      width: 10px;
      background: #fff;
      margin-right: 10px;
      transform: rotate(0deg) !important;
      color: $body_bg !important;
      &:before {
        content: '+';
        position: relative;
        top: -1px;
      }
      &:after {
        content: '';
        position: absolute;
        left: 12px;
        top: 4px;
        width: 8px;
        border-top: 1px dashed $label_color;
      }
    }
    .el-tree-node__expand-icon.expanded,
    .el-tree-node__expand-icon.is-leaf {
      &:before {
        content: '-'
      }
    }
    .el-tree-node__content {
      &:hover .el-icon-circle-close {
        display: block !important;
      }
    }

    .custom-tree-node2 {
      >div.selected .addborder {
        background: $body_bg !important;
        color: #fff !important;
        border-color: $body_bg !important;
      }
      .disabled,
      .checked {
        color: #ccc;
        background: #fff;
        cursor: not-allowed;
      }
      >div.checked .addborder {
        border-color: #ccc;
      }
      .nolookStoreColor {
        color: #ccc;
        cursor: not-allowed;
      }
    }
    .addborder {
      font-size: 12px;
      line-height: 14px;
      border: 1px solid #606266;
      padding: 4px 12px;
      border-radius: 4px;
    }
  }
}
</style>
