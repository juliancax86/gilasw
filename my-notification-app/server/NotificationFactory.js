// PAtron de diseno FACTORY para reducir la complejidad de los consumidores por medio de encapsulacion.
const { SMSNotification, EmailNotification, PushNotification } = require('./NotificationClass');

class NotificationFactory {
    createNotification(type, user, message) {
        switch (type) {
            case 'SMS':
                return new SMSNotification(user, message);
            case 'Email':
                return new EmailNotification(user, message);
            case 'Push':
                return new PushNotification(user, message);
            default:
                throw new Error("Unsupported notification type");
        }
    }
}

module.exports = NotificationFactory;
