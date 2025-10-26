import React, { useEffect, useState } from 'react'

const useCheckOnline = () => {
    const [online, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        if(!navigator.onLine) {
            setIsOnline(false);
            alert("You are currently offline. Please check your internet connection.");
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () =>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
        
    },[online]);

    const handleOnline = () => {
        setIsOnline(true);
        alert("You are back online!");
    };
    const handleOffline = () => {
        setIsOnline(false);
        alert("You are currently offline. Please check your internet connection.");
    };
  return [online];
}

export default useCheckOnline