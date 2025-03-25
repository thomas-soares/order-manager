export interface RegisterRestaurantBody {
    email:string
}

export async function registerRestaurant({email}: RegisterRestaurantBody) {
    await AudioParam.post('/authenticate', {email})
}
