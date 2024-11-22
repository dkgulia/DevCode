export const createSolutionValidator = (problemId: string) => {
    const validators: Record<string, (code: string) => boolean> = {
      '1': validateResponsiveNavMenu,
      '2': validateImageCarousel,
      '3': validateStarRating,
      '4': validateFormValidation,
      // Add other problem validators
    };
  
    return validators[problemId] || defaultValidator;
  };
  
  const defaultValidator = (submittedCode: string) => {
    return submittedCode.trim().length > 50; // Basic non-empty code check
  };
  
  const validateResponsiveNavMenu = (code: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    
    const nav = tempDiv.querySelector('nav');
    const hamburgerButton = tempDiv.querySelector('.hamburger');
    const mobileMenu = tempDiv.querySelector('.mobile-menu');
  
    return !!(
      nav && 
      hamburgerButton && 
      mobileMenu && 
      code.includes('@media') // Responsive design check
    );
  };
  
  const validateImageCarousel = (code: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    
    const carousel = tempDiv.querySelector('.carousel');
    const prevButton = tempDiv.querySelector('.prev-button');
    const nextButton = tempDiv.querySelector('.next-button');
    const images = tempDiv.querySelectorAll('.carousel-image');
  
    return !!(
      carousel && 
      prevButton && 
      nextButton && 
      images.length > 1
    );
  };
  
  const validateStarRating = (code: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    
    const stars = tempDiv.querySelectorAll('.star');
    const interactiveElements = tempDiv.querySelector('.interactive');
    const readonlyElements = tempDiv.querySelector('.readonly');
  
    return !!(
      stars.length > 0 && 
      interactiveElements && 
      readonlyElements
    );
  };
  
  const validateFormValidation = (code: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = code;
    
    const form = tempDiv.querySelector('form');
    const emailInput = tempDiv.querySelector('input[type="email"]');
    const passwordInput = tempDiv.querySelector('input[type="password"]');
    const confirmPasswordInput = tempDiv.querySelector('#confirm-password');
  
    return !!(
      form && 
      emailInput && 
      passwordInput && 
      confirmPasswordInput
    );
  };