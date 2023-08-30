import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootStateType} from "../../../../app/store";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector