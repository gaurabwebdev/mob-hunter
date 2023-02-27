const loadMobiles = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const response = await fetch(url);
    const data = await response.json();
    displayMobiles(data.data);
}

const displayMobiles = (mobiles) => {
    console.log(mobiles)
}

loadMobiles();









