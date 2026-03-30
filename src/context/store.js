export let inishilState ={
    arr:[]
}

export const reducer = (count,action) =>{
    switch (action.type){
        case 'WishList':

            console.log(action)
            const wishListChek = count.arr.some((item) => item.id == action.card.id);


            let newWishList = [];

            if (wishListChek) {
                newWishList = count.arr?.filter((item) => item.id !== action.card.id);
            } else {
            if (count.arr.length) {
            newWishList = [...count.arr, action.card];
            } else {
                newWishList = [action.card];
            }
    }
    return({...count , arr:newWishList})
    }
}