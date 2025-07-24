export function hamburger() {
    // For the hamburger menu at the top
    document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.hamburger').classList.toggle('hambu');
    
      if(document.querySelector('.hamburger').classList.contains('hambu')) {
        document.querySelector('.header').classList.add('head');
      } else {
        document.querySelector('.header').classList.remove('head');
      }
    }
    );
    
    
}