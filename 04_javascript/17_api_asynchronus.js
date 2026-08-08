'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // old method
// // this will lead us to callback hell
// const addcountry = function (cData) {
//     const html = `<article class="country">
//         <img class="country__img" src="${cData.flag.url_svg}" />
//         <div class="country__data">
//         <h3 class="country__name">${cData.names.common}</h3>
//         <h4 class="country__region">${cData.region}</h4>
//         <p class="country__row"><span>👫</span>${(+cData.population / 10000000).toFixed(1)} Cr people</p>
//         <p class="country__row"><span>🗣️</span>${cData.languages.map(element => element.name).join(" ")}</p>
//         <p class="country__row"><span>💰</span>${cData.currencies[0].name}</p>
//         </div>
//         </article>`
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
// }

// // const getCountry = function (country) {
// //     const request = new XMLHttpRequest();
// //     request.open("GET",`https://api.restcountries.com/countries/v5/names.common/${country}`);
// //     request.setRequestHeader("Authorization","Bearer rc_live_e5d0c753ee43446ca09827be29f8838b");
// //     request.send();
// //     request.addEventListener('load',function(){
// //         const { data: { objects: [cData] } } = JSON.parse(this.responseText);
// //         addcountry(cData);
// //         cData.borders.forEach((code)=>{
// //             const newrequest = new XMLHttpRequest();
// //             newrequest.open("GET",`https://api.restcountries.com/countries/v5/codes.alpha_3/${code}?pretty=1'`);
// //             newrequest.setRequestHeader("Authorization","Bearer rc_live_e5d0c753ee43446ca09827be29f8838b");
// //             newrequest.send();
// //             newrequest.addEventListener('load',function(){
// //                 const { data: { objects: [nData] } } = JSON.parse(this.responseText);
// //                 addcountry(nData);
// //             });
// //         });
// //         });
// //     }

// // getCountry('India');

// ///////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // new method 

// // const getCountry = function(country){
// // fetch(`https://api.restcountries.com/countries/v5/names.common/${country}`, {
// //   method: "GET",
// //   headers: {
// //     "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b",
// //   }
// // }).then(function(response){
// //         return response.json();
// // }).then(function(fdata){
// //     const { data: { objects: [cData] } }=fdata;
// //     addcountry(cData);
// // })
// // }
// // getCountry('India');
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // new method simplified version

// // const getCountry = function(country){
// // fetch(`https://api.restcountries.com/countries/v5/names.common/${country}`, {
// //   method: "GET",
// //   headers: {
// //     "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b",
// //   }
// // }).then((response)=>response.json()).then((fdata)=>{
// //     const { data: { objects: [cData] } }=fdata;
// //     addcountry(cData);
// //     cData.borders.forEach((code)=>{
// //             fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${code}?pretty=1'`,{
// //                 method:"GET",
// //                 headers:{
// //                     "Authorization":"Bearer rc_live_e5d0c753ee43446ca09827be29f8838b"
// //                 }
// //             }).then((newResponse)=>newResponse.json()).then((ndata)=>{
// //                     const {data:{objects:[odata]}}=ndata;
// //                     addcountry(odata);
// //             } )
// // })
// // })
// // }
// // getCountry('India');


// const getCountry = function (country) {
//     fetch(`https://api.restcountries.com/countries/v5/names.common/${country}`, {
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b",
//         }
//     }).then((response) => response.json()).then((fdata) => {
//         const { data: { objects: [cData] } } = fdata;
//         addcountry(cData);
//         const code = cData.borders[0];
//         return fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${code}?pretty=1'`, {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b"
//             }
//         }).then((newResponse) {//newResponse.json()//,(e)=>console.log(e)
//             // throw error manually
//              if (!newResponse.ok) {
//             throw new Error(`Country not found(${response.staus})`)
//         }}
//         ).then((ndata) => {
//             const { data: { objects: [odata] } } = ndata;
//             addcountry(odata);
//         }).catch((error) => console.log(error + 'hello'))
// }).catch ((error) =>
//     console.log(error + 'hello'));
// }
// getCountry('India');
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// use a promise success promise
// Promise.resolve('hello').then((res)=>console.log(res));

// const mypromise =new Promise(function(resolve, reject)  {
//     if(Math.random<0.5){
//         resolve('paassed test')
//     }else{
//         reject('failed test');
//     }
// })

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// promisifying everything
// orignal function
// navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position);
// },function(error){
//     console.log(error);
// });
// promisifying

// const getLocation = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             return resolve(position);
//         }, function (error) {
//             return reject(error);
//         });
//     })
// }
// console.log(getLocation());

// const getLocation = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }
// console.log(getLocation());
// getLocation().then(pos=>console.log(pos));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// coding challenge 2

// PART 1
// 1. Create a function 'createImage' which receives
// imghath as an input. This function returns a promise
// which creates a new image (use document.createElement
// ('img')) and sets the .src attribute to the provided
// image path. When the image is done loading, append it
// to the DOM element with the 'images' class, and
// resolve the promise. The fulfilled value should be
// the image element itself. In case there is an error
// loading the image ('error' event), reject the promise.

// If this part is too tricky for you, just watch the
// first part of the solution.

// PART 2
// 2. Comsume the promise using .then and also add an
// error handler;
// 3. After the image has loaded, pause execution for 2
// seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current
// image (set display to 'none'), and load a second
// image (HINT: Use the image element returned by the
// createImage promise to hide the current image. You
// will need a global variable for that
// 5. After the second image has loaded, pause execution
// for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current
// image.




// const container = document.querySelector('.images');
// let cri ;
// const wait= function(seconds){
//         return new Promise(function (resolve){
//            setTimeout(resolve,seconds*1000);
//         })
// }

// const createImg = function (path) {
//     return new Promise(function (resolve, reject) {
//         const newimg = document.createElement('img');
//         newimg.src = path;
//         newimg.addEventListener('load', function () {
//             newimg.classList.add('images');
//             container.append(newimg);
//             resolve(newimg);
//         });
//         newimg.addEventListener('error', function () {
//             reject(new Error('image not found'));
//         })
//     })
// }

// createImg('37_api_img-3.jpg').then(img=> {
//     console.log("Image loaded sucessfully");
//     cri = img;
//     return wait(2);
// }).then(()=>cri.style.display = 'none').then(()=>createImg('36_api_img-2.jpg')).then(img=> {console.log("Image loaded sucessfully");
//     cri = img ;
//     return wait(2);
// }).then(()=>cri.style.display = 'none').catch(err=>console.error(err));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// async await use to make normal function asynchronous

// const where = async function (country) {
//     try {
//         const pos = await navigator.geolocation.getCurrentPosition((Curposition) => { return Curposition });
//         const { latitude, longitude } = pos;
//         const result = await fetch(`https://api.restcountries.com/countries/v5/names.common/${country}`, {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b",
//             }
//         });
//         const ans = await result.json();
//         const { data: { objects: [cData] } } = ans;
//         addcountry(cData);
//         return (cData);
//     } catch (e) {
//         console.log(e);
//         throw new Error(e);
//     }
// }
// where('India');

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // try catch in javascript 

// try {
//    const  ax=0;
//     ax=23;
// }catch(err) {
//   console.log(err);
// }
// // working of async and await
// console. log('1: Will get location');
// // const city = where('India');
// // console.log(city);
// // where('India').then(city => console.log(city));
// // console. log('3: Finished getting location');

// // we can use it as normal promise as async provide a promise
// where('India').then(cData=> console.log(cData)).catch(e=>console.log(e))
// // finally will execute always 
// .finally(console.log('I am at homw'));
// // in above example we mix the new and old method but we should not do that instead use new method always 

// // IIFE s  automatically calling function
// (async function () {
//     try{
//    const data = await where('India');
//     console.log(data);
//     }
//     catch(e){
//         console.log(e);
//     }
//         console.log("I am at my home ");
// })();

// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // implementing all we learnt 
// const getJSon = function (url, errorMsg = 'Somethingwent wrong') {
//     return fetch((url), {
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer rc_live_e5d0c753ee43446ca09827be29f8838b",
//         }
//     }).then(response => {
//         if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//         return response.json();
//     })
// };

// const getCountries = async function (c1, c2, c3) {
//     try {
//         // instead of doing this use promise. all to load all data parallely
//         // const { data: { objects: [c1Data] } } = await getJSon(`https://api.restcountries.com/countries/v5/names.common/${c1}`);
//         // const { data: { objects: [c2Data] } } = await getJSon(`https://api.restcountries.com/countries/v5/names.common/${c2}`);
//         // const { data: { objects: [c3Data] } } = await getJSon(`https://api.restcountries.com/countries/v5/names.common/${c3}`);
//         // await addcountry(c1Data);
//         // await addcountry(c2Data);
//         // await addcountry(c3Data);
//         const data = await Promise.all([getJSon(`https://api.restcountries.com/countries/v5/names.common/${c1}`),
//         getJSon(`https://api.restcountries.com/countries/v5/names.common/${c2}`),
//         getJSon(`https://api.restcountries.com/countries/v5/names.common/${c3}`)]);
//         const newdata = await data.map(eachda => {
//             const { data: { objects: [c1Data] } } = eachda;
//             return c1Data
//         });
//         await newdata.forEach(data => addcountry(data));
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getCountries('India', "Pakistan", "Nepal");
// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // promise combinator functions
// // Promise.race   returns the fastest completed promise
// (async function () {
//     const res = await Promise.race([getJSon(`https://api.restcountries.com/countries/v5/names.common/${India}`),
//     getJSon(`https://api.restcountries.com/countries/v5/names.common/${Pakistan}`),
//     getJSon(`https://api.restcountries.com/countries/v5/names.common/${Nepal}`)]);
//     console.log(res[0]);
// })();

// // use case of promise.race
// const timeout = function (sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error('Request took too long!'));
//         }, sec * 1000);
//     })
//     };

//     Promise.race([getJSON(`https://api.restcountries.com/countries/v5/names.common/${India}`),
//         timeout(5)]).then(res => console.log(res[0])).catch(err => console.error(err));

//         // return all settled promise
// // Promise.allSettled
// Promise.allSettled([
// Promise. resove('Success'),
// Promise. reject ( 'ERROR'),
// Promise. resolve('Another success'),
// ]) .then(res => console. log(res));
// // shortcircuit if one got rejected 
// Promise. all([
// Promise.fesolve('Success'),
// Promise. reject ('ERROR'),
// Promise. resolve('Another success'),
// ]). then (res => console. log(res) ).catch(err => console.error(err));
// // promise . any give first sucess promise
// Promise.any([
// Promise.fesolve('Success'),
// Promise. reject ('ERROR'),
// Promise. resolve('Another success'),
// ]). then (res => console. log(res) ).catch(err => console.error(err));
// // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// coding challenge 3 

// PART 1
// Write an async function 'loadNPause' that recreates
// Coding Challenge #2, this time using async/await
// (only the part where the promise is consumed) .
// Compare the two versions, think about the big
// differences, and see which one you like more.
// Don't forget to test the error handler, and to set
// in the dev tools

// the network speed to 'Fast.3
// Network tab.

// PART 2
// 1. Create an async function 'loadAll' that receives
// an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the
// images with the 'createImage' function (call the
// resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it
// like you expected?
// 4. Use a promise combinator function to actually get
// the images from the array
// 5. Add the 'paralell' class to all the images (it has
// some CSS styles).
// TEST DATA: ['img/img-1.jpg','img/img-2.jpg', 'img/
// img-3.jpg']. To test, turn off the 'loadNPause'
// function.

// GOOD LUCK


const container = document.querySelector('.images');
// let cri ;
// const wait= function(seconds){
//         return new Promise(function (resolve){
//            setTimeout(resolve,seconds*1000);
//         })
// }

const createImg = function (path) {
    return new Promise(function (resolve, reject) {
        const newimg = document.createElement('img');
        newimg.src = path;
        newimg.addEventListener('load', function () {
            newimg.classList.add('images');
            container.append(newimg);
            resolve(newimg);
        });
        newimg.addEventListener('error', function () {
            reject(new Error('image not found'));
        })
    })
}

// const consume = async function () {
//     try{
//     let image = await createImg('37_api_img-3.jpg');
//     await wait(2);
//     image.style.display = 'none';
//     image = await createImg('36_api_img-2.jpg');
//     await wait(2);
//     image.style.display = 'none';
//     }
//      catch(err){console.error(err)};
// }

// consume();

// part 2 

const load = async function(imgarr){
    try{
    const newarr =imgarr.map(async img=> await createImg(img));
    const allimg = await Promise.all(newarr);
    allimg.forEach(img=>img.classList.add('parallel'));
    }catch(error){
        console.log(error);
    }
}

load(['35_api_img-1.jpg','36_api_img-2.jpg','37_api_img-3.jpg']);