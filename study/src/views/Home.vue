<template>
  <BoardTable
  :datas="board"
  :dataText="boardText"
  ></BoardTable>
</template>
<script>
import ActionTable from "@/components/ActionTable.vue"

export default {
  name: "Home",
  components: {
    BoardTable: ActionTable
  },
  data: () => ({
    board: [],
    boardText: "board"
  }),
  created(){
    this.board = JSON.parse(localStorage.getItem('board')) ? JSON.parse(localStorage.getItem('board')) : []
  }
}
</script>