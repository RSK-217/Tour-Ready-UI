export const getAllCities = (currentUser) => {
    console.log({currentUser});
    return fetch(`https://localhost:7108/api/City/GetAllCitiesByUserId/${currentUser.id}`)
        .then(res => res.json())
}

export const getAllShows = (currentUser) => {
    console.log({currentUser});
    return fetch(`https://localhost:7108/api/Show/GetShowByUserId/${currentUser.id}`)
        .then(res => res.json())
}