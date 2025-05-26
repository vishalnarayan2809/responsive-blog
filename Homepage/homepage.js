import {blogData} from '../JS/data.js'

let showingAll = false;

function renderBlogPosts(limit = null) {
    const blogGrid = document.querySelector('.blog-grid')
    blogGrid.innerHTML = ''
    
    const postsToShow = limit ? blogData.slice(0, limit) : blogData;
    
    postsToShow.forEach(blog => {
        const article = document.createElement('article')
        article.setAttribute('role','listitem')
        article.className = 'blog-post';
        article.innerHTML = `
            <img src="${blog.image}" alt="Blog post featured image">
            <time datetime="${blog.date}">${blog.dateFormatted}</time>
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <a href="../Blog/blog.html?id=${blog.id}" class="blog-link" aria-label="Read full article: ${blog.title}">Click Here to read more</a>
        `;
        blogGrid.append(article)
    });
}

document.addEventListener('DOMContentLoaded',function(){
    // Initially show only 4 posts
    renderBlogPosts(4);
    
    // Handle "View more" button click
    const viewMoreBtn = document.getElementById('view_more');
    viewMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (!showingAll) {
            renderBlogPosts(); // Show all posts
            viewMoreBtn.textContent = 'View less';
            viewMoreBtn.setAttribute('aria-label', 'View fewer blog posts');
            showingAll = true;
        } else {
            renderBlogPosts(4); // Show only 4 posts
            viewMoreBtn.textContent = 'View more';
            viewMoreBtn.setAttribute('aria-label', 'View more blog posts');
            showingAll = false;
        }
    });
})