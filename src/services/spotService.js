const BASE_URL = 'http://localhost:3001/api/spot'

function create(spot) {
    return fetch(BASE_URL + '/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(spot)
    })
}

export {
    create
}