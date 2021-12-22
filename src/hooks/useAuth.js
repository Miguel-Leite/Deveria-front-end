import { useContext } from "react";
import { AuthContext } from '../context/AuthContextProvider'

export function useAuth() {
    return useContext(AuthContext);
}