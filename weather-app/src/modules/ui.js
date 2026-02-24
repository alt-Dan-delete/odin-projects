import { errorMsgEvent } from "./events";

const svgs = require.context('../assets/icons', false, /\.svg$/);

const loadSvgIcons = () => {
    const icons = {};
    svgs.keys().forEach((fileName) => {
        const iconName = fileName.replace('./', '').replace('.svg', '');
        icons[iconName] = svgs(fileName);
    });
    return icons;
};

const icons = loadSvgIcons();

export function createSearchBar() {
    const form = document.createElement('form');
    form.id = 'searchbar';

    const inputLocation = document.createElement('input');
    inputLocation.type = 'text';
    inputLocation.id = 'searchbarLocation';
    inputLocation.classList.add('search-svg');
    inputLocation.name = 'searchbarLocation';
    inputLocation.placeholder = 'Enter a location...'
    inputLocation.required = true;

    const searchBtn = document.createElement('button');
    searchBtn.type = 'submit';
    searchBtn.textContent = 'search';

    form.appendChild(inputLocation);
    form.appendChild(searchBtn);

    document.getElementById('search').appendChild(form);
}

export function createHead(dataObject) {
    if (document.getElementById('errorMsg')) {
        document.getElementById('errorMsg').remove();
    }
    const city = document.createElement('h1');
    const div = document.createElement('div');
    const timezone = document.createElement('h2')

    const divMinMaxTemp = document.createElement('div');
    const currentTempDiv = document.createElement('div');
    const minTempDiv = document.createElement('div');
    minTempDiv.classList.add('minmaxtemp');
    const maxTempDiv = document.createElement('div');
    maxTempDiv.classList.add('minmaxtemp');


    const divTempConditions = document.createElement('div');
    divTempConditions.classList.add('tempconditions')
    const svgWeather = document.createElement('img');
    const temp = document.createElement('h1');
    const conditions = document.createElement('h2');

    if (dataObject) {
        city.textContent = dataObject.resolvedAddress;
        timezone.textContent = `Timezone: ` + dataObject.timezone;
        temp.textContent = dataObject['currentConditions'].temp + '°C';
        conditions.textContent = dataObject['currentConditions'].conditions;

        if (dataObject['currentConditions'].icon === 'undefined') {
            svgWeather.src = icons['not-available'];
        }
        else {
            svgWeather.src = icons[dataObject['currentConditions'].icon];
        }

        currentTempDiv.appendChild(temp);
        currentTempDiv.appendChild(conditions);

        divTempConditions.appendChild(svgWeather);
        divTempConditions.appendChild(currentTempDiv);


        const minTempSvg = document.createElement('div');
        const minSvg = document.createElement('img');
        minSvg.src = icons['temp-low'];
        const minTemp = document.createElement('p');
        minTemp.textContent = dataObject.days[0].tempmin + '°C';
        const minP = document.createElement('p');
        minP.textContent = 'Min';

        const maxTempSvg = document.createElement('div');
        const maxSvg = document.createElement('img');
        maxSvg.src = icons['temp-high'];
        const maxTemp = document.createElement('p');
        maxTemp.textContent = dataObject.days[0].tempmax + '°C';
        const maxP = document.createElement('p');
        maxP.textContent = 'Max';

        minTempSvg.appendChild(minSvg);
        minTempSvg.appendChild(minTemp);

        maxTempSvg.appendChild(maxSvg);
        maxTempSvg.appendChild(maxTemp)

        minTempDiv.appendChild(minP);
        minTempDiv.appendChild(minTempSvg);
        minTempDiv.appendChild(maxP);
        minTempDiv.appendChild(maxTempSvg);

        divMinMaxTemp.appendChild(minTempDiv)
        divMinMaxTemp.appendChild(maxTempDiv)

        div.appendChild(divTempConditions);
        div.appendChild(divMinMaxTemp);
    }

    const head = document.getElementById('head');
    head.appendChild(city);
    head.appendChild(timezone);
    head.appendChild(div);

    createStats(icons['chance-rain'], 'chance of rain', dataObject.days[0].precipprob + '%');
    createStats(icons['wind-static'], 'wind', dataObject['currentConditions'].windspeed + ' km/h');
    createStats(icons['sunrise'], 'sunrise', dataObject['currentConditions'].sunrise);
    createStats(icons['sunset'], 'sunset', dataObject['currentConditions'].sunset);
    createStats(icons['uv-index'], 'UV index', dataObject['currentConditions'].uvindex);
    createStats(icons['pressure'], 'pressure', dataObject['currentConditions'].pressure + ' hPa');
    createStats(icons['humidity'], 'humidity', dataObject['currentConditions'].humidity + '%');
    createStats(icons['thermometer'], 'feels like', dataObject['currentConditions'].feelslike + '°C');

}

function createStats(icon, title, data) {
    const card = document.createElement('div');
    card.id = 'card';

    const img = document.createElement('img');
    img.src = icon;

    const divDataDescription = document.createElement('div');

    const description = document.createElement('p');
    description.textContent = title;
    const ddata = document.createElement('h3');
    ddata.textContent = data;

    divDataDescription.appendChild(description)
    divDataDescription.appendChild(ddata)

    card.appendChild(img);
    card.appendChild(divDataDescription);

    document.getElementById('stats').appendChild(card);
}

export function createError(city) {
    if (!document.getElementById('errorMsg')) {

        const newElement = document.createElement('div');
        newElement.id = 'errorMsg';
        newElement.textContent = `${city} was not found, please try another location.`;

        const btn = document.createElement('button');
        btn.textContent = 'X';
        newElement.appendChild(btn);
        document.querySelector('header').after(newElement);

        errorMsgEvent();
    }
    else {
        document.getElementById('errorMsg').remove();
        createError(city);
    }
}