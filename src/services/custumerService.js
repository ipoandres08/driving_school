import axios from 'axios';

const CUSTUMER_API_URL = "http://localhost:8080/api/v1/custumers"; 

class CustumerService {
    saveCustumer(custumer){
        return axios.post(CUSTUMER_API_URL, custumer);
    }
    getCustumers(){
        return axios.get(CUSTUMER_API_URL);
    }
    getCustumerById(id){
        return axios.get(CUSTUMER_API_URL + "/" + id);
    }
    updateCustumer(id, custumer){
        return axios.put(CUSTUMER_API_URL + "/" + id, custumer);
    }
}

export default new CustumerService();