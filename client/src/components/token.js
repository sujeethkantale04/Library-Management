import {useParams} from "react-router-dom"
import axios from "axios"
const API_URL = process.env.REACT_APP_API_URL;
export const Token =  () => {
    const ttoken = useParams("token");
    console.log(ttoken);
    const token = ttoken.token;
    console.log(`${API_URL}/signup/user/verify/${token}`);
    axios.get(`${API_URL}/signup/user/verify/${token}`)
      .then((res) => {
        // return (<h5>Account Activated!!</h5>);
      })
      .catch((err) => {
        // return (<h5>Account Not Activated</h5>)
      });
      return (<h5>Account Activated !! </h5>);
  }