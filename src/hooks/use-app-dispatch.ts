import { useDispatch } from "react-redux";

import { AppDispatch } from "store/store";

/* Use throughout your app instead of plain `useDispatch` */
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
