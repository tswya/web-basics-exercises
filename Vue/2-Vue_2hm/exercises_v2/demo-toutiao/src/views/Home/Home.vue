<template>
  <div class="home-container">
    <van-nav-bar title="头条新闻" :fixed="true" />
    <!-- <p>{{ artlist.length }}</p> -->
    <van-pull-refresh
      v-model="refreshing"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-num="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      limit: 10,
      artlist: [],
      loading: true, // 是否正在加载下一页数据，如果loading为true则不会反复触发load事件
      // 每当下一页数据请求回来之后，记得把loading从true改为false
      finished: false, // 所有数据是否加载完毕，如果没有下一页数据了一定要改成true
      refreshing: false
    }
  },
  components: {
    ArticleInfo
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // console.log(res)
      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.refreshing = false
      } else {
        this.artlist = [...this.artlist, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      // 只要被调用 就该请求下一页数据
      // console.log('触发load事件')
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      this.page++
      this.initArticleList(true)
    }
  },
  created() {
    this.initArticleList()
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
/* .van-nav-bar {
  background-color: #007bff;
}
/deep/.van-nav-bar__title {
  color: white;
} */
</style>
