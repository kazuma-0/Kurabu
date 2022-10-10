import { useCallback } from "react";

const dispatcher = useCallback((e) => {
  console.log(e.target.value);
  dispatch({
    type: e.target.name,
    field: e.target.name,
    payload: e.target.value,
  });
}, []);
