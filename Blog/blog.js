import {blogData} from '../JS/data.js'

document.addEventListener('DOMContentLoaded', function() {
    // Get blog ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id')) || 1;
    
    // Find the blog post
    const blog = blogData.find(post => post.id === blogId);
    
    if (!blog) {
        // Handle case where blog is not found
        document.querySelector('main').innerHTML = '<h1>Blog post not found</h1>';
        return;
    }
    
    // Update page title
    document.title = `${blog.title} - My Learning Journal`;
    
    // Update the article content
    const introduction = document.querySelector('#introduction');
    const preText = introduction.querySelector('#pre-text');
    
    preText.innerHTML = `
        <time datetime="${blog.date}">${blog.dateFormatted}</time>
        <h1>${blog.title}</h1>
        <p>${blog.content.intro}</p>
    `;
    
    // Update the main image
    const mainImage = introduction.querySelector('img');
    mainImage.src = blog.image;
    mainImage.alt = `${blog.title} featured image`;
    
    // Update main content sections (use a different selector to avoid ID conflict)
    const mainContent = document.querySelector('article > #main-content');
    let sectionsHTML = '';
    
    blog.content.sections.forEach(section => {
        sectionsHTML += `
            <section>
                <h2>${section.title}</h2>
                ${section.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}
            </section>
        `;
    });
    
    mainContent.innerHTML = sectionsHTML;
    
    // Update recent posts section
    updateRecentPosts(blogId);
});

function updateRecentPosts(currentBlogId) {
    const recentPostsGrid = document.querySelector('#recent-posts .blog-grid');
    
    // Add null check
    if (!recentPostsGrid) {
        console.error('Recent posts grid not found');
        return;
    }
    
    // Get other blog posts (excluding current one)
    const otherBlogs = blogData.filter(blog => blog.id !== currentBlogId).slice(0, blogData.length);
    
    recentPostsGrid.innerHTML = '';
    
    otherBlogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        blogPost.setAttribute('role', 'listitem');
        
        blogPost.innerHTML = `
            <img src="${blog.image}" alt="${blog.title} Image">
            <p>${blog.dateFormatted}</p>
            <h2>${blog.title}</h2>
            <p>${blog.excerpt}</p>
            <a href="blog.html?id=${blog.id}" class="blog-link">Click Here to read more</a>
        `;
        
        recentPostsGrid.appendChild(blogPost);
    });
}
