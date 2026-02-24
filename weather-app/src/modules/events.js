import { WeatherData } from "..";

export function addsearchbarEvent() {
    document.getElementById('searchbar').addEventListener('submit', function (event) {
        event.preventDefault();
        let inputLocation = document.getElementById('searchbarLocation');
        if (!document.getElementsByClassName('app')) {
            WeatherData(inputLocation.value);
        }
        else {
            document.getElementById('head').textContent = '';
            document.getElementById('stats').textContent = '';
            WeatherData(inputLocation.value);
        }
    });
}

export function errorMsgEvent() {
    document.getElementById('errorMsg').addEventListener('click', () => {
        document.getElementById('errorMsg').remove();
    });
}