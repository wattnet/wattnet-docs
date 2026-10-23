// The header keeps "wattnet" and follows the page: the section after it, and the
// title of the page once its heading scrolls out of view. Instant navigation does
// not render the header again and swaps in the second title of the fetched page, so
// write both from the page that was just loaded, replacing whatever markup they hold.
document$.subscribe(function () {
  var page = document.querySelector("[data-header-section]")
  var title = document.querySelector(".md-header__title")
  var topics = document.querySelectorAll(".tag-switch .md-header__topic")
  if (!page || !title || topics.length < 2) return
  topics[0].textContent = page.dataset.headerSection
  topics[1].textContent = page.dataset.headerTitle
  title.toggleAttribute("data-same", page.dataset.headerSection === page.dataset.headerTitle)
})
