// BUENA PRACTICA: Implementacion de clases y herencia de los principios POO

class Notification {
    constructor(user, message) {
        this.user = user;
        this.message = message;
    }

    send() {
        throw new Error("This method must be overridden");
    }
}

class SMSNotification extends Notification {
    send() {
        console.log(`Sending SMS to ${this.user.phone}: ${this.message}`);
    }
}

class EmailNotification extends Notification {
    send() {
        console.log(`Sending Email to ${this.user.email}: ${this.message}`);
    }
}

class PushNotification extends Notification {
    send() {
        console.log(`Sending Push Notification to ${this.user.name}: ${this.message}`);
    }
}
