//hide navigation after click in navigation link

const navLinks = [...document.querySelectorAll(".navigation__link")];
const navBtn = document.getElementById("navi-toggle");

const handleMenuToggle = () => {
  navBtn.checked = !navBtn.checked;
};

navLinks.forEach(link => {
  link.addEventListener("click", () => handleMenuToggle());
});

//smooth scroll
$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    500,
    "linear"
  );
});
