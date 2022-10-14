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
                <button @click="minus(infos)" class="minus">-</button>
                    {{currentPage}} / {{totalPage}}
                <button @click="plus(infos)" class="plus">+</button>
            </div>
        </template>
    </div>
</template>
<script>
import page from "@/mixins/page.js"

export default {
    name: "userList",
    mixins: [page],
    data () {
      return {
        headers: [
          { text: '이름', value: 'name' },
          { text: '직책', value: 'grade' },
        ],
        destroyDataAfter: '바뀌기 전',
      }
    },

    created() {
        this.totalPageCount(this.infos)
        this.currentPageData(this.infos)
    },

    computed: {
        infos(){
            return this.$store.state.user.user
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