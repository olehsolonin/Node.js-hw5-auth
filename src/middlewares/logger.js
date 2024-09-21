import pino from 'pino-http';

const logger = pino({
	transport: {
		target: "pino-pretty"
	}
}); // створення мідлвари для логера(логування)

export default logger;
