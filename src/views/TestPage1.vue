<template>
  <div class="user-page">
    <h2>This is test page 1</h2>
    <h3>Users list:</h3>
    <div class="users-list">
      <div v-for="user in users" class="users-list__item">
        {{ user.name }}
      </div>
    </div>
    <button @click="changeUser">Change first user name to "John Smith"</button>
  </div>
</template>

<script>
  export default {
      name: 'TestPage1',
      data() {
         return {
             localUsersList: []
         }
      },
      computed: {
        users: function () {
            return this.$store.getters.getUsers;
        }
      },
      methods: {
          changeUser(){
            this.localUsersList = this.users;
            this.localUsersList[0].name = "John Smith";
            const newUserList =  this.localUsersList;
            this.$store.dispatch('changeUser', { newUserList });
          }
      },
      mounted: function(){
          this.$store.dispatch('fetchUsers');
      }
  }
</script>

<style lang="scss" scoped>

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .users-list {
    margin-bottom: 20px;
  }
</style>
