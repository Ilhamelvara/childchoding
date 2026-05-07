// COURSE DATA
const courses = [
  { id: 1, title: "Mastering React 18: Beyond the Basics", category: "Web Development", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600", rating: 4.9, duration: "12j" },
  { id: 2, title: "Python for Data Analysis & Viz", category: "Data Science", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600", rating: 4.8, duration: "15j" },
  { id: 3, title: "Modern Interface Design with Figma", category: "UI/UX Design", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600", rating: 5.0, duration: "8j" },
  { id: 4, title: "Flutter Flow: Build Apps Without Code", category: "Mobile Apps", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", rating: 4.7, duration: "10j" },
  { id: 5, title: "Advanced TypeScript for Enterprise", category: "Web Development", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600", rating: 4.9, duration: "14j" },
  { id: 6, title: "Introduction to Ethical Hacking", category: "Cyber Security", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600", rating: 4.6, duration: "20j" },
  { id: 7, title: "SQL for Data Analytics BootCamp", category: "Data Science", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", rating: 4.8, duration: "9j" },
  { id: 8, title: "CSS Masterclass: Flexbox & Grid", category: "Web Development", img: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600", rating: 5.0, duration: "6j" },
  // New Courses
  { id: 9, title: "Node.js Backend Architecture", category: "Web Development", img: "https://images.unsplash.com/photo-1502942735232-e736ff501738?w=600", rating: 4.7, duration: "18j" },
  { id: 10, title: "Machine Learning with Scikit-Learn", category: "Data Science", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600", rating: 4.9, duration: "22j" },
  { id: 11, title: "Motion Design with After Effects", category: "UI/UX Design", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600", rating: 4.8, duration: "12j" },
  { id: 12, title: "iOS Development with Swift UI", category: "Mobile Apps", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600", rating: 5.0, duration: "25j" },
  { id: 13, title: "Cloud Computing with AWS", category: "Cyber Security", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600", rating: 4.6, duration: "30j" },
  { id: 14, title: "Product Management Essentials", category: "UI/UX Design", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600", rating: 4.5, duration: "10j" },
  { id: 15, title: "Golang for High Scale Systems", category: "Web Development", img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600", rating: 4.9, duration: "16j" },
  { id: 16, title: "Deep Learning with PyTorch", category: "Data Science", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600", rating: 4.8, duration: "20j" }
];

let filteredCourses = [...courses];
let currentPage = 1;
const itemsPerPage = 8;

const grid = document.getElementById('courseGrid');
const pagination = document.getElementById('pagination');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('courseSearch');

function renderCourses() {
  if (!grid) return;
  grid.classList.add('fade-out');

  setTimeout(() => {
    grid.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredCourses.slice(start, end);

    if (paginatedItems.length === 0) {
      grid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">Tidak ada kursus yang ditemukan.</p></div>';
    } else {
      paginatedItems.forEach(course => {
        const card = `
          <div class="col-md-4 col-lg-3 d-flex">
            <div class="academy-card w-100">
              <div class="academy-img-wrap">
                <img src="${course.img}" alt="${course.title}" class="academy-img">
                <span class="course-category">${course.category}</span>
              </div>
              <div class="academy-body">
                <h5 class="academy-title">${course.title}</h5>
                <div class="academy-meta">
                  <span><i class="bi bi-star-fill text-warning me-1"></i> ${course.rating}</span>
                  <span><i class="bi bi-clock me-1"></i> ${course.duration}</span>
                </div>
                <hr class="my-3 opacity-10">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold text-success">Gratis</span>
                  <a href="#" class="btn btn-sm btn-outline-success px-3">Detail</a>
                </div>
              </div>
            </div>
          </div>
        `;
        grid.innerHTML += card;
      });
    }

    renderPagination();
    grid.classList.remove('fade-out');
  }, 300);
}

function renderPagination() {
  if (!pagination) return;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  pagination.innerHTML = '';

  // Prev Button
  const prevClass = currentPage === 1 ? 'disabled' : '';
  pagination.innerHTML += `
    <li class="page-item ${prevClass}">
      <a class="page-link rounded-circle mx-1" href="javascript:void(0)" onclick="changePage(event, ${currentPage - 1})">
        <i class="bi bi-chevron-left"></i>
      </a>
    </li>
  `;

  for (let i = 1; i <= totalPages; i++) {
    const activeClass = i === currentPage ? 'active' : '';
    pagination.innerHTML += `
      <li class="page-item ${activeClass}">
        <a class="page-link rounded-circle mx-1" href="javascript:void(0)" onclick="changePage(event, ${i})">${i}</a>
      </li>
    `;
  }

  // Next Button
  const nextClass = currentPage === totalPages ? 'disabled' : '';
  pagination.innerHTML += `
    <li class="page-item ${nextClass}">
      <a class="page-link rounded-circle mx-1" href="javascript:void(0)" onclick="changePage(event, ${currentPage + 1})">
        <i class="bi bi-chevron-right"></i>
      </a>
    </li>
  `;
}

window.changePage = function (event, page) {
  if (event) event.preventDefault();
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderCourses();
}

// Filter Logic
if (filterBtns) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      if (category === 'All') {
        filteredCourses = [...courses];
      } else {
        filteredCourses = courses.filter(c => c.category === category);
      }

      currentPage = 1;
      renderCourses();
    });
  });
}

// Search Logic
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    filteredCourses = courses.filter(c =>
      c.title.toLowerCase().includes(term) ||
      c.category.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderCourses();
  });
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
});
