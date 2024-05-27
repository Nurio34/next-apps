export const dateToDayConverter = (date: Date): string => {
    const weekdayNames = {
        Sun: "Sunday",
        Mon: "Monday",
        Tue: "Tuesday",
        Wed: "Wednesday",
        Thu: "Thursday",
        Fri: "Friday",
        Sat: "Saturday",
    };

    const day: keyof typeof weekdayNames = date
        .toDateString()
        .split(" ")[0] as keyof typeof weekdayNames;
    return weekdayNames[day];
};

export const dateReguletor = (date: Date): string => {
    const monthNames: { [key: string]: string } = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };

    let [dayOf, month, day, year] = date.toDateString().split(" ");
    return [day, monthNames[month as keyof typeof monthNames], year].join(".");
};

export const kelvinToCelsius = (kelvin: number): number => {
    return kelvin - 273.15;
};

export const dateToHour = (date: Date): string => {
    const hours = {
        "00:00:00": "12:00 AM",
        "03:00:00": "03:00 AM",
        "06:00:00": "06:00 AM",
        "09:00:00": "09:00 AM",
        "12:00:00": "12:00 PM",
        "15:00:00": "03:00 PM",
        "18:00:00": "06:00 PM",
        "21:00:00": "09:00 PM",
    };

    const hour = date.toLocaleTimeString();

    return hours[hour as keyof typeof hours];
};

export const isDayOrNight = (date: Date): string => {
    const hours = {
        "00:00:00": "n",
        "03:00:00": "n",
        "06:00:00": "d",
        "09:00:00": "d",
        "12:00:00": "d",
        "15:00:00": "d",
        "18:00:00": "n",
        "21:00:00": "n",
    };

    const hour = date.toLocaleTimeString();

    return hours[hour as keyof typeof hours];
};

export const timeStamp_To_FormattedTime = (time: number): string => {
    const timestamp = time * 1000;
    const date = new Date(timestamp);
    const [hh, mm, _] = date.toLocaleTimeString().split(":");

    return `${hh}:${mm}`;
};

export const cityList = [
    // United States
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",

    // Canada
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",

    // United Kingdom
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",

    // Germany
    "Berlin",
    "Munich",
    "Frankfurt",
    "Hamburg",
    "Cologne",

    // France
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",

    // Italy
    "Rome",
    "Milan",
    "Naples",
    "Turin",
    "Palermo",

    // Spain
    "Madrid",
    "Barcelona",
    "Valencia",
    "Seville",
    "Zaragoza",

    // China
    "Beijing",
    "Shanghai",
    "Shenzhen",
    "Guangzhou",
    "Chengdu",

    // India
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",

    // Japan
    "Tokyo",
    "Osaka",
    "Nagoya",
    "Yokohama",
    "Sapporo",

    // Brazil
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",

    // Russia
    "Moscow",
    "Saint Petersburg",
    "Novosibirsk",
    "Yekaterinburg",
    "Kazan",

    // Australia
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",

    // South Korea
    "Seoul",
    "Busan",
    "Incheon",
    "Daegu",
    "Daejeon",

    // Mexico
    "Mexico City",
    "Guadalajara",
    "Monterrey",
    "Puebla",
    "Tijuana",

    // South Africa
    "Johannesburg",
    "Cape Town",
    "Durban",
    "Pretoria",
    "Port Elizabeth",

    // Argentina
    "Buenos Aires",
    "Córdoba",
    "Rosario",
    "Mendoza",
    "La Plata",
];
