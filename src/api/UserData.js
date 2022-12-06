

export const getAllCities = (currentUser) => {
    console.log({currentUser});
    return fetch(`https://localhost:7108/api/City/GetAllCitiesByUserId/${currentUser.id}`)
        .then(res => res.json())
}
