import axios from "axios"
import camelCaseKeys from "camelcase-keys"
import urlJoin from 'url-join';

export const API =  axios.create({
  baseURL: urlJoin('https://www.criteasy.com', '/api/v1/')
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
const mockedData ={catalog:
{
  "trending": [
    {
      "entid": "c9aea149-1238-4e92-9847-8c2ebd32e3fa",
      "ename": "apple iphone 12 pro max",
      "rating": 4.2,
      "reviewcount": 149,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwRhFTZ7ZASdKNJaqIGU5rFBafiIjUlxxvQiQ-keu5H-3XePF_dvs0kkNA"
    },
    {
      "entid": "682224b2-04b9-4e6b-ab53-001f86cb7351",
      "ename": "galaxy s21 ultra",
      "rating": 4.2,
      "reviewcount": 333,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "b7b6af87-1bf9-4859-84fd-8acbd7977320",
      "ename": "infinix zero 8i",
      "rating": 4.2,
      "reviewcount": 4556,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "ff49c206-27f3-4674-be10-2c65e618b19a",
      "ename": "iphone 12",
      "rating": 4,
      "reviewcount": 0,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "d0174b24-10ea-4f2f-8670-c27c38e20509",
      "ename": "lg wing",
      "rating": 4.2,
      "reviewcount": 20,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAJBTsiCmU71UjrPonWhtDBXHZTWj0S6ocCPopiPkyfkjO865bkntGUU"
    },
    {
      "entid": "2932354d-3a2c-4b19-8953-0ea8eef93080",
      "ename": "motorola moto g9",
      "rating": 4.1,
      "reviewcount": 119,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0fiE5YZYyPUV9h_P2Fx2VDSR33SlbtGr1evtOQVMFhrG_gVYnoYISOuM"
    },
    {
      "entid": "248dc9d9-4cd6-44ad-8669-fffde4e1043e",
      "ename": "oneplus 8t",
      "rating": 3.5,
      "reviewcount": 0,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "4ee70956-7f77-4f98-886c-3c92be1aa1ba",
      "ename": "oppo reno 4 pro",
      "rating": 4.2,
      "reviewcount": 3086,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSwbCcMMlkeadJkgdAxyeBRugC2rl3o4JYeQh-pzQqxR_C0N2qcfEcSGvA"
    },
    {
      "entid": "6a742149-7074-4e22-bf39-75e662a2c256",
      "ename": "realme 6 pro",
      "rating": 4.1,
      "reviewcount": 64778,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4L8EyASLB-Y-MhhvIUIHqwKy-4hZDNfHr-Y_cjbMmU4hWN_1cj9c08dQ"
    },
    {
      "entid": "f5f76a8f-4bce-486a-a59d-f98a80d9916d",
      "ename": "realme 7",
      "rating": 4,
      "reviewcount": 22478,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSavC7YZj-i0_0cb5Ygvo9aAH74lNL73YRaiaM0vczcUyF5c22NZaurRk0"
    }
  ],
  "categories": [
    {
      "category_name": "Electronics",
      "subcategory_name": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Computers & Accessories",
      "category_mapping": "electronics",
      "subcategory_mapping": "computers_accessories"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Refrigerators",
      "category_mapping": "electronics",
      "subcategory_mapping": "refrigerators"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Air Purifiers",
      "category_mapping": "electronics",
      "subcategory_mapping": "air_purifiers"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Cameras",
      "category_mapping": "electronics",
      "subcategory_mapping": "cameras"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Accessories",
      "category_mapping": "electronics",
      "subcategory_mapping": "accessories"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Power Accessories",
      "category_mapping": "electronics",
      "subcategory_mapping": "power_accessories"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Smart Wearables",
      "category_mapping": "electronics",
      "subcategory_mapping": "smart_wearables"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Telephones & Accessories",
      "category_mapping": "electronics",
      "subcategory_mapping": "telephones_accessories"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Media Players",
      "category_mapping": "electronics",
      "subcategory_mapping": "media_players"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Headphones",
      "category_mapping": "electronics",
      "subcategory_mapping": "headphones"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Home Audio",
      "category_mapping": "electronics",
      "subcategory_mapping": "home_audio"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Car & Vehicle Electronics",
      "category_mapping": "electronics",
      "subcategory_mapping": "car_vehicle_electronics"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Laptops",
      "category_mapping": "electronics",
      "subcategory_mapping": "laptops"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Desktops",
      "category_mapping": "electronics",
      "subcategory_mapping": "desktops"
    },
    {
      "category_name": "Electronics",
      "subcategory_name": "Tablets",
      "category_mapping": "electronics",
      "subcategory_mapping": "tablets"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Arts & Crafts",
      "category_mapping": "toys_games",
      "subcategory_mapping": "arts_crafts"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Baby & Toddler Toys",
      "category_mapping": "toys_games",
      "subcategory_mapping": "baby_toddler_toys"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Bikes, Trikes & Ride-Ons",
      "category_mapping": "toys_games",
      "subcategory_mapping": "bikes_trikes_ride_ons"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Dolls & Accessories",
      "category_mapping": "toys_games",
      "subcategory_mapping": "dolls_accessories"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Electronic Toys",
      "category_mapping": "toys_games",
      "subcategory_mapping": "electronic_toys"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Games",
      "category_mapping": "toys_games",
      "subcategory_mapping": "games"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Learning & Education",
      "category_mapping": "toys_games",
      "subcategory_mapping": "learning_education"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Puzzles",
      "category_mapping": "toys_games",
      "subcategory_mapping": "puzzles"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Radio & Remote Control",
      "category_mapping": "toys_games",
      "subcategory_mapping": "radio_remote_control"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Soft Toys",
      "category_mapping": "toys_games",
      "subcategory_mapping": "soft_toys"
    },
    {
      "category_name": "Toys & Games",
      "subcategory_name": "Sport & Outdoor",
      "category_mapping": "toys_games",
      "subcategory_mapping": "sport_outdoor"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Action & Adventure",
      "category_mapping": "books",
      "subcategory_mapping": "action_adventure"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Arts, Film & Photography",
      "category_mapping": "books",
      "subcategory_mapping": "arts_film_photography"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Biographies",
      "category_mapping": "books",
      "subcategory_mapping": "biographies"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Business & Economics",
      "category_mapping": "books",
      "subcategory_mapping": "business_economics"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Comics & Mangas",
      "category_mapping": "books",
      "subcategory_mapping": "comics_mangas"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Computers & Internet",
      "category_mapping": "books",
      "subcategory_mapping": "computers_internet"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Crafts, Hobbies & Home",
      "category_mapping": "books",
      "subcategory_mapping": "crafts_hobbies_home"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Crime, Thriller & Mystery",
      "category_mapping": "books",
      "subcategory_mapping": "crime_thriller_mystery"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Science Fiction & Fantasy",
      "category_mapping": "books",
      "subcategory_mapping": "science_fiction_fantasy"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Personal Development",
      "category_mapping": "books",
      "subcategory_mapping": "personal_development"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Historical Fiction",
      "category_mapping": "books",
      "subcategory_mapping": "historical_fiction"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Humour",
      "category_mapping": "books",
      "subcategory_mapping": "humour"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Literature & Fiction",
      "category_mapping": "books",
      "subcategory_mapping": "literature_fiction"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Politics",
      "category_mapping": "books",
      "subcategory_mapping": "politics"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Romance",
      "category_mapping": "books",
      "subcategory_mapping": "romance"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Society & Social Science",
      "category_mapping": "books",
      "subcategory_mapping": "society_social_sciences"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Sports",
      "category_mapping": "books",
      "subcategory_mapping": "sports"
    },
    {
      "category_name": "Books",
      "subcategory_name": "Travel & Tourism",
      "category_mapping": "books",
      "subcategory_mapping": "travel_tourism"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Accessories & Peripherals",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "accessories_peripherals"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Components",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "components"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Desktops",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "desktops"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "External Devices & Data Storage",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "external_devices_data_storage"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Laptops",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "laptops"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Monitors",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "monitors"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Networking Devices",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "networking_devices"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Printers, Inks & Accessories",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "printers_inks_accessories"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Scanners",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "scanners"
    },
    {
      "category_name": "Computers & Accessories",
      "subcategory_name": "Tablets",
      "category_mapping": "computers_accessories",
      "subcategory_mapping": "tablets"
    },
    {
      "category_name": "Appliances",
      "subcategory_name": "Air Conditioners",
      "category_mapping": "appliances",
      "subcategory_mapping": "air_conditioners"
    },
    {
      "category_name": "Appliances",
      "subcategory_name": "Refrigerators",
      "category_mapping": "appliances",
      "subcategory_mapping": "refrigerators"
    },
    {
      "category_name": "Appliances",
      "subcategory_name": "Washing Machines",
      "category_mapping": "appliances",
      "subcategory_mapping": "washing_machines"
    },
    {
      "category_name": "Appliances",
      "subcategory_name": "Kitchen & Home Appliances",
      "category_mapping": "appliances",
      "subcategory_mapping": "kitchen_home_appliances"
    },
    {
      "category_name": "Appliances",
      "subcategory_name": "Heating & cooling Appliances",
      "category_mapping": "appliances",
      "subcategory_mapping": "heating_cooling_appliances"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Action & Adventure",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "action_adventure"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Animation",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "animation"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Comedy",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "comedy"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Crime & Thriller",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "crime_thriller"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Drama",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "drama"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Fitness & Wellness",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "fitness_wellness"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Horror",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "horror"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Kids & Family",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "kids_family"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Music Videos & Concerts",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "music_videos_concerts"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Romance",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "romance"
    },
    {
      "category_name": "Movies & TV Shows",
      "subcategory_name": "Science Fiction",
      "category_mapping": "movies_tv_shows",
      "subcategory_mapping": "science_fiction"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Luxury Cars",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "luxury_cars"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Sport Cars",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "sport_cars"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Family Cars",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "family_cars"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "SUV Cars",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "suv_cars"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Minivans",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "minivans"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Standard Bikes",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "standard_bikes"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Cruiser Bikes",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "cruiser_bikes"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Sport bikes",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "sport_bikes"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Utility Bikes",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "utility_bikes"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Scooters",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "scooters"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Scootys",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "scootys"
    },
    {
      "category_name": "Cars & Motorbikes",
      "subcategory_name": "Off Roading Bikes",
      "category_mapping": "cars_motorbikes",
      "subcategory_mapping": "off_roading_bikes"
    },
    {
      "category_name": "Games",
      "subcategory_name": "Video Games",
      "category_mapping": "games",
      "subcategory_mapping": "video_games"
    }
  ],
  "recommended": [
    {
      "entid": "c9aea149-1238-4e92-9847-8c2ebd32e3fa",
      "ename": "apple iphone 12 pro max",
      "rating": 4.2,
      "reviewcount": 149,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwRhFTZ7ZASdKNJaqIGU5rFBafiIjUlxxvQiQ-keu5H-3XePF_dvs0kkNA"
    },
    {
      "entid": "682224b2-04b9-4e6b-ab53-001f86cb7351",
      "ename": "galaxy s21 ultra",
      "rating": 4.2,
      "reviewcount": 333,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "b7b6af87-1bf9-4859-84fd-8acbd7977320",
      "ename": "infinix zero 8i",
      "rating": 4.2,
      "reviewcount": 4556,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "ff49c206-27f3-4674-be10-2c65e618b19a",
      "ename": "iphone 12",
      "rating": 4,
      "reviewcount": 0,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "d0174b24-10ea-4f2f-8670-c27c38e20509",
      "ename": "lg wing",
      "rating": 4.2,
      "reviewcount": 20,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAJBTsiCmU71UjrPonWhtDBXHZTWj0S6ocCPopiPkyfkjO865bkntGUU"
    },
    {
      "entid": "2932354d-3a2c-4b19-8953-0ea8eef93080",
      "ename": "motorola moto g9",
      "rating": 4.1,
      "reviewcount": 119,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0fiE5YZYyPUV9h_P2Fx2VDSR33SlbtGr1evtOQVMFhrG_gVYnoYISOuM"
    },
    {
      "entid": "248dc9d9-4cd6-44ad-8669-fffde4e1043e",
      "ename": "oneplus 8t",
      "rating": 3.5,
      "reviewcount": 0,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": ""
    },
    {
      "entid": "4ee70956-7f77-4f98-886c-3c92be1aa1ba",
      "ename": "oppo reno 4 pro",
      "rating": 4.2,
      "reviewcount": 3086,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSwbCcMMlkeadJkgdAxyeBRugC2rl3o4JYeQh-pzQqxR_C0N2qcfEcSGvA"
    },
    {
      "entid": "6a742149-7074-4e22-bf39-75e662a2c256",
      "ename": "realme 6 pro",
      "rating": 4.1,
      "reviewcount": 64778,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4L8EyASLB-Y-MhhvIUIHqwKy-4hZDNfHr-Y_cjbMmU4hWN_1cj9c08dQ"
    },
    {
      "entid": "f5f76a8f-4bce-486a-a59d-f98a80d9916d",
      "ename": "realme 7",
      "rating": 4,
      "reviewcount": 22478,
      "category": "Electronics",
      "subcategory": "Mobiles",
      "category_mapping": "electronics",
      "subcategory_mapping": "mobiles",
      "imageurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSavC7YZj-i0_0cb5Ygvo9aAH74lNL73YRaiaM0vczcUyF5c22NZaurRk0"
    }
  ],
  "category_wise_top_products": {
    "products": [
      {
        "category_name": "Electronics",
        "subcategory_name": "Mobiles",
        "category_mapping": "electronics",
        "subcategory_mapping": "mobiles",
        "products": [
          {
            "entid": "c9aea149-1238-4e92-9847-8c2ebd32e3fa",
            "ename": "apple iphone 12 pro max",
            "rating": 4.2,
            "reviewcount": 149,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwRhFTZ7ZASdKNJaqIGU5rFBafiIjUlxxvQiQ-keu5H-3XePF_dvs0kkNA"
          },
          {
            "entid": "682224b2-04b9-4e6b-ab53-001f86cb7351",
            "ename": "galaxy s21 ultra",
            "rating": 4.2,
            "reviewcount": 333,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "b7b6af87-1bf9-4859-84fd-8acbd7977320",
            "ename": "infinix zero 8i",
            "rating": 4.2,
            "reviewcount": 4556,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "ff49c206-27f3-4674-be10-2c65e618b19a",
            "ename": "iphone 12",
            "rating": 4,
            "reviewcount": 0,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "d0174b24-10ea-4f2f-8670-c27c38e20509",
            "ename": "lg wing",
            "rating": 4.2,
            "reviewcount": 20,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAJBTsiCmU71UjrPonWhtDBXHZTWj0S6ocCPopiPkyfkjO865bkntGUU"
          },
          {
            "entid": "2932354d-3a2c-4b19-8953-0ea8eef93080",
            "ename": "motorola moto g9",
            "rating": 4.1,
            "reviewcount": 119,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0fiE5YZYyPUV9h_P2Fx2VDSR33SlbtGr1evtOQVMFhrG_gVYnoYISOuM"
          },
          {
            "entid": "248dc9d9-4cd6-44ad-8669-fffde4e1043e",
            "ename": "oneplus 8t",
            "rating": 3.5,
            "reviewcount": 0,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "4ee70956-7f77-4f98-886c-3c92be1aa1ba",
            "ename": "oppo reno 4 pro",
            "rating": 4.2,
            "reviewcount": 3086,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSwbCcMMlkeadJkgdAxyeBRugC2rl3o4JYeQh-pzQqxR_C0N2qcfEcSGvA"
          },
          {
            "entid": "6a742149-7074-4e22-bf39-75e662a2c256",
            "ename": "realme 6 pro",
            "rating": 4.1,
            "reviewcount": 64778,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4L8EyASLB-Y-MhhvIUIHqwKy-4hZDNfHr-Y_cjbMmU4hWN_1cj9c08dQ"
          },
          {
            "entid": "f5f76a8f-4bce-486a-a59d-f98a80d9916d",
            "ename": "realme 7",
            "rating": 4,
            "reviewcount": 22478,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSavC7YZj-i0_0cb5Ygvo9aAH74lNL73YRaiaM0vczcUyF5c22NZaurRk0"
          },
          {
            "entid": "783709ac-b921-4ba4-9636-93ff34ff55cb",
            "ename": "realme 7 pro",
            "rating": 4,
            "reviewcount": 7605,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZc9mHij1L-v3p_zdz7QQZWjGDrtL0_YexHtpk_gHANSd1oeBs3wPLZtg"
          },
          {
            "entid": "e021e916-ff8d-471a-8361-13afb35504a4",
            "ename": "realme x3 superzoom edition",
            "rating": 4.4,
            "reviewcount": 804,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfCCNIkZ6ZafpuDEphIMAUlR4CGjhJwsn91QNu6_vwREUNVCgMSz186cs"
          },
          {
            "entid": "1e68623f-6446-4f48-8b28-9b2e1c043ec4",
            "ename": "realme x7 5g",
            "rating": 4,
            "reviewcount": 1473,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "1bcd7700-9390-48bd-b25a-c602ab85d34a",
            "ename": "realme x7 pro 5g",
            "rating": 4.1,
            "reviewcount": 4799,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "370b24fb-f5e7-43fd-880a-c8413e01bd7c",
            "ename": "redmi note 9 pro max",
            "rating": 3.8,
            "reviewcount": 86680,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGHPFTBeXowuxUml3UwyZz4N1Z6G7W4mmQoDTXFgLTyNgQ-v-QNXCzxIs"
          },
          {
            "entid": "077b4b81-9a4f-4edb-a2cb-8e974751df8b",
            "ename": "samsung galaxy f62",
            "rating": 4.3,
            "reviewcount": 1113,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "0978685f-d1c1-4450-b38e-6a17d7bc8af9",
            "ename": "vivo v20",
            "rating": 3.5,
            "reviewcount": 0,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": ""
          },
          {
            "entid": "9bdbfd47-9422-434d-aa46-fea53a8888b3",
            "ename": "vivo v20 pro",
            "rating": 4.3,
            "reviewcount": 2646,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnIkE-jStufJa7cMs1D68asUwtlhMaLyc74y3ygnsQNsN0q7tdTqkzQms"
          },
          {
            "entid": "03f51dd4-d383-4140-8b20-a494691bb3d5",
            "ename": "xiaomi mi 10t pro 5g",
            "rating": 3.8,
            "reviewcount": 272,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRl7rG21LdUOvSdadajO0aEO1IhZBMhH7wXe_MeQFmHKf_PtFUvKfhxSngn"
          },
          {
            "entid": "be43c326-189c-4c74-8270-4b62cfdd6450",
            "ename": "xiaomi redmi 9 prime",
            "rating": 3.7,
            "reviewcount": 27886,
            "category": "Electronics",
            "subcategory": "Mobiles",
            "category_mapping": "electronics",
            "subcategory_mapping": "mobiles",
            "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzy4UENfWEi0A1FKWX_PgOGRZ5Mi4YbyYoiLWJUPyb8vg92_K6t6Lp2mYL"
          }
        ]
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Computers & Accessories",
        "category_mapping": "electronics",
        "subcategory_mapping": "computers_accessories",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Refrigerators",
        "category_mapping": "electronics",
        "subcategory_mapping": "refrigerators",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Air Purifiers",
        "category_mapping": "electronics",
        "subcategory_mapping": "air_purifiers",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Cameras",
        "category_mapping": "electronics",
        "subcategory_mapping": "cameras",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Accessories",
        "category_mapping": "electronics",
        "subcategory_mapping": "accessories",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Power Accessories",
        "category_mapping": "electronics",
        "subcategory_mapping": "power_accessories",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Smart Wearables",
        "category_mapping": "electronics",
        "subcategory_mapping": "smart_wearables",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Telephones & Accessories",
        "category_mapping": "electronics",
        "subcategory_mapping": "telephones_accessories",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Media Players",
        "category_mapping": "electronics",
        "subcategory_mapping": "media_players",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Headphones",
        "category_mapping": "electronics",
        "subcategory_mapping": "headphones",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Home Audio",
        "category_mapping": "electronics",
        "subcategory_mapping": "home_audio",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Car & Vehicle Electronics",
        "category_mapping": "electronics",
        "subcategory_mapping": "car_vehicle_electronics",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Laptops",
        "category_mapping": "electronics",
        "subcategory_mapping": "laptops",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Desktops",
        "category_mapping": "electronics",
        "subcategory_mapping": "desktops",
        "products": []
      },
      {
        "category_name": "Electronics",
        "subcategory_name": "Tablets",
        "category_mapping": "electronics",
        "subcategory_mapping": "tablets",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Arts & Crafts",
        "category_mapping": "toys_games",
        "subcategory_mapping": "arts_crafts",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Baby & Toddler Toys",
        "category_mapping": "toys_games",
        "subcategory_mapping": "baby_toddler_toys",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Bikes, Trikes & Ride-Ons",
        "category_mapping": "toys_games",
        "subcategory_mapping": "bikes_trikes_ride_ons",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Dolls & Accessories",
        "category_mapping": "toys_games",
        "subcategory_mapping": "dolls_accessories",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Electronic Toys",
        "category_mapping": "toys_games",
        "subcategory_mapping": "electronic_toys",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Games",
        "category_mapping": "toys_games",
        "subcategory_mapping": "games",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Learning & Education",
        "category_mapping": "toys_games",
        "subcategory_mapping": "learning_education",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Puzzles",
        "category_mapping": "toys_games",
        "subcategory_mapping": "puzzles",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Radio & Remote Control",
        "category_mapping": "toys_games",
        "subcategory_mapping": "radio_remote_control",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Soft Toys",
        "category_mapping": "toys_games",
        "subcategory_mapping": "soft_toys",
        "products": []
      },
      {
        "category_name": "Toys & Games",
        "subcategory_name": "Sport & Outdoor",
        "category_mapping": "toys_games",
        "subcategory_mapping": "sport_outdoor",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Action & Adventure",
        "category_mapping": "books",
        "subcategory_mapping": "action_adventure",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Arts, Film & Photography",
        "category_mapping": "books",
        "subcategory_mapping": "arts_film_photography",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Biographies",
        "category_mapping": "books",
        "subcategory_mapping": "biographies",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Business & Economics",
        "category_mapping": "books",
        "subcategory_mapping": "business_economics",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Comics & Mangas",
        "category_mapping": "books",
        "subcategory_mapping": "comics_mangas",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Computers & Internet",
        "category_mapping": "books",
        "subcategory_mapping": "computers_internet",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Crafts, Hobbies & Home",
        "category_mapping": "books",
        "subcategory_mapping": "crafts_hobbies_home",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Crime, Thriller & Mystery",
        "category_mapping": "books",
        "subcategory_mapping": "crime_thriller_mystery",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Science Fiction & Fantasy",
        "category_mapping": "books",
        "subcategory_mapping": "science_fiction_fantasy",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Personal Development",
        "category_mapping": "books",
        "subcategory_mapping": "personal_development",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Historical Fiction",
        "category_mapping": "books",
        "subcategory_mapping": "historical_fiction",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Humour",
        "category_mapping": "books",
        "subcategory_mapping": "humour",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Literature & Fiction",
        "category_mapping": "books",
        "subcategory_mapping": "literature_fiction",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Politics",
        "category_mapping": "books",
        "subcategory_mapping": "politics",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Romance",
        "category_mapping": "books",
        "subcategory_mapping": "romance",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Society & Social Science",
        "category_mapping": "books",
        "subcategory_mapping": "society_social_sciences",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Sports",
        "category_mapping": "books",
        "subcategory_mapping": "sports",
        "products": []
      },
      {
        "category_name": "Books",
        "subcategory_name": "Travel & Tourism",
        "category_mapping": "books",
        "subcategory_mapping": "travel_tourism",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Accessories & Peripherals",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "accessories_peripherals",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Components",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "components",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Desktops",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "desktops",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "External Devices & Data Storage",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "external_devices_data_storage",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Laptops",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "laptops",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Monitors",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "monitors",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Networking Devices",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "networking_devices",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Printers, Inks & Accessories",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "printers_inks_accessories",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Scanners",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "scanners",
        "products": []
      },
      {
        "category_name": "Computers & Accessories",
        "subcategory_name": "Tablets",
        "category_mapping": "computers_accessories",
        "subcategory_mapping": "tablets",
        "products": []
      },
      {
        "category_name": "Appliances",
        "subcategory_name": "Air Conditioners",
        "category_mapping": "appliances",
        "subcategory_mapping": "air_conditioners",
        "products": []
      },
      {
        "category_name": "Appliances",
        "subcategory_name": "Refrigerators",
        "category_mapping": "appliances",
        "subcategory_mapping": "refrigerators",
        "products": []
      },
      {
        "category_name": "Appliances",
        "subcategory_name": "Washing Machines",
        "category_mapping": "appliances",
        "subcategory_mapping": "washing_machines",
        "products": []
      },
      {
        "category_name": "Appliances",
        "subcategory_name": "Kitchen & Home Appliances",
        "category_mapping": "appliances",
        "subcategory_mapping": "kitchen_home_appliances",
        "products": []
      },
      {
        "category_name": "Appliances",
        "subcategory_name": "Heating & cooling Appliances",
        "category_mapping": "appliances",
        "subcategory_mapping": "heating_cooling_appliances",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Action & Adventure",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "action_adventure",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Animation",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "animation",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Comedy",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "comedy",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Crime & Thriller",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "crime_thriller",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Drama",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "drama",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Fitness & Wellness",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "fitness_wellness",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Horror",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "horror",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Kids & Family",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "kids_family",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Music Videos & Concerts",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "music_videos_concerts",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Romance",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "romance",
        "products": []
      },
      {
        "category_name": "Movies & TV Shows",
        "subcategory_name": "Science Fiction",
        "category_mapping": "movies_tv_shows",
        "subcategory_mapping": "science_fiction",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Luxury Cars",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "luxury_cars",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Sport Cars",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "sport_cars",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Family Cars",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "family_cars",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "SUV Cars",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "suv_cars",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Minivans",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "minivans",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Standard Bikes",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "standard_bikes",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Cruiser Bikes",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "cruiser_bikes",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Sport bikes",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "sport_bikes",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Utility Bikes",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "utility_bikes",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Scooters",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "scooters",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Scootys",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "scootys",
        "products": []
      },
      {
        "category_name": "Cars & Motorbikes",
        "subcategory_name": "Off Roading Bikes",
        "category_mapping": "cars_motorbikes",
        "subcategory_mapping": "off_roading_bikes",
        "products": []
      },
      {
        "category_name": "Games",
        "subcategory_name": "Video Games",
        "category_mapping": "games",
        "subcategory_mapping": "video_games",
        "products": []
      }
    ]
  }
}
} as any
export const MockAPI = {
        get: (url: string)=>{
            console.log("mocked get called with url: %s", url)
            return new Promise((resolve, reject)=> {
                setTimeout(()=>{
                    resolve({data:camelCaseKeys(mockedData[url], { deep: true })});
                },2000)
            })

        }
    }