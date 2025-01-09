import FooterComponent from "../Components/FooterComponent";
import HeaderComponent from "../Components/HeaderComponent";
import { Outlet } from "react-router-dom"
export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}