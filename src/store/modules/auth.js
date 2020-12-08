import axios from 'axios'

export default {
    namespaced: true,
    state: {
        jwt: '' || localStorage.getItem('jwt-token')

    },

    mutations: {
        updateJwt(state, jwt) {
            state.jwt = jwt
        }
    },

    actions: {
        login({commit}, formData) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/user/login', formData)
                    .then(response => {
                            if (response.status === 200) {
                                localStorage.setItem('jwt-token', response.data)
                                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data
                                commit('updateJwt', response.data)
                                resolve("auth is ok");
                            }
                        }
                    )
                    .catch(() => reject("Bad login"))
            })
        },
        register({commit}, formData) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/user/register', formData)
                    .then(response => {
                            if (response.status === 200) {
                                resolve("register is ok");
                            }
                        }
                    )
                    .catch(() => reject("Bad register data"))
            })
        },

    },

    getters: {
        isAuth(state) {
            if (state.jwt) return true
            else return false
        }
    },
};
