/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-22 19:10:32
 * @LastEditTime: 2023-02-22 19:17:11
 * @LastEditors:  
 */
const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
    question: 'hi ,workjfjfjfjf'
})

worker.onmessage = (message) => {
    console.log(message.data.answer)
}