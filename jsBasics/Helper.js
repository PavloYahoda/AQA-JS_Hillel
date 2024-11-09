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
    }
}
module.exports = Helper;