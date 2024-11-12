const winston = require('winston');
const axios = require('axios');

class Logger {
    static logger() {
        // Logger:
        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.printf(({ timestamp, level, message, ...meta }) => {
                    return `${timestamp} [${level.toUpperCase()}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
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
                logger.info('Request', {
                    method: config.method,
                    url: config.url,
                    headers: config.headers,
                    data: config.data
                });
                return config;
            },
            (error) => {
                logger.error('Request error', error);
                return Promise.reject(error);
            }
        );

        // Interceptor for responses:
        axios.interceptors.response.use(
            (response) => {
                logger.info('Response', {
                    status: response.status,
                    data: response.data,
                    headers: response.headers
                });
                return response;
            },
            (error) => {
                logger.error('Response error', {
                    message: error.message,
                    data: error.response ? error.response.data : null,
                });
                return Promise.reject(error);
            }
        );
    }
}
module.exports = Logger;