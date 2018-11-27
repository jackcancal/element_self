<template>
  <div class="tree_wrap">
    <div class="root" v-for="(shop, index) in shop_list" :key="index">
      <div class="root_name">{{shop.name}} ID:{{shop.id}}</div>
      <div class="v_line" v-if="shop.children"></div>
      <div class="children"
           v-if="shop.children || shop.children.length"
           v-for="(shopc, index) in shop.children"
           :key="index"
      >
        <div class="children_content">
          <div class="left_icon">
          <span class="icon">
            <i @click="shopc.is_fold = !shopc.is_fold"
              :class="shop.children ? (shopc.is_fold ? 'el-icon-plus' : 'el-icon-minus') : 'el-icon-minus'"></i>
          </span>
            <span class="line"></span>
          </div>
          <div class="content">{{shopc.name}} ID: {{shopc.id}}</div>
        </div>
        <div class="v_line" v-show="!shopc.is_fold"
             v-if="shopc.children"></div>
        <div class="children"
             v-show="!shopc.is_fold"
             v-if="shopc.children"
             v-for="(shopcc, index) in shopc.children"
             :key="index"
        >
          <div class="children_content">
            <div class="left_icon">
          <span class="icon">
            <i :class="shopc.children ? (shopcc.is_fold ? 'el-icon-plus' : 'el-icon-minus') : 'el-icon-minus'"></i>
          </span>
              <span class="line"></span>
            </div>
            <div class="content">{{shopcc.name}} ID: {{shopcc.id}}</div>
          </div>
          <div class="v_line" v-show="!shopcc.is_fold"
               v-if="shopcc.children"></div>
          <div class="children"
               v-show="!shopcc.is_fold"
               v-if="shopcc.children"
               v-for="(shopccc, index) in shopcc.children"
               :key="index"
          >
            <div class="children_content">
              <div class="left_icon">
          <span class="icon">
            <i :class="shopcc.children ? (shopccc.is_fold ? 'el-icon-plus' : 'el-icon-minus') : 'el-icon-minus'"></i>
          </span>
                <span class="line"></span>
              </div>
              <div class="content">{{shopccc.name}} ID: {{shopccc.id}}</div>
            </div>
            <div class="v_line" v-show="!shopccc.is_fold"
                 v-if="shopccc.children"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shu",
    data() {
      return {
        shop_list: [
          {
            id: '1',
            name: '测试商户',
            children: [
              {
                id: '11',
                name: '测试商户',
                is_fold: false, // 折叠
                children: [
                  {
                    id: '111',
                    name: '测试商户',
                    is_fold: false,
                    children: [
                      {
                        id: '111',
                        name: '测试商户',
                        is_fold: false,
                      }
                    ]
                  }
                ]
              },
              {
                id: '11',
                name: '测试商户',
                is_fold: false,
                children: [
                  {
                    id: '111',
                    name: '测试商户',
                    is_fold: false,
                  }
                ]
              },
            ],
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin";
.tree_wrap{
  @include tree()
}
</style>
