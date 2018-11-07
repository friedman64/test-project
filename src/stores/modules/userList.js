import * as types from '../mutation-types'
import axios from 'axios'

const state = {
   users: []
}

const getters = {
    getUsers: state => {
        return state.users
    }
}

const mutations = {
    [types.FETCH_USERS](state, { userList }) {
        state.users = userList;
    },
    [types.CHANGE_USERS](state, { newUserList }) {
        state.users = newUserList;
    }
}

const actions = {
    fetchUsers({ commit }) {
        if (state.users.length == 0) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    const userList = data.data;
                    commit('FETCH_USERS', {userList})
                })
                .catch(err => console.log(err))
        }
    },
    changeUser({commit}, {newUserList}) {
        commit('CHANGE_USERS', {newUserList})
    }
}

export default  {
    state,
    getters,
    mutations,
    actions
}