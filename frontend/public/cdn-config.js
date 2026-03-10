// CDN Configuration for ThinkmoreAI
// This file configures external CDN resources for optimal performance

// Font loading from Google Fonts CDN
const GOOGLE_FONTS = {
  families: [
    'Sora:wght@300;400;500;600;700',
    'Inter:wght@300;400;500;600;700'
  ],
  display: 'swap',
  preload: true
};

// External CDN libraries configuration
const CDN_RESOURCES = {
  // Analytics and monitoring
  analytics: {
    google: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
    // Add other analytics as needed
  },
  
  // Performance monitoring
  performance: {
    // Add performance monitoring scripts
  },
  
  // Third-party utilities
  utilities: {
    // Add utility libraries from CDN
  }
};

// Dynamic CDN loading utility
function loadCDNResource(url, type = 'script') {
  return new Promise((resolve, reject) => {
    const element = document.createElement(type === 'script' ? 'script' : 'link');
    element[type === 'script' ? 'src' : 'href'] = url;
    element[type === 'script' ? 'async' : 'rel'] = type === 'script' ? true : 'stylesheet';
    element.onload = resolve;
    element.onerror = reject;
    document.head.appendChild(element);
  });
}

// Export for use in application
window.CDN_CONFIG = {
  GOOGLE_FONTS,
  CDN_RESOURCES,
  loadCDNResource
};
