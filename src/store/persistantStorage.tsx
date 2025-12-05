import localforage from 'localforage';
import { Edition } from './types';

export const uiStore = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
});

const e1_rosterStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'rosterStore',
});

const e1_dataStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'dataStore',
});

const e2_rosterStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'rosterStore_2e',
});

const e2_dataStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'dataStore_2e',
});

export const getRosterStore = (edition: Edition) => {
  return edition === 'second' ? e2_rosterStore : e1_rosterStore;
};

export const getDataStore = (edition: Edition) => {
  return edition === 'second' ? e2_dataStore : e1_dataStore;
};
