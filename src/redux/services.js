import axios from "axios";
import { BASE_URL } from "../config";

export const fetchMeals = () => axios.get(BASE_URL + 'meals');
