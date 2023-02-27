const loadMobiles = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const response = await fetch(url);
    const data = await response.json();
    displayMobiles(data.data);
}

const displayMobiles = (mobiles) => {
    const mobilesSection = document.getElementById('mobiles-container');
    mobiles.forEach((mobile) => {
        // console.log(mobile);
        const {brand, image, phone_name, slug} = mobile;
        const mobileDiv = document.createElement('div');
        mobileDiv.classList.add('col');
        mobileDiv.innerHTML = `
        <div class="card">
            <img class="m-5 product-image" src="${image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column gap-1 justify-content-center align-items-center">
                <h5 class="card-title">
                ${phone_name} - 
                </h5>
                <h5 class="card-title ms-2">
                ${brand}
                </h5>

                <div>
                    <button class="btn btn-primary">
                        Details
                    </button>
                </div>
            </div>
        </div>
        `;
        mobilesSection.appendChild(mobileDiv);
    })
}

loadMobiles();









