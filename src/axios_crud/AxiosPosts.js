
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AxiosPosts = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: "", body: "" })
    const [editPostId, setEditPostId] = useState(null)
    const [editPostData, setEditPostData] = useState({ title: "", body: "" })

    const URL = "https://jsonplaceholder.typicode.com/posts";


    useEffect(() => {
        fetchPosts()
    }, [])


    // Read fetch posts

    const fetchPosts = async () => {
        try {
            const response = await axios.get(URL);
            setPosts(response.data.slice(0, 10))

        } catch (err) {
            console.error("Error fetching posts:", err)
        }
    }

    // Create add a new post 

    const createPost = async () => {
        try {
            const response = await axios.post(URL, newPost)
            console.log("response create", response)
            setPosts((prevPosts) => [response.data, ...prevPosts])
            setNewPost({ title: "", body: "" })
        } catch (error) {
            console.error("Error creating post", error)
        }
    }


    // Update a post

    const updatePost = async () => {
        try {
            const response = axios.put(`${URL}/${editPostId}`, editPostData)
            console.log("Update api response", response)
            setPosts((prevPosts) =>
            prevPosts.map((post) =>
              post.id === editPostId ? { ...post, ...response.data } : post
            )
          );
            setEditPostId(null)
            setEditPostData({ title: "", body: "" })

        } catch (error) {
            console.log("Error when updating", error)
        }
    }

    // Deleting a post

    const deletePost = async (id) => {
        try {
            const response = await axios.delete(`${URL}/${id}`)
            console.log("response", response)
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
        } catch (error) {
            console.log("Error deleting a post", error)
        }
    }


    console.log("posts", posts)


    return (
        <div>
            <h1>Axios with CRUD and Jsonplaceholder</h1>

            {/* Create post */}

            <div>
                <h2>Create Post</h2>
                <input
                    type='text'
                    placeholder='Title'
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Body'
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                />

                <button onClick={createPost}>Add Post</button>
            </div>

            {/* List posts */}

            <div>
                <h2>Posts</h2>
                {posts.map((post, index) => {
                    return <div key={index}>
                        {editPostId === post.id ? (<div>
                            <input
                                type='text'
                                value={editPostData.title}
                                onChange={(e) => setEditPostData({
                                    ...editPostData, title: e.target.value
                                })}
                            />
                            <input
                                type='text'
                                value={editPostData.body}
                                onChange={(e) => setEditPostData({
                                    ...editPostData, body: e.target.value
                                })}
                            />
                            <button onClick={updatePost}>Update Post</button>
                        </div>) : (<div>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <button onClick={() => {
                                setEditPostId(post.id)
                                setEditPostData(post)
                            }}>
                                Edit
                            </button>
                            <button onClick={()=>deletePost(post.id)}>Delete Post</button>
                        </div>)}
                    </div>
                })}
            </div>
        </div>
    )
}

export default AxiosPosts