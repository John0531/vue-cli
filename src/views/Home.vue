<template>
  <div class="home" v-wechat-title="$route.meta.title">
    <div class="container content">
      <img alt="Vue logo" src="../assets/logo.png">
      <ol>
        <li>用Vue Cli或Nuxt 完成以下功能(O)</li>
        <li>以scss撰寫內容樣式(O)</li>
        <li>應用component功能(O)</li>
        <li>應用computed功能(O)</li>
        <li>製作 輸入類型 text, radio, select 、同一component切換prop來改變對應的輸入類型，並可套用v-model(O)</li>
        <li>可切換頁面(O)</li>
        <li>設定頁面title, description(!只有做title)</li>
        <li>設定Global參數、讓頁面的顏色、主題會隨著更換(O)</li>
        <li>串接一組列表資料api[https://mocki.io/fake-json-api](https://mocki.io/fake-json-api)(O)</li>
        <li>程式架構做到最大的沿用性、維護性，並於Readme說明你的想法(O)</li>
        <li>使用Firebase Hosting，提供連結給我們進行瀏覽(O)</li>
        <li>提供Github程式碼(O)</li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  metaInfo: {
    title: '頁面標題123456',
    meta: [
      { name: 'description', content: 'asdqwereetsxz' }
    ]
  }
}
</script>

<style lang="scss">
  .home{
    margin-top: 30px;
    background-color: rgb(255, 215, 103);
    padding: 20px;
    opacity: 0.95;
    .content{
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    img{
      width: 300px;
    }
  }
  }
</style>
