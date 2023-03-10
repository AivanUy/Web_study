/*
 * @Description: 
 * @Author: Aivan van@gmail.com
 * @Date: 2023-02-18 11:51:00
 * @LastEditTime: 2023-02-18 11:53:30
 * @LastEditors: Aivan van@gmail.com
 * @FilePath: \node-study\07-babel-loader\hello-world.js
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
function getString(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Hello world')
        })
    })
}

async function helloworld(){
    let string = await getString()
    console.log(string)
}

export default helloworld