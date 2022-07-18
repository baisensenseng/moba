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
	// "MIIEpAIBAAKCAQEAgOT/8mEIqhGm3xJDqUaaQgbUy0870WJUJfHfwIWb0N1SS+WRaCVH7VjqEcOfVvWVMTJj5MtosOtoDNPTZl/egTYVZllbIJq2j40P8TVM68Ga5TeNVwvkw9zlF8M+Sz3TRAfPaoHxw7msPKvLRVk+LaiRfH1JHF4shqmYqOZ67Co8GsYUjb3ka2VDpWyq/p80uludjmmcEN4UVB5XU+oYL7yZycZiTrFpL2lYbMpg0zBWMk3ld/Zdvr8IcToBqd3UwwhlsJbcMSjFkQpCGEp6QI09IHwahPC262Q/z3a63+EdPuRUiR0Utz+m3Ue5/8mUoiw+ZLGIBN3ENWdhOAYlaQIDAQABAoIBABBjDNc31u4oSFrb65Y9z6bNT4h5jlVUdvZMBfJoCiNHwAq+KPpgowBd6YRQppVbq5gRm/mekrTLePMIizvcvGEZCydz/M3sXYFqobg82oaumo7BvUpvzKnKD6YxwF24gn+HrqsP0jjcBjXAcZtjeTA82iJFm2Hr5yVHsozmoIIdu/92PNU0xi+0SvlFcl8IsfwWSasCWuYFF1f93KUAM6GH7Tr6pIxDbWXdMje/G9NO11J0de8ihbEJ9PTG5RDXWivPUJ17UewLIef7PkdKC6p82iFPKkGBKdUOQamuh6KlPM9e6IU0CkQ1BahYiFCa4EgjdI5gk6z/IeclNDXw3sECgYEA+Nr4obO2qx4f5GEoBdvcX9zUAsjpX2m6GxOWwG1Qqz32GZ/9cmlQF8DwPNtfOoOMHXXb+6fxrtqrjGQWIpIyLCgCy//TPmgVj19+WIMCUieEgksMqqFfUNpfXeTjAOIp4yozojTy8yo2ZBQ/iarAlS9VWvedsEb+jG2eyqc6EH0CgYEAhJhYMXxzw02vuJERSLNR2vx99ugI9zP73c/qoIWbAPw8Rs19vK4y7xJ25JpZdxrV6klLbwxZFwAbqFWIWMVwFSbWBm6lZr73Af0IdpgZPbY09GhCtwb7HN983zbkTujLxJHvApQtlqqtRk6t9cwG4Z0/dGQxpO+PXe6ltFVnSF0CgYEAyyQktgs34DO1IP7WZwH0wSRIxQUwzDxIOXYiJ26U3VS1InHhuJWTVfCfq24ALInZxOrC6olL1sqWIwJIt2vUHQuETPbGgDkC8IipYKOBL4Mmvh15d4hHgH7iPolrbPsx6kg24gCLGkipIcUNoNmMX7vF134ucQljHUsWxqL/2RkCgYAv/Q8WQeuHyMsLKn2t6TB76BwSy2HLTiYe3kwVcqVp0uBh46dZLVbDzdP34qD0iWLYW1SQyVBJEcHwx5wEPNjW3uphA5SbPgwZzSFOArhH7HT36/ARW9ZwWbZQ9wXkRT7SUtrE/SoOuJDjvEAbkI8BAq9fiY+qGQWzQlb4kFxEBQKBgQCJNV/XAu5yxyiFtnnnobPMB6UAnYOLcz3ir7pG1ZBxYtRPZvA7ENncuA1brZjGG7XCd/Vqfobvi8y27s0MzQfALgI1MrJawfq0HUwfRaajSgv0fpkDxgIvEIDcRYYoGnV4xYykJFcJYe5wjyZAV0xQHZGEn2v7cT9WvakrlftKBQ==" +
	"merchantPrivateKey": "-----BEGIN RSA PRIVATE KEY-----\n" +
                        "MIIEpAIBAAKCAQEAvlXcCpwJHutqXpEfhLKa7Nfm9vaQxXC+QEWFIZq/bLS//wklmyyTa0eRAg0o85XHv+kkS56U6eozZGZJkD7zfBcfR0OQGHQJrzc/EUHvU4GUuK1Fg63tVC6rHv+5YfsPsNEXsavC3WH4iI5JsvtMxrChqQ+VttCGf1x4fiPc49dUEiLu+5Sk2B+OdZ/jZOwDaILb2eOsDQtty9JLbXOH6V9tcdQAZ8Um268M08xkpyJ+e04+s0Tv79fnsFOrgfGL70g1f8SzOStKGie74UtBI2DIGWRuuQu+sLYyMqTLMxzwj/MrHJNxNpGid73Ia3Xpf/FC5WoFoNC9D8OQaU5nhwIDAQABAoIBAByK+6iLpcKBQz5TPQrFTf5ekkBO0X8KXT1+L2zOrA49PN2eHYmbsa/Q16obFx0QRRg+ejbs3SAHAxX3UOjUx+bAAOzK8Pz5ycoA2vBXlvBK6maXdWk91+1b4kWPy9kpsTyu3oLCY0KXwpGX5O12Shkxu8yCjc0QkFrhHyCreCCik77ypZ3s6JJCm2fldHKdeSCQa+4x6McIsyXVZazyR2RMG8UC825vUxraxzZ0FeyV/O+XSbi00jswZynejqzZfS035hPP8v6Z3P6Grkr0VJhxJNPACD0hYcGw75bInNK6FtgqDEsnorVx549+6dl2iRpoUpaNtdUehdDOOoBc0eECgYEA347X0u9FeZp6r7H2+YxHgIjK7Ca2DLGvOXZb+U3duD23p31SUa4UKolwSbq22OAkAuwjHIa7IxNGBcChEWjDeZqKWj9bc6dcC93xpCmfIjmlCTqGwyu8jWts103M4rfsPQ9ECIG+prmBtKEdusxbwCzhFqWxoXMO8KkR0wr/Dr0CgYEA2fTM6xAZPI7vbaaRW2nwyVvgCZNaCPusYCH6IveuSZzE11N1ewKN1TFFexG0bdtQVoepK/fa463tZ/jtCh7NVBwjJkcG0V9BCAuP4olyaPk2c2mF8M84gfCCGz1mxAf7awfMTAq8Qd1R20F2PLTeSc7OZtWKbruNoD2+4s9gRZMCgYEAypDNAMVrx1bxafewmMfCFjZc4IPnGzN5WXDkv84NZB8QJUSJ7Zb1kOF+DGCRw4u9NaSv3+447PxOy3GSwIqT7MDaMhIMlIwF/H67sItCNSnUX7tXVstvixjWw3QsfRY4ic8mTyr5DGs0mu4OWS9Ix6YiwnmarXbrB6e6jeb922UCgYEAvaDB5MXF3y1Q3KquDsWWa+pWep5MGEK3D5CgK2oopf0SOXFwZgyrz8+lbtTRkT7dn9s58XocZDi/s9UcjtCLvmEYp8XmBaWFU/WTQvpoozIoELO/h+sSc+MHn6GFVorHULChK4uvjPJ8tHE46MpIGBko9MlXPs5JAyCVgooAbacCgYByy6m30nQ5LCiypJOvC3hFQed8uadz51OVkUiwTwCJrPJBWW7oSoWg78VDHoFhaiePdP4FlxqFkJwEzJR2/6dXYTvqwrx8qTsutDVxu4XLtEDOWJkTAHjuKq3rKs22yxjQdpQ7NpnMc0WGybE/aCwl1GaRrVaPhMiN7ugPYdpXPA==" +
                        "\n-----END RSA PRIVATE KEY-----",

	/* 支付宝公钥 如果为注释掉会使用沙盒公钥 请勿忘记 -----BEGIN PUBLIC KEY----- 与 -----END PUBLIC KEY----- */
	"alipayPublicKey": "-----BEGIN PUBLIC KEY-----\n" +
                     "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtAVMWOBZmIxZnS+9AEYeTbRxO6G6Z2iICvReRhYRxWFUeFLzNrYfLoL8+l2ylu7kQslQM/YqJsv2C5NIulTvK7Cio9q3iWIVF6as7U6Wj/khOFeO9lY/m3NkDLXsCR9XMktNqtHK6SUjjIUeiHeRaKjx6PG3ex2BySv5dVkSF24jcAIz7B7pCdb6j7H5thpkuw2nTTC6+Lo/nOdst9kIUmc6By0TuzrsrkMmUA0obqqe3rQZ6BvYm3BJKbpCV8Biuvc4mfvJ2cpDEGvTPClOolD87TZzXemoyzKL763umOv7GSvqTXKaILJIAqMpmnRSk6aGQWL8W36aSHRKnUfzawIDAQAB" +
                     "\n-----END PUBLIC KEY-----",
	
	/* 支付宝支付网关 如果为注释掉会使用沙盒网关 */
	"gatewayUrl": "https://openapi.alipay.com/gateway.do"
};
