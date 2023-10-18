import axios from "axios";

export default class PostService {

    static async getPostsPage (pageParam = 1, options = {}) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`, options)
        return response.data
    }
    static async getById(id: string) {
        return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}
