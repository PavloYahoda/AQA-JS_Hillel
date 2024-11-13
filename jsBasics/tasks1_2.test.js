const axios = require('axios');
const Helper = require('./Helper');
const Logger = require('./controller.logger');

// Logger:
Logger.logger();

describe.only('Task1', () => {
    test('Check error message', async () => {
        try {
            await Helper.getData();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toMatch(/Request failed with status|No response received from server|Request setup error/);
        }
    });
});

describe.only('Task2', () => {
    test('Get userId', async () => {

        const response = await axios.get(Helper.baseUrl + Helper.usersEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        expect(response.status).toEqual(200);

        const responseData = response.data;

        // Set userId:
        const user = Helper.findUser(responseData, Helper.userName);
        if (user) {
            Helper.userId = user.id;
            console.log(`UserId: ${Helper.userId}`);
        } else {
            console.log('User not found');
        }
    });
    
    test('Testing Request Headers and Params', async () => {
        const response = await axios.get(Helper.baseUrl + Helper.postsEndpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Custom-Header': 'HeaderValue', 
            },
            params: {
                userId: Helper.userId,
            },
        });

        console.log(`Count of posts: ${Helper.countOfPosts}`);
        expect(response.status).toEqual(200);
        expect(response.config.params.userId).toEqual(Helper.userId);
        expect(response.config.headers['Content-Type']).toEqual('application/json');
        expect(response.config.headers['Custom-Header']).toEqual('HeaderValue');
    });
});

