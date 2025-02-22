import { Outlet } from "react-router-dom";
import { Headers } from "../UI/Header";
import { Footers } from "../UI/Footers";

export const AppLayout = () => {
    return(
    <>
        <Headers />
        <Outlet />
        <Footers />
    </>
)
}