import Axios from "axios";
import { Item } from "../models/Item";

export default class APIService {
  static async GetStuff(id: string) {
      const response = await Axios.get<Item>("/api/item/get/" + id);

    return response.data;
  }
}
