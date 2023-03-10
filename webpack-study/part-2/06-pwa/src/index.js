/*
 * @Description: 
 * @Author: Aivan
 * @Date: 2023-02-23 12:56:42
 * @LastEditTime: 2023-02-23 13:02:02
 * @LastEditors:  
 */
console.log('hello webpack')

if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ',registration)
        }).catch(registrationError => {
            console.log('SW registration failed: ',registrationError)
        })
    })
}