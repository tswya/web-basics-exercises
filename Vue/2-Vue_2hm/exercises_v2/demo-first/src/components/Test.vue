<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue组件 --- {{ books.length }}</h3>
    <p id="myp">{{ message }}</p>
    <button @click="message += '~'">修改</button>
  </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
        return {
            message: 'hi',
            //定义books数组,存储所有的列表数据，默认为空数组
            books: []
        }
    },
    methods: {
        show() {
            console.log('调用Test组件的show方法')
        },
        initBookList() {
            const xhr = new XMLHttpRequest();
            xhr.addEventListener('load', () => {
                const result = JSON.parse(xhr.responseText);
                console.log(result);
                this.books = result.data;
            });
            xhr.open('GET','http://www.liulongbin.top:3006/api/getbooks');
            xhr.send()
        }
    },
    //创建阶段的第1个生命周期函数
    beforeCreate() {
        /* console.log(this.info),
        console.log(this.message),
        this.show() */
    },
    created() {
        /* console.log(this.info),
        console.log(this.message),
        this.show() */
        // this.initBookList();
    },
    beforeMount() {
        /* console.log('beforeMount')
        const dom = document.querySelector('#myh3')
        console.log(dom) */
    },
    mounted() {
        /* console.log(this.$el)
        const dom = document.querySelector('#myh3')
        console.log(dom) */
    },
    beforeUpdate() {
        /* console.log('beforeUpdate')
        console.log(this.message)
        console.log(document.querySelector('#myp').innerHTML) */
    },
    updated() {
        /* console.log('updated')
        console.log(this.message)
        console.log(document.querySelector('#myp').innerHTML) */
    },
    beforeDestroy() {
        /* console.log('beforeDestroy')
        console.log(this.message) */  
    },
    destroyed() {
        console.log('destroyed')
       
    }
}
</script>

<style lang="less" scoped>
.test-container {
    background-color: pink;
    height: 200px;
}
</style>