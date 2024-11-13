const axios = require('axios');
const Helper = require('./Helper');

jest.mock('axios');

describe.only('Task3', () => {
    test('Successful GET request', async () => {

        axios.get.mockResolvedValue({
            data: { message: 'Success' },
            status: 200,
        });

        const response = await axios.get(Helper.baseUrl + Helper.usersEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        expect(response.status).toBe(200);
        expect(response.data.message).toBe('Success');
        expect(axios.get).toHaveBeenCalledWith(Helper.baseUrl + Helper.usersEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });    

    test('Failed GET request', async () => {

        axios.get.mockRejectedValue({
            response: {
                status: 500,
                data: { message: 'Internal Server Error' },
            },
        });

        try {
            await axios.get(Helper.baseUrl + Helper.usersEndpoint, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            expect(error.response.status).toBe(500);
            expect(error.response.data.message).toBe('Internal Server Error');
        }
    
        expect(axios.get).toHaveBeenCalledWith(Helper.baseUrl + Helper.usersEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });
});