import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [nav , setNav] = useState(false);

const openSidebar = () => {
    setIsSidebarOpen(true);
};
const closeSidebar = () => {
    setIsSidebarOpen(false);
};

const navbarSticky = () =>{
    if(window.scrollY >= 80){
        setNav(true)
    }else{
        setNav(false)
    }
}
window.addEventListener('scroll' , navbarSticky)

return (
    <AppContext.Provider
    value={{
        isSidebarOpen,
        nav,
        openSidebar,
        closeSidebar,
    }}
    >
    {children}
    </AppContext.Provider>
);
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};