const initialState = { name: '', artist: '', lyrics: '' }

export default (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATED_DATA':
      return action.songFormData;

    case 'RESET_SONG_FORM':
      return initialState;

    default:
      return state;
  }
};