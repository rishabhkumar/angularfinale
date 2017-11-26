const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const userData = require('./users');
const blogData = require('./blogs');

const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    res.send(userData);
});

app.get('/blogs', (req, res) => {
    res.send(blogData);
})



app.post('/login', (req, res) => {
    let userid = req.body.userid;
    let password = req.body.pass;
    let flag = false;
    for(var i = 0; i<userData.length; i++) {
        if(userData[i]._id == userid) {
            if(userData[i].pass == password) {
                let jsonObj = {
                    status: true,
                    msg: userData[i]
                }
                flag = true;
                res.send(jsonObj);
            }
        }
    }
    if(!flag) {
        res.send({status: false});
    }
});

app.post('/publish', (req, res) => {
    console.log(req.body);
    let len = blogData.length;
    let authorTemp;
    for(let i = 0; i<userData.length; i++) {
        if(userData[i]._id == req.body.id) {
            authorTemp = userData[i].name;
        }
    }
    let jsonBlog = {
        title: req.body.title,
        content: req.body.content,
        id: (len+1),
        category: req.body.cat,
        author: authorTemp
    }
    blogData.push(jsonBlog);
})

app.listen(3000, (req, res) => {
    console.log('Listening at: http://localhost:3000');
})