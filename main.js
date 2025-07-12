
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hapus semua active
          navLinks.forEach(link => link.classList.remove("active"));

          // Tambahkan active ke link yang cocok
          const id = entry.target.id;
          const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    },
    {
      threshold: 0.6, // bagian terlihat minimal 60% baru dianggap "masuk"
    }
  );

  // Observe semua section
  sections.forEach(section => observer.observe(section));

