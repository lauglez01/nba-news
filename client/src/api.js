export const api_source = 'http://localhost:8000/sources';
export const url = 'https://nba-latest-news.p.rapidapi.com/articles';
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cbcaa37ed2msh714b94742876cb9p1baacdjsnfddcbe0ccf04',
		'x-rapidapi-host': 'nba-latest-news.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}