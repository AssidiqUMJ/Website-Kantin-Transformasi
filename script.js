document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }
    
    // Mobile dropdown toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('active');
            
            // Toggle icon rotation
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = dropdownMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
    });

   


    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get the tab ID from data attribute
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tab buttons and panes
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });
    
    // Category tabs on explore page
    const categoryTabs = document.querySelectorAll('[data-category]');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Get the category from data attribute
            const category = this.getAttribute('data-category');
            
            // Remove active class from all category tabs and content
            document.querySelectorAll('[data-category]').forEach(tab => tab.classList.remove('active'));
            document.querySelectorAll('.category-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(category)?.classList.add('active');
        });
    });
    
    // Theme switcher
    const themeBtn = document.querySelector('.theme-btn');
    const themeDropdown = document.querySelector('.theme-dropdown');
    const themeOptions = document.querySelectorAll('.theme-option');
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Toggle theme dropdown
    if (themeBtn && themeDropdown) {
        themeBtn.addEventListener('click', function() {
            themeDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!themeBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
                themeDropdown.classList.remove('active');
            }
        });
    }
    
    // Theme options
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
            localStorage.setItem('theme', theme);
            themeDropdown.classList.remove('active');
        });
    });
    
    // Function to set theme
    function setTheme(theme) {
        // Remove all theme classes
        document.body.classList.remove('light-theme', 'dark-theme', 'autumn-theme', 'forest-theme');
        // Add selected theme class
        document.body.classList.add(`${theme}-theme`);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // In a real application, you would send this to your server
                alert(`Thank you for subscribing with ${email}!`);
                this.reset();
            }
        });
    }
    
    // Load more button on explore page
    const loadMoreBtn = document.querySelector('.load-more .btn');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, you would load more items from the server
            alert('In a real application, this would load more items.');
        });
    }
});