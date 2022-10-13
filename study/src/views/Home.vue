<template>
<div>
    <v-data-table
      :headers="headers"
      :items="pageData"
      class="elevation-1"
      hide-default-footer
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>게시판 {{writer}}</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                v-if="token"
                @click="newData"
              >
                등록
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.no"
                        label="게시글 번호"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.title"
                        label="게시글 제목"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        disabled
                        label="작성자"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                      
                    >
                      <v-text-field
                        v-model="editedItem.date"
                        disabled
                        label="게시글 날짜"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  취소
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  등록
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">삭제하시겠습니까?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <div id="page">
      <button @click="minus(board)" class="minus">-</button>
          {{currentPage}} / {{totalPage}}
      <button @click="plus(board)" class="plus">+</button>
    </div>
  </div>
  </template>
<script>
import page from "@/mixins/page.js"

export default {
  mixins: [page],
  data: () => ({
    dialog: false,
    dialogDelete: false,
    newWrite: false,
    token: localStorage.getItem('token'),
    test: '원래 데이터',
    headers: [
      {
        text: '번호',
        align: 'start',
        value: 'no',
      },
      { text: '제목', value: 'title' },
      { text: '작성자', value: 'name' },
      { text: '작성일', value: 'date' },
      { text: localStorage.getItem('token') ? '수정/삭제' : '', value: localStorage.getItem('token') ? 'actions' : '', sortable: false },
    ],
    board: [],
    editedIndex: -1,
    destroyDataAfter: '바뀐 후',
    editedItem: {
      no: 0,
      title: '',
      name: '',
      date: new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()
    },


    defaultItem: {
      no: 0,
      title: '',
      name: '',
      date: new Date().getFullYear() + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()
    },
  }),

  created(){
    this.board = JSON.parse(localStorage.getItem('board')) ? JSON.parse(localStorage.getItem('board')) : []
    this.totalPageCount(this.board)
    this.currentPageData(this.board)
    if(this.writer){
      this.editedItem.name = JSON.parse(localStorage.getItem(this.writer)).name
      this.defaultItem.name = JSON.parse(localStorage.getItem(this.writer)).name
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '등록' : '수정'
    },
    writer(){
      return this.$store.state.name
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  methods: {

    editItem (item) {
      this.editedIndex = this.board.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.board.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      let deleteList = JSON.parse(localStorage.getItem('board'))
      deleteList.splice(this.editedIndex, 1)
      localStorage.setItem('board', JSON.stringify(deleteList))
      this.board = JSON.parse(localStorage.getItem('board'))
      this.totalPageCount(this.board)
      this.currentData(this.board)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    newData () {
      this.newWrite = true
    },

    save () {
      if(this.newWrite){
        this.newWrite = false
        let list = JSON.parse(localStorage.getItem('board')) ? JSON.parse(localStorage.getItem('board')) : [];
        list.push({no: this.editedItem.no, title: this.editedItem.title, name: this.editedItem.name, date: this.editedItem.date});
        localStorage.setItem('board', JSON.stringify(list));
        this.board = JSON.parse(localStorage.getItem('board'))

        this.currentData(this.board)

        this.totalPageCount(this.board)
      } else{
        let editList = JSON.parse(localStorage.getItem('board'))
        editList.splice(this.editedIndex, 1, {no: this.editedItem.no, title: this.editedItem.title, name: this.editedItem.name, date: this.editedItem.date});
        localStorage.setItem('board', JSON.stringify(editList))
        this.board = JSON.parse(localStorage.getItem('board'))

        this.currentData(this.board)

      }
      this.close()
    },
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