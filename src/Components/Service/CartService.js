import axios from "axios";

class CartService{
    baseUrl ="http://localhost:8098/bookstoreapp/mycart";

    addBookTocart(id, userID){
        return axios.post(`${this.baseUrl}/addbook/${id}/${userID}`);
    }

    getCart(){
        return axios.get(`${this.baseUrl}/getcartlist`);
    }

    increaseBookQuantity(id){
        return axios.put(`${this.baseUrl}/increaseByOne/${id}`);
    }

    decreaseBookQuantity(id){
        return axios.put(`${this.baseUrl}/decreaseByOne/${id}`);
    }

    deleteBookFromCart(id){
        return axios.delete(`${this.baseUrl}/delete/${id}`);
    }

    getUserCart(id){
        return axios.get(`${this.baseUrl}/getCartByUserId/${id}`);
    }

    emptyCart(userID){
        return axios.delete(`${this.baseUrl}/emptyCart/${userID}`);
    }

    getCartPrice(userID){
        return axios.get(`${this.baseUrl}/getCartPrice/${userID}`);
    }
}
export default new CartService();