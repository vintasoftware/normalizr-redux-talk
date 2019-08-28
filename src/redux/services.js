import axios from "axios";
import { BASE_URL } from "../config";

export const fetchBreakfast = () => axios.get(BASE_URL + 'breakfast');
export const fetchLunch = () => axios.get(BASE_URL + 'lunch');
export const fetchDinner = () => axios.get(BASE_URL + 'dinner');