<template>
    <div>
        <div>
            <h1>유저리스트</h1>
        </div>
        <template>
            <v-data-table
                :headers="headers"
                :items="pageData"
                class="elevation-1"
                hide-default-footer
            >
            </v-data-table>
            <div id="page">
                <button @click="minus" class="minus">-</button>
                    {{currentPage}} / {{totalPage}}
                <button @click="plus" class="plus">+</button>
            </div>
        </template>
    </div>
</template>
<script>

export default {
    name: "userList",
    data () {
      return {
        headers: [
          { text: '이름', value: 'name' },
          { text: '직책', value: 'grade' },
        ],
        destroyDataAfter: '바뀌기 전',
        currentPage: 1,
        currentCount: 0,
        count: 5,
        totalPage: 0,
        pageData: [],
        clickLeft: false,
        clickRight: false,
      }
    },
    created() {
        this.totalPageCount()
        this.currentPageData()
    },
    methods: {
        totalPageCount(){
            if(this.infos.length % this.count > 0){
                this.totalPage = Math.floor(this.infos.length/this.count) + 1
            } else{
                this.totalPage = Math.floor(this.infos.length/this.count)
            }
        },

        currentPageData(){
            this.pageData = this.infos.slice(this.currentCount, this.currentCount+this.count)
            this.currentCount += this.count
        },

        minus(){
            if(this.currentPage > 1){
                this.currentPage -= 1 
                this.currentCount -= this.count
                this.clickLeft = true
                if(this.clickRight){
                    this.clickRight = false
                    this.currentCount -= this.count
                }
                this.pageData = this.infos.slice(this.currentCount, this.currentCount+this.count)
            }
        },

        plus(){
            if(this.currentPage < this.totalPage){
                this.currentPage += 1
                this.currentCount += this.count
                this.clickRight = true
                if(this.clickLeft){
                    this.clickLeft = false
                    this.currentCount += this.count
                }
                this.pageData = this.infos.slice(this.currentCount-this.count, this.currentCount)
                
            }
        }
    },

    computed: {
        infos(){
            return this.$store.state.user
        }
    },

    beforeDestroy(){
    this.$store.commit('DESTROYDATA',{
      destroyData: this.destroyDataAfter
    })
  }
}
</script>

<style scoped>
  #page{
    text-align: center;
  }
  .minus{
    width: 30px;
    color: white;
    border-radius: 10px;
    background-color: black;
    margin: 20px 0;
  }
  .minus:hover{
    background-color: green;
  }
  .plus{
    width: 30px;
    color: white;
    border-radius: 10px;
    background-color: black;
    margin: 20px 0;
  }
  .plus:hover{
    background-color: green;
  }
</style>