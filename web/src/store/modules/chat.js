import axios from 'axios';
import qs from 'qs';

const state = {
  messages: [],
};

const getMessage = (text, isServer) => ({
  text,
  from: isServer ? 'server' : 'me',
  createdAt: new Date(),
});

const actions = {
  sendMessage({ commit }, message) {
    // formdata hack https://github.com/axios/axios/issues/362
    const data = qs.stringify({ q: message });
    commit('setMessage', getMessage(message));

    axios
      .post('/api/get-answer', data)
      .then((response) => {
        const { data: { a: answer, ok: isValid } } = response;

        if (!isValid) {
          return Promise.reject(response);
        }

        return commit('setMessage', getMessage(answer, true));
      })
      .catch(err => console.error('err >>>>>', err));
  },
};

const mutations = {
  setMessage(store, payload) {
    store.messages.push(payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
