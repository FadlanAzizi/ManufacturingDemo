import axios from "axios";
import { User } from "@/pages/PageUser/DetailUser/UserSettings/UserModel";
// import { IServiceResponse } from '@/types/ServiceResponse';

export default class ItemService {
  API_URL = process.env.VUE_APP_API_URL;
  TOKEN = process.env.VUE_APP_AUTH_TOKEN;

  headerToken = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.TOKEN}`,
    },
  };

  public async getUser(): Promise<User[]> {
    console.log(this.headerToken);
    const result = await axios.get(`${this.API_URL}users`, this.headerToken);
    console.log("getItems", result.data);
    return result.data;
  }
}
