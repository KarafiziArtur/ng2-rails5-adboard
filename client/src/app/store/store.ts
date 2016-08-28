import {provideStore} from '@ngrx/store';
// Echoes State
let EchoesStore = {
  videos: []
};

export const store = provideStore({ videos }, { videos: EchoesStore.videos });