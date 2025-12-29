
var category_name = '';

// Function to apply your script
function applyScript() {

  // add prefix
  const emberActionElement = document.querySelector('[data-test-variation-name=""]');
  if (emberActionElement) {
    console.log('set value');
    if (category_name) {
      emberActionElement.setAttribute('value', 'Eastons Books - ' + category_name);
      category_name = '';
    }
  }

  // add category
  if( category_name == '') {
    const categoryElement = document.querySelector('[class="advanced-categorization__category-list"]');
    if (categoryElement) {
        category_name = categoryElement.firstElementChild.textContent;
        console.log('category set to: ' + category_name);
    }
  }
}

// Run the script initially
applyScript();

// Set up a MutationObserver to re-run the script when the DOM changes
const observer = new MutationObserver((mutations) => {
  console.log('DOM changed. Reapplying script...');
  applyScript();
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,    // Watch for added/removed elements
  subtree: true       // Watch all descendants
});
