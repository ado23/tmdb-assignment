import { useAppSelector } from "hooks/index";

export const useSelectQuery = () => useAppSelector(({ media: { query } }) => query);
