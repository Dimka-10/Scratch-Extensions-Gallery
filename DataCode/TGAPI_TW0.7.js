// @name Telegram API Extension
// @description Расширение которое позволяет взаимодействовать с Telegram API.
// @authors Telegram: @MEOW_MUR920, @FXCHK404, @DBDev_IT
// @version 0.6

(function (Scratch) {  
    'use strict';  

    if (!Scratch || !Scratch.BlockType) {  
        console.error('Scratch API недоступен. Расширение Telegram API невозиожно загрузить.');  
        return;  
    }  

    if (!Scratch.extensions.unsandboxed) console.warn("Для быстрой работы рекомендуемый режим без песочницы, всё равно запускаем в песочнице.");

    class TelegramAPIExtension {  
        constructor() {  
            this.token = '';  
            this.updates = [];  
            this.offset = 0;  
            this.pollingActive = false;  
            this.allUsers = new Set();  
            this.recentUsers = [];  
            this.maxRecentUsers = 10;  
        }  

        getInfo() {  
            return {  
                id: 'telegramAPI',  
                name: 'Telegram API',  
                color1: '#0088CC',  
                color2: '#006699',  
                blocks: [  
                    {  
                        opcode: 'initBot',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'инициализировать бота с токеном [TOKEN]',  
                        arguments: { TOKEN: { type: Scratch.ArgumentType.STRING, defaultValue: 'ТОКЕН_БОТА' } }  
                    },  
                    {  
                        opcode: 'sendMessage',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'отправить сообщение [TEXT] в чат с ID [CHATID]',  
                        arguments: {  
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Привет!' },  
                            CHATID: { type: Scratch.ArgumentType.NUMBER, defaultValue: '123456789' }  
                        }  
                    }, 
                    {
                        opcode: "answerToMessage",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "ответить [TEXT] на сообщение с ID [MESSAGEID] в чате с ID [CHATID]",
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: "Привет!"
                            },
                            MESSAGEID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            CHATID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 123456789
                            }
                        }
                    },
                    {  
                        opcode: 'sendPhoto',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'отправить фото [URL] в чат с ID [CHATID]',  
                        arguments: {  
                            URL: { type: Scratch.ArgumentType.STRING, defaultValue: 'https://example.com/photo.jpg' },  
                            CHATID: { type: Scratch.ArgumentType.NUMBER, defaultValue: '123456789' }  
                        }  
                    },
                    {
                        opcode: "deleteMessage",
                        blockType: Scratch.BlockType.COMMAND,
                        text: "удалить сообщение с ID [MESSAGEID] из чата с ID [CHATID]",
                        arguments: {
                            MESSAGEID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 1
                            },
                            CHATID: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 123456789
                            }
                        }
                    },
                    {  
                        opcode: 'startPolling',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'начать поллинг каждые [SECONDS] сек',  
                        arguments: { SECONDS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 } }  
                    },  
                    {  
                        opcode: 'stopPolling',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'остановить поллинг'  
                    },  
                    {  
                        opcode: 'getLastMessage',  
                        blockType: Scratch.BlockType.REPORTER,  
                        text: 'получить последнее сообщение'  
                    }, 
                    {
                        opcode: "getLastMessageID",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "получить ID последнего сообщения"
                    },
                    {  
                        opcode: 'getLastChatId',  
                        blockType: Scratch.BlockType.REPORTER,  
                        text: 'получить ID чата последнего сообщения'  
                    },  
                    {  
                        opcode: 'hasNewMessages',  
                        blockType: Scratch.BlockType.BOOLEAN,  
                        text: 'есть новые сообщения?'  
                    },  
                    {  
                        opcode: 'isLastMessageIs',  
                        blockType: Scratch.BlockType.BOOLEAN,  
                        text: 'последнее сообщение - текст [TEXT]?',  
                        arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: '/start' } }  
                    },  
                    {  
                        opcode: 'getLastUsername',  
                        blockType: Scratch.BlockType.REPORTER,  
                        text: 'получить имя пользователя последнего сообщения'  
                    },  
                    {  
                        opcode: 'replyToLastMessage',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'ответить на последнее сообщение текстом [TEXT]',  
                        arguments: { TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'Спасибо!' } }  
                    },  
                    {  
                        opcode: 'getAllUsers',  
                        blockType: Scratch.BlockType.REPORTER,  
                        text: 'получить всех пользователей'  
                    },  
                    {  
                        opcode: 'getRecentUsers',  
                        blockType: Scratch.BlockType.REPORTER,  
                        text: 'получить последних пользователей'  
                    },  
                    {  
                        opcode: 'clearUpdates',  
                        blockType: Scratch.BlockType.COMMAND,  
                        text: 'очистить обновления'  
                    }  
                ]  
            };  
        }  

        initBot(args) {  
            this.token = args.TOKEN;  
            this.updates = [];  
            this.offset = 0;  
            this.pollingActive = false;  
            this.allUsers = new Set();  
            this.recentUsers = [];  
        }  

        async sendMessage(args) {  
            if (!this.token) return;  
            const url = `https://api.telegram.org/bot${this.token}/sendMessage`;  
            await fetch(url, {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                    'Authorization': `Bearer ${this.token}` // Исправлено для корректной авторизации  
                },  
                body: JSON.stringify({ chat_id: args.CHATID, text: args.TEXT })  
            }).catch(error => {  
                console.error('Ошибка отправки сообщения:', error);  
                if (error.status === 401) console.error('Ошибка 401: Проверь токен бота и доступ к API.');  
            });  
        }  

        async answerToMessage(args) {
            if (!this.token) return;
            const url = `https://api.telegram.org/bot${this.token}/SendMessage`;
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    chat_id: args.CHATID,
                    text: args.TEXT,
                    reply_to_message_id: args.MESSAGEID
                })
            }).catch(error => console.error("Ошибка отправки сообщения:", error));
        }

        async sendPhoto(args) {  
            if (!this.token) return;  
            const url = `https://api.telegram.org/bot${this.token}/sendPhoto`;  
            await fetch(url, {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                    'Authorization': `Bearer ${this.token}` // Исправлено для корректной авторизации  
                },  
                body: JSON.stringify({ chat_id: args.CHATID, photo: args.URL })  
            }).catch(error => console.error('Ошибка отправки фото:', error));  
        }  

        async deleteMessage(args) {
            if (!this.token) return;
            const url = `https://api.telegram.org/bot${this.token}/deleteMessage`;
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    chat_id: args.CHATID,
                    message_id: args.MESSAGEID
                })
            }).catch(error => console.error("Ошибка удаления сообщения:", error));
        }

        startPolling(args) {  
            if (!this.token || this.pollingActive) return;  
            this.pollingActive = true;  
            const poll = () => {  
                if (!this.pollingActive) return;  
                const url = `https://api.telegram.org/bot${this.token}/getUpdates?offset=${this.offset}`;  
                fetch(url)  
                    .then(response => {  
                        if (!response.ok) {  
                            throw new Error(`Ошибка HTTP! Статус: ${response.status}`);  
                        }  
                        return response.json();  
                    })  
                    .then(data => {  
                        if (data.ok && data.result.length > 0) {  
                            this.updates = data.result;  
                            this.offset = this.updates[this.updates.length - 1].update_id + 1;  
                            this._updateUsers();  
                        }  
                        setTimeout(poll, args.SECONDS * 1000);  
                    })  
                    .catch(error => {  
                        console.error('Ошибка поллинга:', error);  
                        if (error.message.includes('401')) {  
                            console.error('Ошибка 401: Проверь токен бота и доступ к API.');  
                        }  
                        setTimeout(poll, args.SECONDS * 1000);  
                    });  
            };  
            poll();  
        }  

        stopPolling() {  
            this.pollingActive = false;  
        }  

        getLastMessage() {  
            if (this.updates.length === 0) return '';  
            const lastUpdate = this.updates[this.updates.length - 1];  
            return lastUpdate.message ? lastUpdate.message.text || '' : '';  
        }  

        getLastMessageID() {
            if (this.updates.length === 0) return "";
            const lastUpdate = this.updates[this.updates.length - 1];
            return lastUpdate.message ? lastUpdate.message.message_id.toString() : "";
        }

        getLastChatId() {  
            if (this.updates.length === 0) return '';  
            const lastUpdate = this.updates[this.updates.length - 1];  
            return lastUpdate.message ? lastUpdate.message.chat.id.toString() : '';  
        }  

        hasNewMessages() {  
            return this.updates.length > 0;  
        }  

        isLastMessageIs(args) {  
            if (this.updates.length === 0) return false;  
            const lastUpdate = this.updates[this.updates.length - 1];  
            const text = lastUpdate.message ? lastUpdate.message.text || '' : '';  
            return text === args.TEXT;  
        }  

        getLastUsername() {  
            if (this.updates.length === 0) return '';  
            const lastUpdate = this.updates[this.updates.length - 1];  
            return lastUpdate.message && lastUpdate.message.from  
                ? lastUpdate.message.from.username || lastUpdate.message.from.first_name || ''  
                : '';  
        }  

        async replyToLastMessage(args) {  
            const chatId = this.getLastChatId();  
            if (chatId) {  
                await this.sendMessage({ CHATID: chatId, TEXT: args.TEXT });  
            }  
        }  

        getAllUsers() {  
            return Array.from(this.allUsers).join('; ');  
        }  

        getRecentUsers() {  
            return this.recentUsers.map(user => `${user.chatId}: ${user.username}`).join('; ');  
        }  

        async clearUpdates() {  
            this.updates = [];  
        }  

        async _updateUsers() {  
            this.updates.forEach(update => {
                if (update.message && update.message.from) {
                    const user = {
                        chatId: update.message.chat.id.toString(),
                        username: update.message.from.username || update.message.from.first_name || 'Unknown'
                    };
                    const userKey = `${user.chatId}:${user.username}`;
                    if (!this.allUsers.has(userKey)) {
                        this.allUsers.add(userKey);
                    }
                    this.recentUsers.push(user);
                    if (this.recentUsers.length > this.maxRecentUsers) {
                        this.recentUsers.shift();
                    }
                }
            });  
        }  
    }  
 
    if (typeof Scratch !== 'undefined') {  
        Scratch.extensions.register(new TelegramAPIExtension());  
    }  
})(Scratch);  