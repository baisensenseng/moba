// config.js

module.exports = {

	/* 以下信息可以在https://openhome.alipay.com/platform/appManage.htm查到, 不过merchantPrivateKey需要您自己生成 */

	/* 应用AppID */
	"appid": 2021001164660630,

	/* 通知URL 接受支付宝异步通知需要用到  */
	"notifyUrl": "http://moba.xrfclub.com/web/api/alipaycallback",

	/* 公钥 和 私钥 的填写方式 */
	// "testPrivateKey": "-----BEGIN RSA PRIVATE KEY-----\n" +
	// 	          "公钥或私钥内容..." +
	// 	          "\n-----END RSA PRIVATE KEY-----",

	/* 应用RSA私钥 请勿忘记 -----BEGIN RSA PRIVATE KEY----- 与 -----END RSA PRIVATE KEY-----  */
	"merchantPrivateKey": "-----BEGIN RSA PRIVATE KEY-----\n" +
                        "MIIEogIBAAKCAQEAlfY+nAwYHusoqzy6rGPYbcOcXVmfotbkWkJRwvY84fEzLHBcYzmsCl+yqhXUTO8VH4YnqQeD6wSzVLetVJ3XVUu9By0Tu+zDgWYc094+s6xjRRhg5+XEM0L70UR8Wu/NJ5l17Bw9JKKIkE5W/Y8YQlua6B5ThKsnBLDlVAePsbf25/TACxB2eClupswbPg/R1oYP89BkxCT8xKWc4sDrjYFw0QbBWOK9x3q0tcKQNgXqveMTIoHHDQ+40j+LWyBXbDffQMcmjlgp0xtU4E6M5tDgxOhOF5O/fs8myevGO3G4NWqY2D3C+dujxuEWUhbJCurCfp08oZ6bxT8CRMRnswIDAQABAoIBAHSAY0+TzcFna6bsfRGkV+WeTAHxuKUnUSwVzbMq3U2ituDVQdEMYu2EPycH4nEKZFyjOniEkCWq9y7fq1bLcRigyG+kw2oBnDkQ/WBTjl7DlDN/pvlBdVVluoBvNjTni3gyLnyJy66EXpfNZKOD4ZLb29JsjPHKjXuFegP4A9hKI1Ek5fk8ggPbxfH1hqIxwdFsvP7rBPdSBKbyg+PVNp0vZjodETWPnxUsWq677b8WWgJMa18k1WNosm09AxTLFkH9DIBHlcRzbFqB/8r7J5KrgAALyoDlwwxWMXpw562/LuihVwgsYxwTcFXEWg6R5IkdkkKUa+V4cCjgSkuOZpECgYEA1x2r0B7pAkBn0teY9LoCMOiMu9gT/S+ueK/ARQDispAiBEKDnjK8wrbG9iMKL3FdNjBzXyISER8wFrQc4th7iypbqiihcSVc7F1v/EP5QxY8J5tlwUA2F+j0AV55RT4l1wxv9NkJjOp/CAV+mMpTtaYEbB71bGI9S+02d1t4LC8CgYEAsnaLy4nfalIYLucBY7gXi0CpvevO43CrB4fz5oHbMYara+fN9/wZbWj1Ox+YFdB+n+8erqTakJwJN2RR+yIAyVXn1wWvCRZamUXZtrD5RYWL4/5hTTuGJBxH3UiZyF1osn2FIswxIKXo80c9Ls5TkT34xgQ7Pp/q7rb5+bNxh70CgYBMHi2rqSReLZgPXUa8Yg1gbQlPdrgsAPFFtzrbr+KHuMSwqTCVi/KLG83vTprOCtkm0aIhaZbnBBgqEHWgN2YP6l8hKNtnhAcLhEyaARt0h6ulgDFTXntFnqKo0VssCz+shrQe+aWNfXSRzA/t1LomLqal85Z4UZLLCRcayP0O9QKBgFip7OpCpWz9PGaQ/m+8lnXoumxRK4h0AYTMVrC+81e3wJLrp7j81uU0sCGfoL+1xjNPab76yFvwKeQLQ2+xhRKCS5zYhg3NvVVJDtFlO3L+1nF/gHgOiqaGJm4aE80oG0wScILJT98YjpPPYOZQO9R9JYu7rnN+oAnZfnhAXrdBAoGAD14W8wV02aPpyKVHPQcbRZyxGO1LaLJl9suIOBgCzBAYdOaffMi6ahhMlWtCzwDMeerenzv8fVLOCOlVT/MkG21b3f/pz2aAMnoVwWULqrf/ZS//Rs7TPNyPcegnMn8FNudqJ8ExgGtIW9lFqxwV889HHYMRaMuKzo6h1y/OvDI=" +
                        "\n-----END RSA PRIVATE KEY-----",

	/* 支付宝公钥 如果为注释掉会使用沙盒公钥 请勿忘记 -----BEGIN PUBLIC KEY----- 与 -----END PUBLIC KEY----- */
	"alipayPublicKey": "-----BEGIN PUBLIC KEY-----\n" +
                     "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtAVMWOBZmIxZnS+9AEYeTbRxO6G6Z2iICvReRhYRxWFUeFLzNrYfLoL8+l2ylu7kQslQM/YqJsv2C5NIulTvK7Cio9q3iWIVF6as7U6Wj/khOFeO9lY/m3NkDLXsCR9XMktNqtHK6SUjjIUeiHeRaKjx6PG3ex2BySv5dVkSF24jcAIz7B7pCdb6j7H5thpkuw2nTTC6+Lo/nOdst9kIUmc6By0TuzrsrkMmUA0obqqe3rQZ6BvYm3BJKbpCV8Biuvc4mfvJ2cpDEGvTPClOolD87TZzXemoyzKL763umOv7GSvqTXKaILJIAqMpmnRSk6aGQWL8W36aSHRKnUfzawIDAQAB" +
                     "\n-----END PUBLIC KEY-----",
	
	/* 支付宝支付网关 如果为注释掉会使用沙盒网关 */
	"gatewayUrl": "https://openapi.alipay.com/gateway.do"
};
