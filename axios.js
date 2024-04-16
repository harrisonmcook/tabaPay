import axios from "axios";

const dogservice = {
   
    
}
dogservice.getAllTeams = () => {
    const config = {
        method: "GET",
        url:"https://dog.ceo/api/breeds/image/random",
        data: null,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
};

  export default dogservice