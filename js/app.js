// Data Loading From API
const loadMobiles = async(searchValue, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMobiles(data.data, dataLimit);
}

// Display Data From API To DOM
const displayMobiles = (mobiles, dataLimit) => {
    // console.log(mobiles)
    if(mobiles.length === 0){
        displayElement(true, 'error-msg')
    } else{
        displayElement(false, 'error-msg')
    }

    if(dataLimit && mobiles.length > 10){
        mobiles = mobiles.slice(0,10);
        displayElement(true, 'show-all-btn-div');
    } else {
        displayElement(false, 'show-all-btn-div');
    }
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
                <h5 class="card-title text-center">
                ${phone_name} 
                </h5>
                <h5 class="card-title">
                ${brand}
                </h5>

                <div>
                    <button class="btn btn-primary">
                        Buy Now
                    </button>
                    <button class="btn btn-info">
                        Show Details
                    </button>
                </div>
            </div>
        </div>
        `;
        mobilesSection.appendChild(mobileDiv);
    })
    displayElement(false, 'spinner-container');
    displayElement(false, 'find-msg-section');
}


// all data collection function
const allPhoneShow = (dataLimit) => {
    displayElement(true, 'spinner-container');
    const searchField = document.getElementById('search-field');
    loadMobiles(searchField.value, dataLimit);
}

// Search Functionality From Btn
const searchBtn = () => {
    allPhoneShow(10);
}

// Error Message & Spinner Display Functionality
const displayElement = (status, element) =>{
    const messageElement = document.getElementById(element);
    if(status){
        messageElement.classList.remove('d-none');
    } else {
        messageElement.classList.add('d-none');
    }
}


const displayAll = () =>{
    allPhoneShow();
}







