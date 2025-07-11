document.querySelector('button').addEventListener('click', () => {
    const city = document.querySelector('.search_bar').value.trim();
    const apiKey = '8fa129bd04caff75514b900b7a01a70d'; 

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = `
                <p><strong>City/State/Country:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;

            
            let resultDiv = document.querySelector('.result');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.className = 'result';
                document.body.appendChild(resultDiv);
            }
            resultDiv.innerHTML = weatherInfo;
        })
        .catch(error => {
            alert(error.message);
        });
});
