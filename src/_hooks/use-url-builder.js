import { useContext } from 'react';
import context from '../_context/';

export default (url, location) => {
  const { typeId, id } = useContext(context).office;
  const state = useContext(context);
  //const fixedParams = `&status=PUBLICADA&limit=9&typeId=${typeId}&id=${id}&integration=WEB`;
  //const fixedParams = `&status=PUBLICADA&limit=9&typeId=${typeId}&id=${id}`;
  const fixedParams = `&status=PUBLICADA&limit=9&typeId=${typeId}&id=5e8e36b31c9d440000d35090`;  
  const search = location.search ? location.search : '?';
  return url + search + fixedParams;
}