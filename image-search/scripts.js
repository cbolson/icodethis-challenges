const API_KEY = "EI62xOZLQDbRQYlKO7tuU6XmBnQEh6yx5WuZQsb4kuKwhbIhVVo0p8b0"
const API_URL = 'https://api.pexels.com/v1/search?';
const MIN_CHARS = 2; // min chars to type before fetching (we also have debounce)

// selectors
const searchInput = document.querySelector("#search");
const searchSpinner = document.querySelector("#search-spinner");
const listResults = document.querySelector("#list-results");
const tplItem = document.querySelector("#tpl-item");

// initial data for load
const data = [
    {
        "id": 50577,
        "width": 4288,
        "height": 2848,
        "url": "https://www.pexels.com/photo/shallow-photo-of-hedgehog-50577/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#D4D3D2",
        "src": {
            "original": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg",
            "large2x": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Shallow Photo of Hedgehog"
    },
    {
        "id": 1108099,
        "width": 5184,
        "height": 3888,
        "url": "https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/",
        "photographer": "Chevanon Photography",
        "photographer_url": "https://www.pexels.com/@chevanon",
        "photographer_id": 93955,
        "avg_color": "#787A50",
        "src": {
            "original": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            "large2x": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Two Yellow Labrador Retriever Puppies"
    },
    {
        "id": 735423,
        "width": 3008,
        "height": 2008,
        "url": "https://www.pexels.com/photo/close-up-photography-of-white-cat-besides-christmas-lights-735423/",
        "photographer": "Eftodii Aurelia",
        "photographer_url": "https://www.pexels.com/@eftodii-aurelia-90976",
        "photographer_id": 90976,
        "avg_color": "#9C6136",
        "src": {
            "original": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg",
            "large2x": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Close-Up Photography of White Cat Besides Christmas Lights"
    },
    {
        "id": 1643457,
        "width": 4000,
        "height": 6000,
        "url": "https://www.pexels.com/photo/person-holding-white-kitten-with-flowers-necklace-1643457/",
        "photographer": "Peng Louis",
        "photographer_url": "https://www.pexels.com/@peng-louis-587527",
        "photographer_id": 587527,
        "avg_color": "#9B9892",
        "src": {
            "original": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg",
            "large2x": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Person Holding White Kitten With Flowers Necklace"
    },
    {
        "id": 372166,
        "width": 2992,
        "height": 2000,
        "url": "https://www.pexels.com/photo/white-and-brown-rabbit-on-green-grass-field-372166/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#546235",
        "src": {
            "original": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg",
            "large2x": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "White and Brown Rabbit on Green Grass Field"
    },
    {
        "id": 127027,
        "width": 5197,
        "height": 3465,
        "url": "https://www.pexels.com/photo/russian-blue-kitten-on-brown-woven-basket-127027/",
        "photographer": "Vadim B",
        "photographer_url": "https://www.pexels.com/@vatius",
        "photographer_id": 34423,
        "avg_color": "#594639",
        "src": {
            "original": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg",
            "large2x": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Russian Blue Kitten on Brown Woven Basket"
    },
    {
        "id": 45170,
        "width": 2400,
        "height": 1334,
        "url": "https://www.pexels.com/photo/assorted-color-kittens-45170/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#748B52",
        "src": {
            "original": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg",
            "large2x": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Assorted Color Kittens"
    },
    {
        "id": 162140,
        "width": 4275,
        "height": 2539,
        "url": "https://www.pexels.com/photo/duckling-on-black-soil-during-daytime-162140/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#756246",
        "src": {
            "original": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg",
            "large2x": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Duckling on Black Soil during Daytime"
    },
    {
        "id": 47547,
        "width": 2939,
        "height": 2583,
        "url": "https://www.pexels.com/photo/brown-squirrel-47547/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#727345",
        "src": {
            "original": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
            "large2x": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Squirrel"
    },
    {
        "id": 64219,
        "width": 2352,
        "height": 1568,
        "url": "https://www.pexels.com/photo/cute-dolphine-underwater-64219/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#238FD6",
        "src": {
            "original": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
            "large2x": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Cute Dolphine Underwater "
    },
    {
        "id": 45201,
        "width": 2392,
        "height": 2500,
        "url": "https://www.pexels.com/photo/white-and-grey-kitten-on-brown-and-black-leopard-print-textile-45201/",
        "photographer": "Pixabay",
        "photographer_url": "https://www.pexels.com/@pixabay",
        "photographer_id": 2659,
        "avg_color": "#4E4340",
        "src": {
            "original": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
            "large2x": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "White and Grey Kitten on Brown and Black Leopard Print Textile"
    },
    {
        "id": 59523,
        "width": 2878,
        "height": 1871,
        "url": "https://www.pexels.com/photo/brown-and-black-german-shepherd-puppy-sitting-on-gray-textile-59523/",
        "photographer": "Torsten Dettlaff",
        "photographer_url": "https://www.pexels.com/@tdcat",
        "photographer_id": 9438,
        "avg_color": "#CDC5BC",
        "src": {
            "original": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg",
            "large2x": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown and Black German Shepherd Puppy Sitting on Gray Textile"
    },
    {
        "id": 2023384,
        "width": 1864,
        "height": 2656,
        "url": "https://www.pexels.com/photo/winking-black-and-brown-puppy-2023384/",
        "photographer": "Dominika Roseclay",
        "photographer_url": "https://www.pexels.com/@punchbrandstock",
        "photographer_id": 215243,
        "avg_color": "#C1BBB5",
        "src": {
            "original": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
            "large2x": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Winking Black and Brown Puppy"
    },
    {
        "id": 3396657,
        "width": 4000,
        "height": 5000,
        "url": "https://www.pexels.com/photo/two-brown-lama-3396657/",
        "photographer": "josiah farrow",
        "photographer_url": "https://www.pexels.com/@josiahfarrow",
        "photographer_id": 1820400,
        "avg_color": "#706A5B",
        "src": {
            "original": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg",
            "large2x": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Two Brown Lama"
    },
    {
        "id": 1643456,
        "width": 5647,
        "height": 3752,
        "url": "https://www.pexels.com/photo/close-up-photo-of-a-hand-holding-three-white-kittens-1643456/",
        "photographer": "Peng Louis",
        "photographer_url": "https://www.pexels.com/@peng-louis-587527",
        "photographer_id": 587527,
        "avg_color": "#676B73",
        "src": {
            "original": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg",
            "large2x": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Close-Up Photo of a Hand Holding Three White Kittens"
    }
]

// debounce to prevent calling the apis if the user is still typing
function debounce(func, delay = 1000) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const sendDebounce = debounce((term) => {
    searchItems(term);
}, 500);

// toggle spinner in search button
function toggleSpinner(loading) { 
    if (loading) {
        searchSpinner.innerText = 'progress_activity';
        searchSpinner.classList.add('animate-spin');
    } else { 
        searchSpinner.innerText = 'search';
        searchSpinner.classList.remove('animate-spin');
    }
}


// clear input on focus
searchInput.addEventListener("focus", () => {
    searchInput.value = '';
    const prevImages = listResults.querySelectorAll("figure");
/*
    let d = 20;
    prevImages.forEach(i => {
        d = d + 10;
        setTimeout(() => {
            i.classList.add("scale-50");
        }, d);

    })
    */
})


searchInput.addEventListener("keyup", (e) => {
    const term = e.target.value;;
    if (term.length > MIN_CHARS) {
        // start searching
        sendDebounce(term);
    }
    /*
    if (term.length < 1) {
        const prevImages = listResults.querySelectorAll("figure");
        let d = 20;
        prevImages.forEach(i => {
            d = d + 10;
            setTimeout(() => {
                i.classList.remove("scale-50");
            }, d);

        })
    }
    */
})
/*
searchInput.addEventListener("blur", (e) => {
    const term = e.target.value;;
    if (term.length < MIN_CHARS) {
        const prevImages = listResults.querySelectorAll("figure");
        let d = 20;
        prevImages.forEach(i => {
            d = d + 10;
            setTimeout(() => {
                i.classList.remove("scale-50");
            }, d);

        })
    }
})
*/

// retrieve characters from api
async function searchItems(term) {
    toggleSpinner(true);
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?query=${term}&limit=20`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            }
        });  
        const results = await response.json();
        renderItems(results.photos);
         toggleSpinner(false);

    } catch (error) {
        console.log(error);
    }
}


// add results to page
function renderItems(arr) { 
    listResults.innerHTML = '';


    if (arr.length < 1) { 
        listResults.innerHTML = '<p class="text-xl">No results</p>';
    }else{
        let delay = 100;

        arr.forEach(photo => { 
            const item = tplItem.content.cloneNode(true);
            item.querySelector("a").href = photo.url
            const img = item.querySelector("img");

            img.src = photo.src.portrait;
            img.setAttribute("alt", photo.alt);
            item.querySelector("[item-title]").innerText = photo.alt
            item.querySelector("[item-photographer]").innerText = photo.photographer
            listResults.append(item);

            delay = delay + 50;
            setTimeout(() => {
                img.classList.add("scale-110");
            }, delay);
        })
    }
}

renderItems(data);