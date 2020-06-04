const express= require("express")
//서버
// 서버 생성
const app = express();
const port = 3355;

app.listen(port,()=>{
    console.log("Start Server ...","http://localhost:3355")
})
// recipe_dtaa?page=

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const MongoConnect =require("mongodb").MongoClient;
app.get('/recipe_data',(req,res)=>{

    var page =req.query.page; // request.getparmeter("page);
    var rowSize = 12;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017"
    // 몽고디비 연결 -> 연결 객체 얻기
    // MongoClient client = new MongoClient()
    /*
            database : XE, mydb
            table => collection
            file형식으로 데이터를 만들어 주는 것

            docs= [ {}
            {}
            {}
            {}
            {}
            {}
            {} ] ==> docs = []
     */
    MongoConnect.connect(url,(err,Client)=>{
        var db = Client.db('mydb'); // XE
        //docs : 배열로 묶어줌
        db.collection('recipe').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {

                // send :: 문자 열로 전송하는 것 ( 일반 데이터를 전송하는 것)
                // json :: json 형식으로 전송하는 것
                res.json(docs); // model.addAttribute("list",list) -> javascript에서는 ArrayList가 없음(배열을 보내줌)

                // 연결 객체를 닫음
                Client.close();
        })

    })
})
app.get('/',(req,res)=>{
    res.send('Hello Java')
})
// SELECT CEIL(COUNT(*)/12.0) FROM recipe
app.get('/total_data',(req,res)=>{
    var url ="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db =client.db('mydb');
        db.collection('recipe').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/12.0)})
            client.close()

            return count;
        })
    })

})

app.get('/chef_total',(req,res)=>{
    var url ="mongodb://211.238.142.181:27017";
    MongoConnect.connect(url,(err,client)=>{
        var db =client.db('mydb');
        db.collection('chef').find({}).count((err,count)=>{
            res.json({total:Math.ceil(count/50.0)})
            client.close()

            return count;
        })
    })

})
app.get('/chef_data',(req,res)=>{

    var page =req.query.page; // request.getparmeter("page);
    var rowSize = 50;
    var skip=(page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017"
    // 몽고디비 연결 -> 연결 객체 얻기
    // MongoClient client = new MongoClient()
    /*
            database : XE, mydb
            table => collection
            file형식으로 데이터를 만들어 주는 것

            docs= [ {}
            {}
            {}
            {}
            {}
            {}
            {} ] ==> docs = []
     */
    MongoConnect.connect(url,(err,Client)=>{
        var db = Client.db('mydb'); // XE
        //docs : 배열로 묶어줌
        db.collection('chef').find({}).skip(skip).limit(rowSize).toArray(function (err,docs) {

            // send :: 문자 열로 전송하는 것 ( 일반 데이터를 전송하는 것)
            // json :: json 형식으로 전송하는 것
            res.json(docs); // model.addAttribute("list",list) -> javascript에서는 ArrayList가 없음(배열을 보내줌)

            // 연결 객체를 닫음
            Client.close();
        })

    })
})

const xml2js = require("xml2js")
// XML => JSON으로 변경 해주는 lib
const request=require("request")
// 서버 => 다른 서버로 연결 할 때 사용
app.get("/recipe_news",(req,res)=>{
    // 인코딩 해주는 메서드
    var query = encodeURIComponent(req.query.fd);
    var url = "http://newssearch.naver.com/search.naver?where=rss&query="+query;
    var parser = new xml2js.Parser({
        explicitArray:false
    })
    request({url:url},(err,request,xml)=>{
        console.log(xml)
        // XML을 가져 와서 pJson으로 변경함
        parser.parseString(xml,function (err,pJson) {
            console.log(11)
            res.json(pJson.res.channel.item)
            console.log(22)
        })
    })
})
