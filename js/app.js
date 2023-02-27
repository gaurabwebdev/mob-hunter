// Data Loading From API
const loadMobiles = async(searchValue) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMobiles(data.data);
}

const displayMobiles = (mobiles) => {
    const mobilesSection = document.getElementById('mobiles-container');
    mobilesSection.innerHTML = '';
    mobiles.forEach((mobile) => {
        // console.log(mobile);
        const {brand, image, phone_name, slug} = mobile;
        const mobileDiv = document.createElement('div');
        mobileDiv.classList.add('col');
        mobileDiv.innerHTML = `
        <div class="card">
            <div class= "p-3 mx-auto">
                <img src="${image}" class="card-img-top w-full h-100" alt="...">
            </div>
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

// Search Functionality From Btn
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(e){
    const searchField = document.getElementById('search-field');
    loadMobiles(searchField.value);
})











