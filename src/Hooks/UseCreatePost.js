import { useEffect, useState } from "react";

const UseCreatePost = () => {
    const [createpost, setCreatePost] = useState([]);


    useEffect(() => {
        fetch('createpost.json')
            .then(res => res.json())
            .then(data => setCreatePost(data));
    }, [])
    return [createpost, setCreatePost]
};

export default UseCreatePost;