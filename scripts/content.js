// Function to apply your script
function applyScript() {
  console.log('Applying script to current DOM...');

  // Your script logic here
  const emberActionElement = document.querySelector('[data-test-variation-name=""]');
  if (emberActionElement) {
    console.log('set value');
    emberActionElement.setAttribute('value', 'Eastons Books - ');
  } else {
    console.log('Ember action element not found yet.');
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
