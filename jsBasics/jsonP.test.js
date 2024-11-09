const axios = require('axios');
const Ajv = require('ajv');
const winston = require('winston');
const Helper = require('./Helper');
const JsonSchema = require('./JsonSchema');

// Logger:
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf(({ timestamp, level, message, ...meta }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${message} ${
          Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
        }`;
      })
    ),
    transports: [
      //new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/all.log', level: 'info' }),
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
    ],
  });

// Interceptor for requests:
axios.interceptors.request.use(
    (config) => {
        logger.info('Запит', {
            method: config.method,
            url: config.url,
            headers: config.headers,
            data: config.data
        });
        return config;
    },
    (error) => {
        logger.error('Помилка запиту', error);
        return Promise.reject(error);
    }
);

// Interceptor for responses:
axios.interceptors.response.use(
    (response) => {
        logger.info('Відповідь', {
            status: response.status,
            data: response.data,
            headers: response.headers
        });
        return response;
    },
    (error) => {
        logger.error('Помилка відповіді', {
            message: error.message,
            data: error.response ? error.response.data : null,
        });
        return Promise.reject(error);
    }
);

describe.only('Preconditions', () => {
    test.only('Get userId by userName', async () => {
        const response = await axios.get(Helper.baseUrl + Helper.usersEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        expect(response.status).toEqual(200);
        const responseData = response.data;

        //JSON Schema validation:
        const ajv = new Ajv();
        const validate = ajv.compile(JsonSchema.schemaOfUser);
        const isValid = validate(responseData);
        expect(isValid).toBe(true);

        //Set userId:
        const user = Helper.findUser(responseData, Helper.userName);
        if (user) {
            Helper.userId = user.id;
            console.log(`UserId: ${Helper.userId}`);
        } else {
            console.log('User not found');
        }
    });
});
describe.only('Testing', () => {
    test.only('Get count of posts by userId', async () => {
        const response = await axios.get(Helper.baseUrl + Helper.postsEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                userId: Helper.userId,
            },
        });
        expect(response.status).toEqual(200);
        const responseData = response.data;

        //JSON Schema validation:
        const ajv = new Ajv();
        const validate = ajv.compile(JsonSchema.schemaOfPost);
        const isValid = validate(responseData);
        expect(isValid).toBe(true);

        Helper.countOfPosts = responseData.length;
        console.log(`Count of posts: ${Helper.countOfPosts}`);
    });

    test.only('Post a new post and set postId', async () => {
        const response = await axios.post(Helper.baseUrl + Helper.postsEndpoint, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Helper.postBody),
        });
        expect(response.status).toEqual(201);

        const responseData = response.data;
        console.log(responseData);

        //Set postId:
        if (responseData) {
            Helper.postId = responseData.id;
            console.log(`PostId: ${Helper.postId}`);
        } else {
            console.log('Post not created');
        }
    });

    test.only('Update post #100', async () => {
        const response = await axios.put(Helper.baseUrl + Helper.postsEndpoint + '/100', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Helper.postBody),
        });
        expect(response.status).toEqual(200);

        const responseData = response.data;
        console.log(responseData);
    });

    test.only('Patching post #100', async () => {
        const response = await axios.patch(Helper.baseUrl + Helper.postsEndpoint + '/100', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Helper.patchBody),
        });
        expect(response.status).toEqual(200);

        const responseData = response.data;
        console.log(responseData);
    });

    test.only('Delete post #100', async () => {
        const response = await axios.delete(Helper.baseUrl + Helper.postsEndpoint + '/100', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        expect(response.status).toEqual(200);
        expect(JSON.stringify(response.data)).toBe('{}');
    });
});
