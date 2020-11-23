import { useCallback, useReducer, useLayoutEffect } from 'react';
import { useUrlBuilder } from '../_hooks';

export default ({ location })=> {
  const url = useUrlBuilder('https://api.clasihome.com/rest/properties', location);
  const [query, setQuery] = useReducer((current, next) => ({...current, ...next}),{
    loading: true,
    error: false,
    data: null,
  })

  const getProperties = useCallback(async() => {
    try{
      setQuery({ loading:true })
      //const url = location.search ? urlBuilder('https://api.clasihome.com/rest/properties',{...params, id, typeId} ) : urlBuilder('https://api.clasihome.com/rest/properties',{id, typeId} );
      //const url = location.search ? 'https://api.clasihome.com/rest/properties' + location.search + "&typeId=" + typeId + "&id=" +id : 'https://api.clasihome.com/rest/properties' + "?typeId=" + typeId + "&id=" +id
      const data = await fetch(url);
      const result = await data.json();
      setQuery({ loading: false, data: result });
    }
    catch(e){
      console.log(e);
      setQuery({ loading: false, error: true });
    }
  },[location]);

  useLayoutEffect(()=>{
    getProperties();
  },[location]);

  return query;
}