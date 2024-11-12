class Helper {

    //URLs:
    static baseUrl = 'https://jsonplaceholder.typicode.com';
    static usersEndpoint = '/users';
    static postsEndpoint = '/posts';
    static commentsEndpoint = '/comments';

    //Bodies:

    static userName = 'Clementine Bauch';
    static postBody = {
        title: 'Test title',
        body: 'Test body',
        userId: Helper.userId,
    };
    static patchBody = {
        body: 'New Test body',
    };

    //For testing
    static postId;
    static userId;
    static countOfPosts;

    //Functions:
    static findUser(users, userName) {
        return users.find(user => user.name === userName);
    };

    static async getData() {
        try {
            const url = Helper.baseUrl + Helper.postsEndpoint;
            const wrongUrl = Helper.baseUrl + Helper.postsEndpoint + 'wrongPart';

            const response = await axios.get(wrongUrl);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(`Request failed with status ${error.response.status}`);
            } else if (error.request) {
                throw new Error('No response received from server');
            } else {
                throw new Error(`Request setup error: ${error.message}`);
            }
        }
    }
}
module.exports = Helper;