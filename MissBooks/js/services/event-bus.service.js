export const EVENT_PUK = 'changed';
export const EVENT_SHOW_MSG = 'showMsg';

export const eventBus = new Vue()

// eventBus.$on(EVENT_PUK, () => {

//     const msg = {
//         txt: 'Got a Puk!',
//         type: 'danger'
//     }

//     eventBus.$emit(EVENT_SHOW_MSG, msg)
// })