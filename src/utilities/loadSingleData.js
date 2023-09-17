const loadSingleData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        cache:"no-cache"
    })
    return  res.json()
};

export default loadSingleData;