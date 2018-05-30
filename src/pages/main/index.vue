<template>
  <div>
    <Top></Top>
    <RightCol></RightCol>
  </div>
</template>

<script>
import Top from '@/components/main/top.vue'
import RightCol from '@/components/main/rightCol.vue'
export default {
    components: {
        Top,
        RightCol
    },
  data () {
    return {
      show: false,
      num: 1,
      data: {
        contents: [],
        count: 0,
        limit: 0,
        pages: 0,
        page: 1,
      }
    }
  },
  methods: {
    showPanel () {
      this.show = !this.show
    },
    hideMenu () {
        this.show = false
    },
    change (i) {
        this.num = i
    },
    getData(id) {
        this.$http.get('http://www.734976581.xyz:8081/category?id=' + id + '&page=' + this.data.page).then(response => {
          response.data.contents.forEach((content) => {
            content.addTime = this.formatDate(content.addTime);
          })
          this.data = response.data;
        }, response => {
          console.log('error:' + response);
        })
      },
    getPage (id) {
      this.$http.get('http://www.734976581.xyz:8081/category?id=' + id + '&page=' + this.data.page).then(response => {
            console.log(response)
          response.data.contents.forEach((content) => {
            content.addTime = this.formatDate(content.addTime);
          })
          this.data = response.data;
          var url = '/view?id=' + id
          this.show = false
          this.$router.push(url)
        }, response => {
          console.log('error:' + response);
        })
    }
  },
  created () {
    this.getPage()
    if (this.$route.query['id']) {
      var id = this.$route.query['id']
      this.getPage(id)
    } else{
      var id = ''
      this.getData(id)
    }
  }
}
</script>

<style scoped>

</style>
