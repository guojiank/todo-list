import * as tasksService from '../services/tasks';
import { isConstructorDeclaration } from 'typescript';

export default {
  namespace: 'task',
  state: {
    data: [
      // { id: 1, text: 'one', completed: false },
      // { id: 2, text: 'one', completed: false },
      // { id: 3, text: 'one', completed: true },
      // { id: 4, text: 'one', completed: false },
      // { id: 5, text: 'one', completed: false },
    ],
    // todo completed all
    filter: 'todo',
  },
  reducers: {
    get(state, { payload }) {
      return {
        data: [...payload],
        filter: state.filter,
      };
    },

    add(state, { payload: text }) {
      let data = state.data.concat({ id: state.data.length + 1, text, completed: false });
      return {
        data: [...data],
        filter: state.filter,
      };
    },

    filter(state, { payload: filter }) {
      return { data: state.data, filter };
    },

    delete(state, { payload: id }) {
      const tmpData = state.data;
      tmpData.splice(tmpData.findIndex(i => i.id === id), 1);
      return {
        data: [...tmpData],
        filter: state.filter,
      };
    },

    trigger(state, { payload: item }) {
      const tmpData = state.data;

      tmpData.map(i => {
        if (i.id === item.id) i.completed = !item.completed;
      });

      return {
        data: [...state.data],
        filter: state.filter,
      };
    },
  },
  effects: {
    *getTasks(_, { call, put }) {
      const jsonData = yield call(tasksService.getAll);
      yield put({
        type: 'get',
        payload: jsonData,
      });
    },
    *addTask({ payload: text }, { call, put }) {
      yield call(tasksService.addTask, { text, completed: false });
      yield put({
        type: 'getTasks',
      });
    },
    *deleteTask({ payload: id }, { call, put }) {
      yield call(tasksService.deleteTask, id);
      yield put({
        type: 'getTasks',
      });
    },
    *checkTask({ payload: id }, { call, put }) {
      yield call(tasksService.checkTask, id);
      yield put({
        type: 'getTasks',
      });
    },
    *closeTask({ payload: id }, { call, put }) {
      yield call(tasksService.closeTask, id);
      yield put({
        type: 'getTasks',
      });
    },
  },
};
