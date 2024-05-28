import { Dispatch, SetStateAction, useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

type Props = {
    setUrl: Dispatch<SetStateAction<string>>;
};

function GetLocation(props: Props) {
    const { setUrl } = props;

    const [text, setText] = useState("");

    function showPosition(position: GeolocationPosition): void {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setText(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const positionUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OpenWeather_Key}&cnt=100`;
        setUrl(positionUrl);
    }

    function showError(error: GeolocationPositionError | any): void {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setText("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setText("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setText("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setText("An unknown error occurred.");
                break;
        }
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setText("Geolocation is not supported by this browser.");
        }
    };

    return <FaLocationCrosshairs onClick={getLocation} />;
}

export default GetLocation;
