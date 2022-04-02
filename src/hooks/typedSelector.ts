import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store/rootreducer";

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector