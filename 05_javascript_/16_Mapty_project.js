'use strict';

// using classes redefine whole code


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(distance, duration, coordinates) {
        // for old javascript
        // this.date=...;
        // this.id=...App;
        this.distance = distance;
        this.duration = duration;
        this.coordinates = coordinates;
    }
    _setDate() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.dateDecrip = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
}
class Running extends Workout {
    type = 'running';
    constructor(distance, duration, coordinates, cadance) {
        super(distance, duration, coordinates);
        this.cadance = cadance;
        this.calc_pace();
        this._setDate();
    }
    calc_pace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    type = 'cycling';
    constructor(distance, duration, coordinates, elevationGain) {
        super(distance, duration, coordinates);
        this.elevationGain = elevationGain;
        this.calc_speed();
        this._setDate();
    }
    calc_speed() {
        this.speed = this.distance / this.duration;
        return this.speed;
    }
}



const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapEvent;
    #workouts = [];
    constructor() {
        this._getPosition();
        this._getFromStorage();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._goToElement.bind(this));
    }
    _getPosition() {
        // geolocation API
        // a function in js get two callback function one on sucess and one on failure
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get location');
            });
        }
    }
    _loadMap(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.#map = L.map('map').setView([latitude, longitude], 13);
        L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl={language}', {
            attribution: 'Map data &copy;2026 Google',
            subdomains: '0123',
            maxZoom: 22,
            language: 'en'
        }).addTo(this.#map);
        L.marker([latitude, longitude]).addTo(this.#map).bindPopup(L.popup({
            maxwidth: 250,
            maxheight: 100,
            autoClose: false,
            closeOnClick: false,
        })).setPopupContent('This is your current location ').openPopup();
        this.#map.on('click', this._showForm.bind(this));
        this.#workouts.forEach(work => {
            this._renderWorkout(work);
            this._renderMarker(work);
        });
    }
    _showForm(mapE) {
        // we can use leaflet library method to track event on map
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _hideForm() {
        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid', 1000);
    }
    _toggleElevationField() {
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    }
    _newWorkout(e) {
        // submit
        e.preventDefault();
        const validInputs = (...inputs) => inputs.every((input) => Number.isFinite(input));
        const allPositive = (...inputs) => inputs.every((input) => input > 0);
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        if (type === 'running') {
            const cadance = +inputCadence.value;
            if (!validInputs(distance, duration, cadance) || !allPositive(distance, duration, cadance)) {
                return alert("Inputs have to be positve numbers");
            }
            workout = new Running(distance, duration, [lat, lng], cadance);
        }
        if (type === 'cycling') {
            const elevation = +inputElevation.value;
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) {
                return alert("Inputs have to be positve numbers");
            }
            workout = new Cycling(distance, duration, [lat, lng], elevation);
        }
        this.#workouts.push(workout);
        this._renderMarker(workout);
        this._renderWorkout(workout);
        // hide form
        this._hideForm();
        this._setLocalStorage();
    }
    _renderMarker(workout) {
        L.marker(workout.coordinates).addTo(this.#map).bindPopup(L.popup({
            maxwidth: 250,
            maxheight: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.dateDecrip}`).openPopup();
    }
    _renderWorkout(workout) {
        let html = `<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.dateDecrip}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`

        if (workout.type === 'running') {
            html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadance}</span>
                <span class="workout__unit">spm</span>
                </div>
                </li>`
        }
        if (workout.type === 'cycling') {
            html += `<div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(1)}</span>
                    <span class="workout__unit">km/h</span>
                    </div>
                    <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                    </div>
                    </li> `
        }
        form.insertAdjacentHTML("afterend", html);
    }
    _goToElement(e) {
        const workoutEl = e.target.closest('.workout');
        if (!workoutEl) return
        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
        this.#map.setView(workout.coordinates, 13, {
            animate: true,
            pan: {
                duration: 1
            }
        });
    }
    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }
    _getFromStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));
        if (!data) return;
        this.#workouts = data;
    }
    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
}

const app = new App();
// app._loadMap();
// app._showForm();
// app._toggleElevationField();