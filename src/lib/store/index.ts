import React from 'react';
import AudioStore from './audio';

export const useStores = (store: AudioStore) => React.useContext(React.createContext(store));
