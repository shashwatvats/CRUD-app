const express = require('express');
const app= express();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Header","Origin,X-Requested-With,Content-Type,Accepy");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
    next();
});
app.use('/posts',(req,res,next)=>{
    const posts=[
        {
            id:'vhgd677wd',
            title:'firstpost',
            content:'cdehggvhwdcegv'
        },
        {
            id:'vhgd677wd',
            title:'secondpost',
            content:'cdehggvhwdcegv' 
        }
    ];
    res.status(200).json({
        message:'Posts fetched successfully',
        posts:posts
    });
});
module.exports=app;