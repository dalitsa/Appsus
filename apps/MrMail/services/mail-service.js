import { storageService } from '../../../appSus.service/storage.service.js'
import { utilService } from '../../../appSus.service/utils.service.js'


export const mailService = {
    query,
    getById
}

const MAILS_KEY = 'mails';
var mailsDB = []


function getById(id) {
    return query()
        .then(mails => {

            return mails.find(mail => mail.id === id)
        })

}

function query() {
    var mails = storageService.load(MAILS_KEY);
    if (!mails) {
        return createMails()
            .then(mails => {
                mailsDB = mails
                storageService.store(MAILS_KEY, mailsDB)
                return Promise.resolve(mailsDB);
            });
    }

    mailsDB = mails
    return Promise.resolve(mailsDB);
}




function createMails() {
    var mails = [{
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wassap?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?',
            isRead: false,
            sentAt: 1582719879474
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Shaksuka!',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930678
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Hungry?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930236
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wanna rasta?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930111
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'balding?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930981
        },
    ]

    return Promise.resolve(mails)
}