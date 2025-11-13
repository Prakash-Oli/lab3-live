//Constructor funcation with 10 properties.
function ToyCar(modelName, carBrand, carColor, carScale, carType, carMeterial, carWeight, carLength, manufactureYear, carPrice){
    this.modelName = modelName;
    this.carBrand = carBrand;
    this.carColor = carColor;
    this.carScale = carScale;
    this.carType = carType;
    this.carMeterial = carMeterial;
    this.carWeight = carWeight;
    this.carLength = carLength;
    this.manufactureYear = manufactureYear;
    this.carPrice = carPrice;
    this.available = true; //default value.
    
    this.toggleAvailability = function() {
        this.available = !this.available;
    };

}

//array ro store car objects.
const toyCar = [];

//DOM references.
const carForm = document.getElementById("carForm");
const carList = document.getElementById("carList");

//add new car using form.
carForm.addEventListener("submit", function(event){
    event.preventDefault();

//input values 
const modelName = document.getElementById("modelName").value;
const carBrand = document.getElementById("carBrand").value;
const carColor = document.getElementById("carColor").value;
const carScale = document.getElementById("carScale").value;
const carType = document.getElementById("carType").value;
const carMeterial = document.getElementById("carMeterial").value;
const carWeight = document.getElementById("carWeight").value;
const carLength = document.getElementById("carLength").value;
const manufactureYear = parseInt(document.getElementById("manufactureYear").value);
const carPrice = parseFloat(document.getElementById("carPrice").value);

//creating new toy car.
const newCars = new ToyCar(modelName, carBrand, carColor, carScale, carType, carMeterial, carWeight, carLength, manufactureYear, carPrice);

//adding arry to display
toyCar.push(newCars);
displayCar();

//reset form
carForm.reset();
});

//car display 
function displayCar() {
    carList.innerHTML = "";

    toyCar.forEach((car, i) => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
            <h3>${car.modelName}</h3>
            <p>Brand: ${car.carBrand}</p>
            <p>Scale: ${car.carScale}</p>
            <p>Color: ${car.carColor}</p>
            <p>Price: $${car.carPrice.toFixed(2)}</p>
            <p>Meterial: ${car.carMeterial}</p>
            <p>Length: ${car.carLength}</p>
            <p>Year: ${car.manufactureYear}</p>
            <p>Weight: ${car.carWeight}</p>
            <p>Status: ${car.available ? "Available" : "Sold Out"}</p>
            <button onclick="toggleStatus(${i})">Toggle Status</button>
        `;
        carList.appendChild(card);
    });
}

function toggleStatus(index) {
    toyCar[index].toggleAvailability();
    displayCar();
}
