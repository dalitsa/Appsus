import { storageService } from '../../../appSus.service/storage.service.js'
import { utilService } from '../../../appSus.service/utils.service.js'


export const mailService = {
    query,
    getById,
    removeMail,
    updateMail,
    addMail
}

const MAILS_KEY = 'mails';
var mailsDB = []


function getById(id) {
    return query()
        .then(mails => {

            return mails.find(mail => mail.id === id)
        })

}

function updateMail() {
    storageService.store(MAILS_KEY, mailsDB)
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

function removeMail(id) {
    const idx = mailsDB.findIndex(mail => mail.id === id)
    if (idx === -1) return Promise.reject('DID NOT REMOVE MAIL')
    mailsDB.splice(idx, 1);
    storageService.store(MAILS_KEY, mailsDB)
    return Promise.resolve('MAIL REMOVED')
}

function addMail(mail) {
    console.log(mail);
    mail.id = utilService.makeId()
    mail.sentAt = Date.now()
    return query()
        .then(mails => {
            mails.unshift(mail);
            mailsDB = mails
            console.log(mailsDB);
            storageService.store(MAILS_KEY, mailsDB)
            return Promise.resolve(mailsDB)
        })

}



function createMails() {
    var mails = [{
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wassap?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?',
            isRead: false,
            sentAt: 1582719879474,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Shaksuka!',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930678,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Hungry?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930236,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wanna rasta?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930111,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'balding?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930981,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wassap?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?',
            isRead: false,
            sentAt: 1582719879474,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Shaksuka!',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930678,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Shaggi',
            fromMail: 'rasta@basta.kasta',
            subject: 'Hungry?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930236,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wanna rasta?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930111,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wassap?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?',
            isRead: false,
            sentAt: 1582719879474,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Mr.bombastic',
            fromMail: 'rasta@basta.kasta',
            subject: 'Shaksuka!',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930678,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Hungry?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930236,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Tamir',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wanna rasta?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930111,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Raja',
            fromMail: 'rasta@basta.kasta',
            subject: 'balding?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930981,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Dalit',
            fromMail: 'rasta@basta.kasta',
            subject: 'Wassap?',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?',
            isRead: false,
            sentAt: 1582719879474,
            isImportant: false
        },
        {
            id: utilService.makeId(),
            from: 'Babai',
            fromMail: 'rasta@basta.kasta',
            subject: 'Shaksuka!',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nostrum tempora, aliquam sit reprehenderit odio! Sequi, explicabo? Exercitationem molestiae repellendus accusantium. Voluptatem quibusdam qui voluptates quam odit explicabo id aut?!',
            isRead: false,
            sentAt: 1551133930678,
            isImportant: false
        },
    ]

    return Promise.resolve(mails)
}