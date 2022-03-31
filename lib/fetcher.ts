import axios from "axios";

const fetcher = async<JSON> (url: string): Promise<JSON> => {
    const res = await axios.get(url)
    return res.data
}

export { fetcher }