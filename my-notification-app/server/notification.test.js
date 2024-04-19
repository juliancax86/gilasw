const request = require('supertest');
const app = require('./app');

describe('POST /send-notification', () => {
    it('should respond with a 200 status code for valid request', async () => {
        const response = await request(app).post('/send-notification').send({
            category: 'Sports',
            message: 'New game tonight!',
            type: 'Email' // PASS
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Notification sent successfully.');
    });

    it('should respond with a 500 status code if the notification type is unsupported', async () => {
        const response = await request(app).post('/send-notification').send({
            category: 'Sports',
            message: 'New game tonight!',
            type: 'CarrierPigeon' // FAIL
        });
        expect(response.statusCode).toBe(500);
    });
});
