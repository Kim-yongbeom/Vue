<template>
    <div>
        <div>
            <h1>유저리스트</h1>
        </div>
        <template>
            <v-data-table
                :headers="headers"
                :items="infos"
                :items-per-page="10"
                class="elevation-1"
            >
            </v-data-table>
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
      }
    },
    computed: {
        infos(){
            return this.$store.state.user
        }
    }
}
</script>