<template>
  <div ref="wrap" style="">
    <div class="container">
      <div class="row">
        <div class="col-2 menu">
          <div id="nav">
            <router-link to="/" class="home" @click="recoverImg">Home</router-link>
            <router-link to="/Page1" class="page1" @click="changeImg">Page1</router-link>
          </div>
        </div>
        <div class="col-10"><router-view/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeImg () {
      this.$refs.wrap.setAttribute('style', `background: url(${process.env.VUE_APP_PAGE1}) center center / 100% 100% no-repeat;`)
    },
    recoverImg () {
      this.$refs.wrap.setAttribute('style', `background: url(${process.env.VUE_APP_HOME}) center center / 100% 100% no-repeat;`)
    }
  },
  mounted () {
    console.log(this.$refs.wrap)
    console.log(process.env.VUE_APP_HOME)
    this.$refs.wrap.setAttribute('style', `background: url(${process.env.VUE_APP_HOME}) center center / 100% 100% no-repeat;`)
  }
}
</script>

<style lang="scss">
@import 'bootstrap';
$green:rgb(169, 248, 133);
$green-deeper:rgb(0, 107, 41);
@mixin link{
  text-decoration: none;
  color: $green;
  background-color: $green-deeper;
  padding: 15px;
  border-radius: 20px;
  font-size: 24px;
  &:hover{
    color:$green-deeper;
    background-color: $green;
  }
};
.menu{
  padding-top: 50px;
  #nav{
    background-color: rgb(137, 237, 255);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .home{
      @include link
    }
    .page1{
      @include link
    }
  }
}

</style>
