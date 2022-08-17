import axios from "axios";

class CustomerService{
    baseUrl ="http://localhost:8098/bookstoreapp/deliverydetails";

    getAll(){
        return axios.get(`${this.baseUrl}/getdetails`);
    }

    addCoustomer(data){
        return axios.post(`${this.baseUrl}/adddetails`, data);
    }

    editCustomer(id, data){
        return axios.put(`${this.baseUrl}/updatedetails/${id}`, data);
    }
}

export default new CustomerService();
