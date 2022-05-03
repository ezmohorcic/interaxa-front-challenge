import axios from "axios";
import { searchFailed, searchSuccess, searchVoid } from "../reducers/searchReducer";

export const searchApi = async (dispatch,search) =>
{
    try
    {
        console.log(search)
        console.log(`/json?lat=${search.lat}&lng=${search.lng}${search.date? `&date=${search.date}` : ""}${search.formatted? `&formatted=0` : ""}`)
        const { data } = await axios.get(`/json?lat=${search.lat}&lng=${search.lng}${search.date? `&date=${search.date}` : ""}${search.formatted? `&formatted=${search.formatted}` : ""}`);
        console.log(data)
        data.length>0 ?  dispatch( searchSuccess(data) ) : dispatch( searchVoid() );
    }
    catch(e)
    {
        console.log(e)
        dispatch( searchFailed() );
    }
    
}