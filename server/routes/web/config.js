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
                        "MIIEogIBAAKCAQEApTduShixPHKtyKWIS3R08ukl2/Oy8ml2ePYJHqZqkHuQrvnJAbdb9Q2/Pb73Mu74NZmlZOJxed8xWuxv19ft12buSN51gB8hMUeEF1hwB/ogtDwiY3LEXYhLZDc8BYsF0dOtp9RY4JPyoXpIuXTAZzfE7CU9CRQ8WK5zcke/cNlzkn2xen6FBIdMxszBH9BfdZybTkcX1AnXd3iJkPxfHbf15Ldy5jknU8Zx7emd8gynfsZgILt0mef12w5g1FMCO4ELadoECrtctRIL3loQ9tyZTKRZ28JunjpSX5rt3xhCU+CDdW3nA3Opl6GpbYMN68NZ0NxFu1oRsmAWi5L4xQIDAQABAoIBACwqMCpQhXhiM4Byd4esHuMcXgl5ELnqZUgahP+TfuMWlOuhTBFQYZ2VSi0IUm5kISe65dKdEbaBamEi2Rb62tJ86m/CP+i66ZWRx4ayFmibfYiQlqS89i8Gkxi8Byh4LFsV2dMGWafXBMITvUMOKayt5M83eSRnK2aNY8EF2vAgUnrey7Js+uxZWlFAq37bsefezX4iHq0T1/ouu29zBz/QmHhvDOveylpOgeIdO3meIPDGwc5xzG2osj0awMyHRySfacYZSTN3UkO8PaDiampUUPdqUnkTVE13mrTI2TM2v5/A8MKic/gq3SpUTV4Xt5IQQHbcESspkVAlfR+6v/UCgYEA4JCLUyP+nQgNRFGCPrJLg4xJJkvnlRftKBB398o88jFwNOkXZWNKupzddAMmGUzB9w0IOIm/5/FhnJCrYLGYQ63fVdR1Esa59rfDBHIU2WXj7JPLcTIo8kRKtkEsTeDFZYiUpcRU+F8X0s+EI42ZPJL3EZBmqZSWz24Km9wKp68CgYEAvFgZZ8ZDJ/Sy3eHsDn9buktAAJN/XoHMvP3ls8cIgg4j49zuUDC9NLAeBMLmChOUYzew4LcXrkaD+6e/VvIVKHA5CF8mrF7P6LqBs1bvaChCukHhi+yo/7j2uUP6irdosjwN6ktNWo/5+QuxN87M9mwpk59cdgnCpx0HU5fvT8sCgYBBgwmSPKr3xrSQHLNBdSRAgTmJ2ZT60tsV2BAXksFK6o9QcDuqEVhoroCQaqa/tLvVRdEDJXR9xtZyJWZJtCW2gM/pqyxoSN9RkXRsJJfegDII/2jXYgm9+5xMJSE2qv8LStgKsAcV2jAKCQ4EjTeKC1nWnujEShvg8bpYk83r8wKBgFaRu+OqCnYUEB7SV/j16wh+zAU3xoR+7sczgGAYrL1ymGaExvkO3fiYtsODfc7F3x+XmnI/VeAhw0ppeRYSoUz8AArsCU+TKMcU6sauv83FK56G54+0EJ2xu52+NCuMT9AUsGSvhfeJU+F30VYQdL8TSizzQ8FxjQnY2uQ+Yp3vAoGATvHOjQJBAyGt4YcQsvcJqFUGvKT9O8sSY0BNyH2eIYPGFglYjvExymGmVU8sLzrpRJlcBNALHpwlWw7OD/+8+zrn7SD3V/qRMwy2nApUV1bFNkDScJIA3jnwnfLU+ZZkntuPWzSbTEUhHurQo/0zD9s4SLc/jC+KOF6S1ahhRZo=" +
                        "\n-----END RSA PRIVATE KEY-----",

	/* 支付宝公钥 如果为注释掉会使用沙盒公钥 请勿忘记 -----BEGIN PUBLIC KEY----- 与 -----END PUBLIC KEY----- */
	"alipayPublicKey": "-----BEGIN PUBLIC KEY-----\n" +
                     "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtAVMWOBZmIxZnS+9AEYeTbRxO6G6Z2iICvReRhYRxWFUeFLzNrYfLoL8+l2ylu7kQslQM/YqJsv2C5NIulTvK7Cio9q3iWIVF6as7U6Wj/khOFeO9lY/m3NkDLXsCR9XMktNqtHK6SUjjIUeiHeRaKjx6PG3ex2BySv5dVkSF24jcAIz7B7pCdb6j7H5thpkuw2nTTC6+Lo/nOdst9kIUmc6By0TuzrsrkMmUA0obqqe3rQZ6BvYm3BJKbpCV8Biuvc4mfvJ2cpDEGvTPClOolD87TZzXemoyzKL763umOv7GSvqTXKaILJIAqMpmnRSk6aGQWL8W36aSHRKnUfzawIDAQAB" +
                     "\n-----END PUBLIC KEY-----",
	
	/* 支付宝支付网关 如果为注释掉会使用沙盒网关 */
	"gatewayUrl": "https://openapi.alipay.com/gateway.do"
};
