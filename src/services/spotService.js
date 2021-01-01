const BASE_URL = 'http://localhost:3001/api/spot'

function fetchSpotData() {
    return fetch(BASE_URL).then(res => res.json())
}

function create(spot) {
    return fetch(BASE_URL + '/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(spot)
    }).then(res => res.json())
}

function update(spot, spotid) {
    return fetch(`${BASE_URL}/${spotid}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(spot)
    }).then(res => res.json());
}

function deleteOne(id){
    return fetch (`${BASE_URL}/${id}`,{
        method: 'DELETE'
    }) .then(res => res.json())
}

function showOne(id){
    return fetch (`${BASE_URL}/${id}`, { 
    }) .then(res => res.json())
}

export {
    fetchSpotData,
    create,
    update,
    deleteOne,
    showOne
}