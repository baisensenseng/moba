module.exports = (app) => {
  const router = require("express").Router();

  const mongoose = require("mongoose");
  // const Article = require('../../models/Article')
  const Article = mongoose.model("Article");
  const Category = mongoose.model("Category");
  const Hero = mongoose.model("Hero");
  const Video = mongoose.model("Video");

  // 导入新闻数据
  router.get("/news/init", async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类",
    });
    const cats = await Category.find()
      .where({
        parent: parent,
      })
      .lean();
    const newsTitles = [
      "全民电竞一起拼——主播月神、赵小西挑战三连胜",
      "斗鱼战队与你一起全民电竞一夏",
      "蔷薇恋人设计稿方案票选活动结果公布",
      "全国大赛盛夏来袭，虎牙主播带你为梦想放手一搏！",
      "2021周年庆表现道具设计大赛开启！",
      "8月2日全服不停机更新公告",
      "7月31日全民电竞积分异常处理完成公示说明",
      "7月31日全服不停机更新公告",
      "7月30日全民电竞积分异常及后续处理方式公示说明",
      "7月30日体验服停机更新公告",
      "蔷薇恋人设计稿方案票选活动结果公布",
      "《与你相遇，共赴荣耀》活动公告",
      "【蔷薇珍宝阁】活动开启公告",
      "互动小任务第10期-蔷薇恋人设计稿票选开启公告",
      "骄阳正似火，峡谷齐欢乐",
      "零门槛当电竞选手！一图带你玩转全国大赛游戏赛道！",
      "第四届全国大赛开赛倒计时三天！成为电竞选手你一定要知道的三件事",
      "王者荣耀全国大赛走进武汉，电竞与城市的命题究竟有多少解法?",
      "决胜江城，英雄出征——第三届王者荣耀全国大赛总决赛回顾",
      "全国大赛十大喝彩瞬间⑩：总决赛圆满落幕 携手武汉持续探索电竞新可能",
    ];
    const newsList = newsTitles.map((title) => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
      return {
        categories: randomCats.slice(0, 2),
        title: title,
      };
    });
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList);
  });
  router.get("/news1", async (req, res) => {
    console.log(req);
  })
  // 新闻列表接口
  router.get("/news/list", async (req, res) => {
    const parent = await Category.findOne({
      name: "新闻分类",
    });
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "categories",
          as: "newsList",
        },
      },
      {
        $addFields: {
          newsList: { $slice: ["$newsList", 5] },
        },
      },
    ]);
    const subCats = cats.map((v) => v._id);
    cats.unshift({
      name: "热门",
      newsList: await Article.find()
        .where({
          categories: { $in: subCats },
        })
        .populate("categories")
        .limit(5)
        .lean(),
    });

    cats.map((cat) => {
      cat.newsList.map((news) => {
        news.categoryName =
          cat.name === "热门" ? news.categories[0].name : cat.name;
        return news;
      });
    });
    res.send(cats);
  });

  // 导入英雄数据
  router.get('/heroes/init', async (req, res) => {
    await Hero.deleteMany({})
    const rawData = [{ "name": "热门", "heroes": [{ "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "曹操", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "杨戬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "狂铁", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "扁鹊", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "姜子牙", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "女娲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "沈梦溪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "白起", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "项羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "猪八戒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "阿轲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "娜可露露", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "百里玄策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "蔡文姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "鬼谷子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "明世隐", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }] }]
    for (let cat of rawData) {
      if (cat.name === '热门') {
        continue
      }
      // 找到当前分类在数据库中对应的数据
      const category = await Category.findOne({
        name: cat.name
      })
      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category]
        return hero
      })
      // 录入英雄
      await Hero.insertMany(cat.heroes)
    }

    res.send(await Hero.find())
  })

  // 英雄列表接口
  router.get("/heroes/list", async (req, res) => {
    const parent = await Category.findOne({
      name: "英雄分类",
    });
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: "heroes",
          localField: "_id",
          foreignField: "categories",
          as: "heroList",
        },
      },
      // {
      //   $addFields: {
      //     heroList: { $slice: ["$heroList", 5] },
      //   },
      // },
    ]);
    const subCats = cats.map((v) => v._id);
    cats.unshift({
      name: "热门",
      heroList: await Hero.find()
        .where({
          categories: { $in: subCats },
        })
        .limit(10)
        .lean(),
    });

    // cats.map((cat) => {
    //   cat.heroList.map((news) => {
    //     news.categoryName =
    //       cat.name === "热门" ? news.categories[0].name : cat.name;
    //     return news;
    //   });
    // });
    res.send(cats);
  });

  // 文章详情
  router.get('/articles/:id', async(req, res) =>{
    const data = await Article.findById(req.params.id).lean()
    data.related = await Article.find().where({
      categories: {$in: data.categories}
    }).limit(2)
    res.send(data)
  })

  router.get('/heroes/:id', async (req, res) => {
    const data = await Hero.findById(req.params.id).lean()
    res.send(data)
  })

  router.get('/videos/list', async (req, res) => {
    const data = await Video.find()
    res.send(data)
  })

  router.get('/videos/:id', async (req, res) => {
    const data = await Video.findById(req.params.id).lean()
    res.send(data)
  })
  

  // 支付模块
  // const alipay_f2f = require('alipay-ftof')
  const alipayf2f = require('alipay-ftof')
  router.post("/createInvoice", (req, res) => {
    console.log(req.body);

    const alipay_f2f = new alipayf2f(require("./config"));
    var totalAmount = req.body.totalAmount || "";
    if(totalAmount == "") {
      return res.error("请填写测试金额.");
    }
    totalAmount = parseFloat(totalAmount);
    if(isNaN(totalAmount)) {
      return res.error("测试金额输入错误.");
    }
    /* 支付宝支持2位小数的金额 */
    totalAmount = totalAmount.toFixed(2);

    /* 生成订单唯一编号 仅作为演示 请勿使用在生产环境 */
    var noInvoice = `alipayf2f_${new Date().getTime()}`;

    var createInvoiceResult = null;

    /* 参数详细请翻源码 */
    alipay_f2f.createQRPay({
      tradeNo: noInvoice,
      subject: "测试订单",
      totalAmount: totalAmount,
      body: "女装物品",
      timeExpress: 5,
    }).then(result => {
      if(result.code != 10000) {
        return res.error("支付宝网关返回错误, 请联系管理员.");
      }
      res.send(result)
    }).catch(error => {
      if(error.info != null) {
        console.error(error.message, error.info);
      }
      res.error(error.message);
    });
  });


  router.post("/alipaycallback", (req, res) => {
    // console.log(req);
    console.log(req.body);
    const alipay_f2f = new alipayf2f(require("./config"));
    var signStatus = alipay_f2f.verifyCallback(req.body);
    console.log(signStatus);
    // if(signStatus === false) {
    //   return res.error("回调签名验证未通过");
    // }

    var noInvoice = req.body["out_trade_no"];
    var invoiceStatus = req.body["trade_status"];

    if(invoiceStatus !== "TRADE_SUCCESS") {
      return res.send("success");
    }

    // req.database.update(noInvoice, { pay: true }).then(result => res.send("success")).catch(err => res.catch(err));
  });



  const fs = require('fs');
  const path = require('path');
  const request = require('request');
  const fetch = require('node-fetch');
  // 引入相关模块
  var http = require('http')
  var querystring = require('querystring')

  // 抖音视频解析
  router.post("/analysisurl", (req, res2) => {
    if (req.body.url.indexOf("ixigua") !== -1) {
      console.log('dy');
      var reg= /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
      const matchurl = req.body.url.match(reg);
      fetch(matchurl).then(res => {
        console.log(res.url);
        const item_ids = res.url.replace(/[^0-9]/ig,"");
        fetch(`https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${item_ids}`).then(res => res.text()).then(res => {
          const resUrl = JSON.parse(res).item_list[0].video.play_addr.url_list[0].replace('playwm', 'play')
          const filename = JSON.parse(res).item_list[0].desc + '.mp4';
          console.log('resUrl:',resUrl);
          find_link(resUrl, function(link){
            res2.send(link);
          });
        }).catch(err => {
          console.log(`输入内容“${url}”解析失败：`, err);
        })
      }).catch(err => {
        console.log(`输入内容“${url}”解析失败：`, err);
      })
    } else {
      console.log('xigua');
      console.log(req.body);
      const data = req.body.url;
      console.log(data);
      var request = require('request');
      request(`https://tenapi.cn/video/?url=${data}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the baidu homepage.
          res2.send(body);
        }
      })

    }
    
  });




  





  /**
   * 解析抖音链接，并去除水印
   * @param {string} url 解析地址
   */
  function parseDouyinUrl(url) {
    
  }

  /**
   * 下载链接生成的视频
   *
   * @param {string} url 下载地址
   * @param {string} filename  下载到本地的名字
   * @param {function} callback  回调
   */
  function downloadParseUrl(url, filename, callback) {
    var stream = fs.createWriteStream( path.join(__dirname, '../download/' + filename));
    request(url).pipe(stream).on('close', callback);
  }

  function find_link (link, collback) {
    var f = function (link) {
      var options = {
        url: link,
        followRedirect: false,
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Charset': 'UTF-8;',
          'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8',
        }
      }
      request(options, function (error, response, body) {
        console.log(response.statusCode);
        if (response.statusCode == 301 || response.statusCode == 302) {
          var location = response.headers.location;
          console.log('location: ' + location);
          f(location);
        } else {
          //console.log(body);
          collback(link);
        }
      })
    }
    f(link);
  }

  app.use("/web/api", router);
};
