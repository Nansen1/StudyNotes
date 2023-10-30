<template>
  <div class="detail">
    <div class="img-wrap">
      <img :src="goods.img" />
      <div>{{goods.goodId}}</div>
    </div>
    <div class="name">
      <div>
        商品名称：
        <span class="title">{{goods.name}}</span>
      </div>
      <div>
        总价为：
        <span class="price">{{goods.price}}元</span>
      </div>
    </div>
    <div class="detail-text">
      <p>商品详情：</p>
      {{goods.desc}}
    </div>
    <div class="divbutton">
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="addToCart()">添加进购物车</van-button>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance, reactive, toRefs } from 'vue'
import router from '../router/index'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const { proxy } = getCurrentInstance()

    const state = reactive({
      goods: ''
    })
    let route = useRoute();
    let goods = route.params;
     console.log(goods);
     console.log(goods);
    let data = goods
    const getDetail = () => {
      proxy.$axios.post(`/detail`, data).then(res => {
        // console.log(res);
        state.goods = res;
      })
    }
    getDetail();
    const addToCart = () => {
        router.push({name:'Cart', params: state.goods})
    }
    return {
      getDetail,
      ...toRefs(state),
      addToCart
    };
  },
}
</script>

<style scoped>
.detail{
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 50px;
}
.img-wrap {
  width: 100%;
  height: 18.75rem;
}
.img-wrap img {
  width: 100%;
  height: 100%;
}
.name {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10px;
  font-size: 20px;
}
.name .title,
.name .price {
  color: red;
  font-size: 1.5rem;
  font-weight: bold;
}
.detail-text {
  padding: 0.625rem 0.625rem;
  font-size: 1rem;
  line-height: 2rem;
}
.detail p {
  font-size: 1.125rem;
  font-weight: bold;
}
.divbutton {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>