import axios from "axios"
import camelCaseKeys from "camelcase-keys"

export const API =  axios.create({
    baseURL: `http://localhost/api/v1/`
});

API.interceptors.response.use(
    (response) => {
      return {
        ...response,
        data: camelCaseKeys(response.data, { deep: true }),
      }
    },
    (error) => {
      return Promise.reject(error)
    }
)

// const mockedData: any = {
//     electronics: [{image:'/asset/7.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 },
//     {image:'/asset/1.jpeg',title:"Xbox game box", reviewsCount: 18, rating: 4.2 },
//     {image:'/asset/6.jpg',title:"Laptop", reviewsCount: 338, rating: 4.2 },
//     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 },
//     {image:'/asset/1.jpeg',title:"Xbox game box", reviewsCount: 18, rating: 4.2 },
//     {image:'/asset/6.jpg',title:"Laptop", reviewsCount: 338, rating: 4.2 }],
//     homepage: {
//         trending: [{image:'/asset/7.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                    {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                    {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                    {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 },
//                    {image:'/asset/1.jpeg',title:"Xbox game box", reviewsCount: 18, rating: 4.2 },
//                    {image:'/asset/6.jpg',title:"Laptop", reviewsCount: 338, rating: 4.2 },
//                    {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                    {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                    {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                    {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 },
//                    {image:'/asset/1.jpeg',title:"Xbox game box", reviewsCount: 18, rating: 4.2 },
//                    {image:'/asset/6.jpg',title:"Laptop", reviewsCount: 338, rating: 4.2 }],

//         categories:["Electronics","Movies","Vehicle","Garment","Toys"],
//         categoryWiseTopProducts: {
//             "Electronics": {
//                 "Computer & accessories":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Mobiles": [
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Earphones":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Refrigerators":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Washing Machines":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Laptops":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Watches":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "ToolKits":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Televisions":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ]
//             },
//             "Movies": {
//                 "Computer & accessories":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Mobiles": [
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Earphones":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Refrigerators":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Washing Machines":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Laptops":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Watches":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "ToolKits":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Televisions":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ]
//             },
//             "Vehicle": {
//                 "Computer & accessories":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Mobiles": [
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Earphones":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Refrigerators":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Washing Machines":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Laptops":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Watches":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "ToolKits":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Televisions":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ]
//             },
//             "Garment": {
//                 "Computer & accessories":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Mobiles": [
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Earphones":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Refrigerators":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Washing Machines":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Laptops":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Watches":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "ToolKits":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Televisions":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ]
//             },
//             "Toys": {
//                 "Computer & accessories":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Mobiles": [
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Earphones":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Refrigerators":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Washing Machines":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Laptops":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Watches":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "ToolKits":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ],
//                 "Televisions":[
//                     {image:'/asset/4.jpg', title:"PS4 game box", reviewsCount: 148, rating: 4.2},
//                     {image:'/asset/2.webp',title:"Computer", reviewsCount: 141, rating: 4.2 },
//                     {image:'/asset/3.jpeg',title:"mobiles", reviewsCount: 128, rating: 4.2 },
//                     {image:'/asset/5.jpg',title:"Sewing Machine", reviewsCount: 118, rating: 4.2 }
//                 ]
//             },
//         },
//         recommended: []


//     } as HomepageInitData,



// }

// export const MockAPI = {
//         get: (url: string)=>{
//             console.log("mocked get called with url: %s", url)
//             return new Promise((resolve, reject)=> {
//                 setTimeout(()=>{
//                     resolve({data:mockedData[url]});
//                 },2000)
//             })

//         }
//     }