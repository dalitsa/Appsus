
// export default  
// {
//     [
//     {
//         type: "NoteText",
//         isPinned: true,
//         info: { txt: "Fullstack Me Baby!"} 
//         },  
//     { 
//         type: "NoteImg",
//         info: {
//         url: "http://some-img/me",
//         title: "Me playing Mi"
//         },
//         style: {
//         backgroundColor: "#00d"
//         }
//        },
//     {   
//         type: "NoteTodos",
//         info: { label: "How was it:",
//         todos: [
//                 { txt: "Do that", doneAt: null },
//                 { txt: "Do this", doneAt: 187111111 }  ]
//                 }  
//     }  
//  ]
// }

const note = {
    title : 'Remember me',
    cmps : [
        {
        type:'inputText',
        info: {
            placeholder : "Your name"
        }
    },
    {
        type:'inputSelect',
        info: {
            opts: ['Young', 'Older', 'Maximus']
        }
    },
    {
        type:'inputText',
        info: {
            placeholder : "Your x girlfriend name"
        }
    },
    {
        type:'inputTextarea',
        info: {
            placeholder : "Few words about you..."
        }
    }
]
}

function getNotes() {
    return Promise.resolve(note);
}

function getEmptyNote(){
    var emptyNote =  {
        type: '',
        text:'',
        val:'',
        bcgColor:'',
    }
    return emptyNote;
}

export const keepappService = {
    getNotes,
    getEmptyNote,
    getText,
    saveNote
}


function saveNote(note) {
    if (note.id) return _updateCar(car)
    else return _addCar(car);
}

function _addCar(car) {
    car.id = utilService.makeId()
    cars.unshift(car);
    storageService.store(KEY, cars)
    return Promise.resolve(car)
} 
function _updateCar(car) {
    const idx = cars.findIndex(currCar => currCar.id === car.id);
    
    //This is Vue PITFALL - it is not REACTIVE
    // cars[idx] = car;

    cars.splice(idx, 1, car)
    storageService.store(KEY, cars)
    return Promise.resolve(car)
} 



function getText(type){
    console.log('getText');
    
    switch (type){
        case 'txt':
            note.text='Enter text...'
            break
        case 'image':
            note.text='Enter Image URL...'
            break
        case 'todo':
            note.text='Enter comma separated list..'
            break
        case 'video':
            note.text='Enter video URL...'
            break
    }
    return note.text
}


window.debounce = debounce;


function debounce(fn, time) {
    let timeout;
  
    return function() {
      
      clearTimeout(timeout);
      timeout = setTimeout(fn, time);
    }
  }