import localforage from 'localforage';

export const uiStore = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
});

export const rosterStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'rosterStore',
});

export const dataStore = localforage.createInstance({
  name: 'drabDB',
  storeName: 'dataStore',
});
