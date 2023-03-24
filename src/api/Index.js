import axios from "axios";
import { useEffect } from "react";


const Api = {
    getProductApi: () => {
        useEffect(() => {
            axios.get().then((response) => {
                setPost(response.data);
            }, []);
        })
    }
}