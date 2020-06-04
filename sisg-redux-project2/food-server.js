const express = require('express')
const app= express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
/*
    bind() ==> bind(port,ip) ==> 개통
    listen() => 대기 상태
    accept() => 연결이 되면 ~~  :: 가벼운 서버

 */
app.listen(3355,()=>{
    console.log("Server Start...","http://localhost:3355")
})
// news

// React : server
// Java,React ==> import
// c/C+ -> include
// Node ==> require
/*
모든 서버에 request, response 를 넘겨준다.
웹 => 사용자가 요청한 정보를 모아서 전송, 응답 정보(사용자의 IP나 Port)를 포함 하고 있다.
              request                 response ==> 시스템(webserver)에서 처리
 */
// Spring ==> 톰캣 ( res,req)를 받아서 처리 해야 한다(톰캣을 먼저 설치 하는 이유)
// Node ==> express
// https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%98%81%ED%99%94

const request=require("request")
const xml2js =require("xml2js")
//영화 ==> /news?fd = 영화  (( 네이버에서 검색 처리 (( 검색어를 보낼 때 encoding 처리를 해서 보내 주어야 함)
app.get('/news',(req,res)=>{
    var fd = encodeURIComponent(req.query.fd)
    // 네이버에 연결
    var url="http://newssearch.naver.com/search.naver?where=rss&query="+fd
    //~~~~ where : 형식 query : 검색어
    // XML => Json으로 처리 (Paser 생성)
    var parser = new xml2js.Parser({
        explicitArray:false
        // 변환 되지 않는 내용은 배열에 포함 하지 않겠다.
    })
    request({url:url},(err,request,xml)=>{
        // console.log(xml)
        parser.parseString(xml,function (err,pJson) {
            console.log(pJson.rss.channel.item)
            res.json(pJson.res.channel.item)
        })
    })
})

const Client = require("mongodb").MongoClient
/*
      params :{
               page: page
      }{

 */
app.get('/recipe',(req,res)=>{
    var page= req.query.page;
            //. request.getParameter("page")
    var rowSize=9;
    var skip = (page*rowSize)-rowSize;
    var url="mongodb://211.238.142.181:27017";
    // 연결
    Client.connect(url,(err,client)=>{
        // Database ( mydb)
        var db = client.db("mydb")
        //Table =>  Collection => recipe
        db.collection("recipe").find({}).skip(skip).limit(rowSize)
            .toArray((err,docs)=>{
                res.json(docs)
                client.close();
            })

    })
})


