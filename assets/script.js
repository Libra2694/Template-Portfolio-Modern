document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section animation
                entry.target.classList.add('show');
                
                // Animate skill bars only in about section
                if (entry.target.id === 'about') {
                    animateSkillBars();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('bg-opacity-90');
            navbar.classList.add('bg-opacity-100');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.remove('bg-opacity-100');
            navbar.classList.add('bg-opacity-90');
        }
    });

    // Show/Hide Projects
    const toggleBtn = document.getElementById("toggleProjects");
    const projectCards = document.querySelectorAll("#projectGrid .project-card");

    let isExpanded = false;

    if (toggleBtn && projectCards.length > 0) {
        toggleBtn.addEventListener("click", function (e) {
            e.preventDefault();

            projectCards.forEach((card, index) => {
                if (index >= 3) {
                    if (!isExpanded) {
                        card.classList.remove("hidden");
                        setTimeout(() => {
                            card.classList.remove("opacity-0", "translate-y-4");
                            card.classList.add("opacity-100", "translate-y-0");
                        }, 10);
                    } else {
                        card.classList.add("opacity-0", "translate-y-4");
                        setTimeout(() => {
                            card.classList.add("hidden");
                            card.classList.remove("opacity-100", "translate-y-0");
                        }, 500);
                    }
                }
            });

            isExpanded = !isExpanded;
            toggleBtn.textContent = isExpanded ? "Show Less Projects" : "View All Projects";
        });
    }
    
    // Download CV with Confirmation and Progress Bar
    const cvConfirmBtn = document.getElementById('cvConfirmBtn');
    const confirmDialog = document.getElementById('confirmDialog');
    const dialogCancel = document.querySelector('.dialog-cancel');
    const dialogConfirm = document.getElementById('dialogConfirm');
    const downloadProgress = document.getElementById('downloadProgress');
    const dialogActions = document.getElementById('dialogActions');
    
    if (cvConfirmBtn && confirmDialog) {
        // Buka dialog konfirmasi
        cvConfirmBtn.addEventListener('click', function(e) {
            e.preventDefault();
            confirmDialog.classList.remove('hidden');
            confirmDialog.classList.add('visible');
            
            // Reset state setiap kali dialog dibuka
            resetDownloadProgress();
        });

        // Tutup dialog konfirmasi
        dialogCancel.addEventListener('click', function() {
            confirmDialog.classList.remove('visible');
            confirmDialog.classList.add('hidden');
        });

        // Proses download
        dialogConfirm.addEventListener('click', function() {
            // Sembunyikan tombol aksi
            dialogActions.classList.add('hidden');
            
            // Tampilkan progress bar
            downloadProgress.classList.remove('hidden');
            downloadProgress.classList.add('visible');
            
            // Simulasi progress download
            simulateDownload();
        });

        function simulateDownload() {
            const progressBar = downloadProgress.querySelector('.progress-bar');
            const progressText = downloadProgress.querySelector('.progress-text');
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    progressText.textContent = 'Download complete!';
                    
                    // Mulai download sebenarnya
                    setTimeout(() => {
                        const link = document.createElement('a');
                        link.href = './assets/cv/my-cv.pdf';
                        link.download = 'namafile.pdf';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        
                        // Tutup dialog
                        confirmDialog.classList.remove('visible');
                        confirmDialog.classList.add('hidden');
                    }, 500);
                } else {
                    progressText.textContent = `Downloading ${Math.min(progress, 100).toFixed(0)}%`;
                }
                progressBar.style.width = `${progress}%`;
            }, 200);
        }

        function resetDownloadProgress() {
            const progressBar = downloadProgress.querySelector('.progress-bar');
            const progressText = downloadProgress.querySelector('.progress-text');
            
            // Reset progress
            progressBar.style.width = '0%';
            progressText.textContent = 'Preparing download...';
            
            // Sembunyikan progress bar
            downloadProgress.classList.remove('visible');
            downloadProgress.classList.add('hidden');
            
            // Tampilkan tombol aksi
            dialogActions.classList.remove('hidden');
        }
    }

    // Footer - Current Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // ======================
    // EMAILJS CONFIGURATION
    // ======================
    
    // Inisialisasi EmailJS
    // EmailJS Configuration
    // configurasi email js bisa chat Libra
emailjs.init('YOUR_PUBLIC_KEY'); // Ganti dengan Public Key Anda

// Setup Form Kontak
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const notificationPopup = document.getElementById('notification-popup');
  const notificationIcon = document.getElementById('notification-icon');
  const notificationTitle = document.getElementById('notification-title');
  const notificationMessage = document.getElementById('notification-message');
  const notificationClose = document.getElementById('notification-close');

  // Close notification handler
  notificationClose.addEventListener('click', function() {
    notificationPopup.classList.add('hidden');
  });

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading state
    btnText.textContent = 'Sending...';
    submitBtn.disabled = true;
    btnSpinner.classList.remove('hidden');

    // Kirim email
    emailjs.sendForm('namaservice', 'namatemplate', this)
      .then(() => {
        // Show success notification
        showNotification(
          'Success!', 
          'Your message has been sent successfully.',
          'text-green-500',
          'fa-check-circle'
        );
        contactForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        showNotification(
          'Error!', 
          'Failed to send message. Please try again.',
          'text-red-500',
          'fa-exclamation-circle'
        );
      })
      .finally(() => {
        // Reset button state
        btnText.textContent = 'Send Message';
        submitBtn.disabled = false;
        btnSpinner.classList.add('hidden');
      });
  });

function showNotification(title, message, colorClass, iconClass) {
  // Set notification content
  notificationTitle.textContent = title;
  notificationMessage.textContent = message;
  notificationIcon.className = `fas ${iconClass} ${colorClass}`;
  
  // Show popup with animation
  notificationPopup.classList.remove('hidden');
  notificationPopup.classList.remove('opacity-0');
  notificationPopup.classList.add('opacity-100');
  
  // Auto-hide after 5 seconds with fade out animation
  setTimeout(() => {
    notificationPopup.classList.remove('opacity-100');
    notificationPopup.classList.add('opacity-0');
    
    // Hide completely after animation finishes
    setTimeout(() => {
      notificationPopup.classList.add('hidden');
    }, 300); // Match this with CSS transition duration
  }, 2500); // <-- Durasi tampilan utama (5 detik)
}
}
});