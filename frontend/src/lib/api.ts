// API configuration for development and production environments
export const API_BASE_URL = import.meta.env.MODE === 'production' 
  ? 'https://thinkmoreai-backend.vercel.app'
  : 'http://localhost:5000';

// Helper function to make API requests with the correct base URL
export const apiRequest = async (endpoint: string, options?: RequestInit) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  
  return response;
};

// Contact form API function
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone?: string;
  services: string[];
  message: string;
}) => {
  return apiRequest('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
