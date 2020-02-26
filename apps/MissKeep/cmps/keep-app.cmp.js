import {keepappService} from '../../../appSus.service/keepapp-service.js'


var inputText = {
    template: `
        <input type="text" 
            :placeholder="info.placeholder" 
            v-model="txt" 
            @change="$emit('changed', txt)" />
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}
var inputTextarea = {
    template: `
        <textarea v-model="txt"  :placeholder="info.placeholder" @change="$emit('changed', txt)"></textarea>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}
var inputSelect = {
    template: `
    <select v-model="txt" @change="$emit('changed', txt)">
        <option v-for="opt in info.opts">{{opt}}</option>
    </select>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}



export default {
    template: `
        <section class="note" v-if="note">
            <h1>note - {{note.title}}</h1>
            <form  @submit.prevent="saveNote"  class="keep-new-note">
                <div class="keep-note-nav-bar">
                    <label>
                        <input type="radio" v-model="note.type" value="txt" /> 
                    Text
                    </label>
                    <label>
                        <input type="radio" v-model="note.type" value="image" /> 
                         Image
                    </label>
                    <label>
                        <input type="radio" v-model="note.type" value="todo" /> 
                        Todo
                    </label>
                    <label>
                        <input type="radio" v-model="note.type" value="video" /> 
                        Video
                    </label>
                </div>

</form>
            <div class="edit-note">
            <textarea v-model="note.text" :placeholder="textToDisplay" ></textarea>
            <h1>{{note}}</h1>
</div>

        </section>
    `,
    data() {
        return {
            note:null,

        }
    },
    computed:{
        textToDisplay(){
            console.log('txt2display');
            
            let type=this.note.type;
            return keepappService.getText(type)

        }
        

    },
    methods: {
        setAns(idx, ans) {
            this.results.splice(idx, 1, ans)
            // this.results[idx] = ans;
        },
        saveNote(){
                console.log('Saving', this.note);
                keepappService.saveNote(this.note)
                    // .then((savedCar) => {
                    //     eventBus.$emit(EVENT_SHOW_MSG,{txt:'Saved a Car'+savedCar.id})
                    // })
        }
 
    },
    created() {
        this.note=keepappService.getEmptyNote()
        // keepappService.getNotes()
        // .then(note => {
        //     this.note = note
        //     this.results = new Array(this.note.cmps.length)
        //     })
    },
    components: {
        inputText, inputTextarea, inputSelect
    }
}