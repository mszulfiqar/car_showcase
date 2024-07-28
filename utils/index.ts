import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
	const { manufacturer, year, model, limit, fuel } = filters;
	const headers = {
		'x-rapidapi-key': '8a1cac446fmsh4f4881d48321ed1p1c6196jsn04e6676c4df6',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
	const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
		headers:headers
	});
	const result = await response.json();
	return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
	return rentalRatePerDay.toFixed(0);
  };


  export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search);
  
	// Set the specified search parameter to the given value
	searchParams.set(type, value);
  
	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
	return newPathname;
  };