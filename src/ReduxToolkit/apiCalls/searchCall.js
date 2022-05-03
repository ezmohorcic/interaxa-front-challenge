import axios from "axios";
import { OK } from "../consts";
import { searchFailed, searchSuccess, searchVoid } from "../reducers/searchReducer";

export const searchApi = async (dispatch,search) =>
{
    try
    {
        console.log(search)
        const query = `/json?lat=${search.lat}&lng=${search.lng}${search.date? `&date=${search.date}` : ""}${search.formatted? `&formatted=0` : ""}`
        console.log(query)
        const { data } = await axios.get(query);
        console.log(data)
        data.status===OK ?  dispatch( searchSuccess({...data,results:{...data.results,lat:search.lat,lng:search.lng,date:search.date}}) ) : dispatch( searchVoid() );
    }
    catch(e)
    {
        console.log(e)
        dispatch( searchFailed() );
    }
    
}