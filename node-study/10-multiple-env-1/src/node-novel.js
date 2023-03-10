/*
 * @Description: 
 * @Author: Aivan van@gmail.com
 * @Date: 2023-02-11 18:29:19
 * @LastEditTime: 2023-02-16 16:43:57
 * @LastEditors: Aivan van@gmail.com
 * @FilePath: \node-study\05-asset-modules\src\node-novel.js
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import imgsrc from "./asset/img01.jpg"
function helloWorld() {
    console.log("hello node")
    const img = document.createElement('img')
    img.src = imgsrc
    document.body.appendChild(img)
    console.log("hello img")
}


export default helloWorld

