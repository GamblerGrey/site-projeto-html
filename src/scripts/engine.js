 const sidebarItems = document.querySelectorAll('#sidebar ul li');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active'); 
        });
     });