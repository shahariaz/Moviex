import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjRkZjhkMDNlYmVkZTMyNTQ1YWYwZDMxOWU0NDgwZCIsInN1YiI6IjY0Zjg4ZWQ5OGUyMGM1MGNkN2Y0MTBjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QUHTRrS2nuuWGzCOze-4SAcymbSjhUKo0RB-6KzoRHA";

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
