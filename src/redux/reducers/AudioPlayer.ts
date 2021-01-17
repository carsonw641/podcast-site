const AudioPlayerFile: any = (state = {
    url: '',
    title: '',
    description: ''
}, action: any) => {
    switch (action.type) {
        case 'changeAudioFile':
            return {
                file: action.url,
                title: action.title,
                description: action.description
            };
        default:
            return state;
    }
}

export { AudioPlayerFile };