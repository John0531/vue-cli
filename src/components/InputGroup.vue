<template>
  <div class="card-content">
    <div class="recipe row" v-if="start === true">
      <div
        class="card text-dark bg-info mb-3 mx-1"
        style="width:250px;"
        v-for="(item, key) in recipe"
        :key="key"
      >
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ item.type }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <small class="text-muted">$NT {{ item.price }} 元</small>
        </div>
      </div>
    </div>
    <div class="filterText row" v-if="!radio[0] && !select[0] && start===false">
      <div
        class="card text-dark bg-info mb-3 mx-1"
        style="width:250px;"
        v-for="(item, key) in filterText"
        :key="key"
      >
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ item.type }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <small class="text-muted">$NT {{ item.price }} 元</small>
        </div>
      </div>
    </div>
    <div class="filterRadio row" v-if="radio[0]">
      <div
        class="card text-dark bg-info mb-3 mx-1"
        style="width:250px;"
        v-for="(item, key) in filterRadio"
        :key="key"
      >
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ item.type }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <small class="text-muted">$NT {{ item.price }} 元</small>
        </div>
      </div>
    </div>
    <div class="filterselect row" v-if="select[0]">
      <div
        class="card text-dark bg-info mb-3 mx-1"
        style="width:250px;"
        v-for="(item, key) in filterselect"
        :key="key"
      >
        <div class="card-header">{{ item.title }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ item.type }}</h5>
          <p class="card-text">{{ item.content }}</p>
          <small class="text-muted">$NT {{ item.price }} 元</small>
        </div>
      </div>
    </div>
  </div>
  <div class="btn-group my-3" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-primary" @click="textSearch">文字搜尋</button>
    <button type="button" class="btn btn-outline-primary" @click="typeSearch">種類搜尋</button>
    <button type="button" class="btn btn-outline-primary" @click="priceSearch">金額搜尋</button>
  </div>
  <div class="text-input" v-if="!radio[0] && !select[0]">
    <h2>文字輸入框</h2>
    <input
      class="form-control form-control-lg"
      type="text"
      placeholder="輸入文字"
      aria-label=".form-control-lg example"
      v-model="text"
    />
  </div>
  <div class="radio-input mt-4" v-if="radio[0]">
    <h2>單選</h2>
    <div class="form-check" v-for="(item, key) in radio" :key="key">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="key"
        v-model="radioInput"
        :value="item"
      />
      <label class="form-check-label" for="key">
        {{item}}
      </label>
    </div>
  </div>
  <div class="selected-input mt-4" v-if="select[0]">
    <h2>下拉選單</h2>
    <select
      class="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      v-model="selectInput.type"
    >
      <option selected>選擇項目</option>
      <option v-for="(item, key) in select" :key="key" :value="item">$NT {{item}}~{{item+100}} 元</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      start: true,
      text: '',
      radioInput: '',
      selectInput: {
        type: '選擇項目'
      },
      radio: [],
      select: [],
      recipe: []
    }
  },
  props: ['data1', 'data2', 'data3'],
  computed: {
    filterText () {
      const a = [...this.recipe]
      return a.filter(item => {
        return item.title.match(this.text) || item.content.match(this.text) || item.type.match(this.text)
      })
    },
    filterRadio () {
      const a = [...this.recipe]
      return a.filter((item) => {
        return item.type.match(this.radioInput)
      })
    },
    filterselect () {
      const a = [...this.recipe]
      if (this.selectInput.type === '選擇項目') {
        return a
      } else {
        return a.filter((item) => {
          return item.price > this.selectInput.type && this.selectInput.type + 100 > item.price
        })
      }
    }
  },
  methods: {
    textSearch () {
      this.text = this.data1
      this.radio = []
      this.select = []
      this.start = false
    },
    typeSearch () {
      this.radio = this.data2
      this.text = ''
      this.select = []
      this.start = false
    },
    priceSearch () {
      this.select = this.data3
      this.text = ''
      this.radio = []
      this.start = false
    }
  },
  created () {
    this.axios
      .get('https://mocki.io/v1/50d598ef-38ce-4b7c-8ca9-dfab23ae5833')
      .then(res => {
        console.log(res)
        this.recipe = res.data
      })
  }
}
</script>

<style lang="scss">
.card-content {
  height: 250px;
  overflow: scroll;
}
</style>
