import { z } from "zod";

const MainSchema = z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    sea_level: z.number(),
    grnd_level: z.number(),
    humidity: z.number(),
    temp_kf: z.number(),
});

const WeatherSchema = z.object({
    id: z.number(),
    main: z.string(),
    description: z.string(),
    icon: z.string(),
});

export type Weather = z.infer<typeof WeatherSchema>;

const CloudsSchema = z.object({
    all: z.number(),
});

const WindSchema = z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number(),
});

const SysSchema = z.object({
    pod: z.string(),
});

const ListItemSchema = z.object({
    dt: z.number(),
    main: MainSchema,
    weather: z.array(WeatherSchema),
    clouds: CloudsSchema,
    wind: WindSchema,
    visibility: z.number(),
    pop: z.number(),
    sys: SysSchema,
    dt_txt: z.string(),
});

export type ListItem = z.infer<typeof ListItemSchema>;

const CitySchema = z.object({
    id: z.number(),
    name: z.string(),
    coord: z.object({
        lat: z.number(),
        lon: z.number(),
    }),
    country: z.string(),
    population: z.number(),
    timezone: z.number(),
    sunrise: z.number(),
    sunset: z.number(),
});

export const WeatherResponseSchema = z.object({
    cod: z.string(),
    message: z.number(),
    cnt: z.number(),
    list: z.array(ListItemSchema),
    city: CitySchema,
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;
