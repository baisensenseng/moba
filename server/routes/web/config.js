// config.js

module.exports = {

	/* 以下信息可以在https://openhome.alipay.com/platform/appManage.htm查到, 不过merchantPrivateKey需要您自己生成 */

	/* 应用AppID */
	"appid": 2021001163674817,

	/* 通知URL 接受支付宝异步通知需要用到  */
	"notifyUrl": "http://moba.xrfclub.com/web/api/alipaycallback",

	/* 公钥 和 私钥 的填写方式 */
	// "testPrivateKey": "-----BEGIN RSA PRIVATE KEY-----\n" +
	// 	          "公钥或私钥内容..." +
	// 	          "\n-----END RSA PRIVATE KEY-----",

	/* 应用RSA私钥 请勿忘记 -----BEGIN RSA PRIVATE KEY----- 与 -----END RSA PRIVATE KEY-----  */
	"merchantPrivateKey": "-----BEGIN RSA PRIVATE KEY-----\n" +
                        "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCGvQWc1K4VDlBZ8TUJhVQ3bkMtA7qkgc/4nzBrUacn1yh6GITg6b088hozaQen2voV8NlNJo3fYrXpN5BJSRsCoe7XHiE28YGgrVaqLLfVvj+sCi7WjNhA9Ey1u3j+Lz+TMUoOnnSl26+bA1Rmz6xCW5tj6qRD6/PrGB1bM0nKJwGVv76FVFswXXLTQ3C9lWOMH6Dbu6OZmzdb+7e32V2QSaGaTBjE6CEcLn0yNbyFTeyN1ufNyTzSBOvx+uVdIqbUKGhQoIZm2JKWvjYhMUUjUG7hnEVIqAoRPTEE5e+QYCKIJReRgKiazAuPFKRJqFXvLvPzX/prbHtEYzgGvpnbAgMBAAECggEAQNwlI4XN9xzY2TMf0OF51OUjOTweUKqcrpYS/NZlnOwZ9AxxisN58SiqLC1XHhpvYLh8IoN4sBwYbZftwRmMAwxoqO08F/LR78MBgRHdvOrEQ9DzExzhzQLNGn6Qk+uysux7NeZZSK4kLn6/1m4KAjeO6d4+DOQ8muMU3p4l20WPiySkpywfpkJo6a6ViFBX6eVyil70LZvLsmsJel33slbp7GbAKdF0D98yUeWkZ+KgHVxLdchdYOcZarLtinOJ8r01r32P6w9v+NWjoq4ib3JBwwGJwMLqQGY6/WRLvNk1BXFtY31F5e+r45FcBFnR4r5xG3g/o7MqGuaRAwpRgQKBgQDRUNUBLCda+9lcVITPzieQiH4YfozeNM4Y80LfhsXmfYj9ZymHdOttuClZlD/7jWcv7GbavQ9evE9syaLArRnWKs4N4NaSvYBmxeWeVcAHhjwIbwUYpxaEo8SLy06y5Xb3gS3QgnZBMsv4G5+Mkv8mn/i2SyflamGgK95X2rRIqwKBgQCkyheyP8EmndwGTC2s6+A0wszkxlYGb5wxegheXRgfVeNOD316ryy5WjDwtpik6W7FMyP2Mp02p1ilipfjyr0u//WAV62nHo6k8tl3K9yznqofD6mrZTC0oLgjnw/PoVxAKytypJ7Cp0gWJrcmJMcPl8lPuJEwEyn4CC/eHTZTkQKBgEr05GJ4GlvVpqAO0ETOcZKrnmRNJUsJo+iBbKg5TjNdLyp3wAJ3FzwCYCRpF4SQvawGv0qDu7ZUPykZCARxuLfeOk3z/0MrQ4kKQ1ExKgRHyMXIZA3RABpdvyvEkZk03SaDBxINNiXg9/QQiFFB7sc5MEqvnUjlkLJYI1ZYxojjAoGAFP+He3gyRZhx8/97BoDcBf0YnMJFLfbE4W0aaePU8hFAsK66n4p42XmLqPCrjMAOFGTK3VFfxRoX6qg5aJZp+vY0s1D42MXFCXHEkjHtopnCNckKJsPzK+Ea9bcMDboTBj46ABbIACfOwLvYNK0VDICb72OmZIjcnTV13Ai+5nECgYEAjU0TJGxFgS/QtPpB2ACoXTjEZ/r9ge0kObYyORIlWEMrBk9uoUdaQZzLqBkwRCwGXLywRvfxbIzNMIOxf0ptQkVNEGZv2WAkFfnQNTZXzViEKVaJfzTN7/XvLa8Bj3LU5Cny7DjSVX9nMDiDMx2SYK4lHULIdwIJB55jZptGCX4=" +
                        "\n-----END RSA PRIVATE KEY-----",

	/* 支付宝公钥 如果为注释掉会使用沙盒公钥 请勿忘记 -----BEGIN PUBLIC KEY----- 与 -----END PUBLIC KEY----- */
	"alipayPublicKey": "-----BEGIN PUBLIC KEY-----\n" +
                     "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtAVMWOBZmIxZnS+9AEYeTbRxO6G6Z2iICvReRhYRxWFUeFLzNrYfLoL8+l2ylu7kQslQM/YqJsv2C5NIulTvK7Cio9q3iWIVF6as7U6Wj/khOFeO9lY/m3NkDLXsCR9XMktNqtHK6SUjjIUeiHeRaKjx6PG3ex2BySv5dVkSF24jcAIz7B7pCdb6j7H5thpkuw2nTTC6+Lo/nOdst9kIUmc6By0TuzrsrkMmUA0obqqe3rQZ6BvYm3BJKbpCV8Biuvc4mfvJ2cpDEGvTPClOolD87TZzXemoyzKL763umOv7GSvqTXKaILJIAqMpmnRSk6aGQWL8W36aSHRKnUfzawIDAQAB" +
                     "\n-----END PUBLIC KEY-----",
	
	/* 支付宝支付网关 如果为注释掉会使用沙盒网关 */
	"gatewayUrl": "https://openapi.alipay.com/gateway.do"
};
