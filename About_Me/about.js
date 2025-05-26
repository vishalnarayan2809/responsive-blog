import {blogData} from '../JS/data.js'


document.addEventListener('DOMContentLoaded', function() {
    updateRecentPosts();
});

function updateRecentPosts() {
    const recentPostsGrid = document.querySelector('#recent-posts .blog-grid');
    
    // Get first 3 blog posts
    const recentBlogs = blogData.slice(0, 3);
    
    recentPostsGrid.innerHTML = '';
    
    recentBlogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.setAttribute('role', 'listitem');
        
        blogPost.innerHTML = `
            <img src="${blog.image}" alt="${blog.title} Image">
            <p>${blog.dateFormatted}</p>
            <h2>${blog.title}</h2>
            <p>${blog.excerpt}</p>
            <a href="../Blog/blog.html?id=${blog.id}" class="blog-link">Click Here to read more</a>
        `;
        
        recentPostsGrid.appendChild(blogPost);
    });
}
