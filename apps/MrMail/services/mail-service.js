import { storageService } from '../../../appSus.service/storage.service.js'


export const mailService = {
    query,
}

const MAILS_KEY = 'mails';
var mailsDB = []



function query() {
    var mails = storageService.load(MAILS_KEY);

    if (!mails) {
        return createMails()
            .then(mails => {
                mailsDB = mails
                console.log(mailsDB);
                return Promise.resolve(mailsDB);
            });
    }
    mailsDB = mails
    storageService.store(MAILS_KEY, mailsDB)
    return Promise.resolve(mailsDB);
}


function createMails() {
    var mails = [{
            from: 'Dalit',
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: false,
            sentAt: 1551133930594
        },
        {
            from: 'Dalit',
            subject: 'Shaksuka!',
            body: 'im hungryyyy!',
            isRead: false,
            sentAt: 1551133930678
        },
        {
            from: 'Dalit',
            subject: 'Hungry?',
            body: 'eat upppppp!',
            isRead: false,
            sentAt: 1551133930236
        },
        {
            from: 'Tamir',
            subject: 'Wanna rasta?',
            body: 'so dont take showers!',
            isRead: false,
            sentAt: 1551133930111
        },
        {
            from: 'Tamir',
            subject: 'balding?',
            body: 'your problem!',
            isRead: false,
            sentAt: 1551133930981
        },
    ]

    return Promise.resolve(mails)
}