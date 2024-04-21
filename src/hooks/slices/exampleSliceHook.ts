import { exampleSlice } from "@/store/slices";
import { useAppSelector, useAppDispatch } from "../redux";

export const useExampleSliceState = () => {
    const { exampleKey } = useAppSelector((state) => state.exampleSlice);
    return { exampleKey };
};

export const useExampleSliceActions = () => {
    const dispatch = useAppDispatch();
    const { setExample } = exampleSlice.actions;

    const exampleAction = (key: string) => dispatch(setExample(key));

    return { exampleAction };
};
