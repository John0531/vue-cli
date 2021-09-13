<template>
  <div class="box">
    <div class="about row mt-2" v-wechat-title="$route.meta.title">
      <div class="mt-5 ms-2" style="width: 18rem;">
        <h3>{{text}} <span class="badge bg-warning text-dark">文字搜尋</span></h3>
      </div>
      <div class="card ms-5 bg-warning" style="width: 18rem;">
        <span class="badge bg-warning text-dark">種類搜尋</span>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-warning" v-for="(item, key) in radio" :key="key">{{item}}</li>
        </ul>
      </div>
      <div class="card ms-5 bg-warning" style="width: 18rem;">
        <span class="badge bg-warning text-dark">金額搜尋</span>
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-warning" v-for="(item, key) in select" :key="key">$NT {{item}} 元</li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <InputGroup :data1="text" :data2="radio" :data3="select"></InputGroup>
    </div>
  </div>
</template>

<script>
import InputGroup from '../components/InputGroup.vue'

export default {
  data () {
    return {
      content: {},
      text: '豆腐捲',
      radio: ['高蛋白質料理', '健康沙拉', '低醣料理'],
      select: [100, 200, 300]
    }
  },
  components: {
    InputGroup
  }
}
</script>

<style lang="scss">
  .box {
    height: 700px;
    margin-top: 30px;
    background-color: rgb(207, 255, 153);
    padding: 20px;
    opacity: 0.95;
  }
</style>
