import './Blog.css'
import blog from '../../../assets/logo/blog1.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import Pagination from '../../../Components/Pagination/Pagination';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    // Pagination
    const [currentPage, setCurrentPage ] = useState(1);
    const [postPerPage, setPostPerPage] = useState(4);

    const lastPostIndex = currentPage * postPerPage;
    const fastPostIndex = lastPostIndex - postPerPage;
    const currentPosts = blogs.slice(fastPostIndex, lastPostIndex);


    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })

    return (
        <div className='mx-auto w-[90%] mt-6 mb-10'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center p-4 mt-4 mb-7'> <span className='titleUnderline'>Latest<span className='ourFacilitiesSpan'>Blog</span></span></h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 mx-auto gap-4'>
                {
                currentPosts.map(blog => <div key={blog.id}>
                    <img className='w-[100%] hover:scale-110 transition duration-500 cursor-pointer' src={blog.img} alt="" />
                    <p className=' text-lg mt-2'><MdDateRange className='text-2xl' style={{ color: 'rgba(9, 175, 134)' }}></MdDateRange> {blog.date}</p>
                    <h2 className=' text-lg font-bold lg:text-2xl my-3'>{blog.title}</h2>
                    <p>{blog.blogDetails}</p>
                </div>)  
                }
            </div>
            <Pagination totalPosts={blogs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}></Pagination>
        </div>
    );
};

export default Blog;