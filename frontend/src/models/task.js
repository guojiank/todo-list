export default {
  namespace: 'task',
  state: {
    data: [
      { key: 1, text: 'one', completed: false },
      { key: 2, text: 'one', completed: false },
      { key: 3, text: 'one', completed: true },
      { key: 4, text: 'one', completed: false },
      { key: 5, text: 'one', completed: false },
    ],
    // todo completed all
    filter: 'todo',
  },
  reducers: {
    add(state, { payload: text }) {
      let data = state.data.concat({ key: state.data.length + 1, text, completed: false });
      return {
        data: [...data],
        filter: state.filter,
      };
    },

    filter(state, { payload: filter }) {
      return { data: state.data, filter };
    },

    delete(state, { payload: key }) {
      const tmpData = state.data;
      tmpData.splice(tmpData.findIndex(i => i.key === key), 1);
      return {
        data: [...tmpData],
        filter: state.filter,
      };
    },

    trigger(state, { payload: item }) {
      const tmpData = state.data;

      tmpData.map(i => {
        if (i.key === item.key) i.completed = !item.completed;
      });

      return {
        data: [...state.data],
        filter: state.filter,
      };
    },
  },
};
