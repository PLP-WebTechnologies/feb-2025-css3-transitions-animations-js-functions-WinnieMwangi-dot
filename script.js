document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeSelect = document.getElementById('theme');
    const animationSelect = document.getElementById('animation');
    const savePrefsBtn = document.getElementById('savePrefs');
    const triggerAnimationBtn = document.getElementById('triggerAnimation');
    const animatedElement = document.getElementById('animatedElement');
    const body = document.body;
    
    // Load saved preferences
    loadPreferences();
    
    // Save preferences to localStorage
    savePrefsBtn.addEventListener('click', function() {
        const preferences = {
            theme: themeSelect.value,
            animation: animationSelect.value
        };
        
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        alert('Preferences saved!');
        
        // Apply theme immediately
        applyTheme(preferences.theme);
    });
    
    // Trigger selected animation
    triggerAnimationBtn.addEventListener('click', function() {
        // Reset any existing animations
        animatedElement.className = 'box';
        
        // Get the selected animation
        const selectedAnimation = animationSelect.value;
        
        // Add the animation class after a small delay to ensure reset
        setTimeout(() => {
            animatedElement.classList.add(selectedAnimation);
        }, 10);
    });
    
    // Load preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            
            // Set dropdown values
            themeSelect.value = preferences.theme;
            animationSelect.value = preferences.animation;
            
            // Apply theme
            applyTheme(preferences.theme);
        }
    }
    
    // Apply the selected theme
    function applyTheme(theme) {
        // Remove all theme classes
        body.classList.remove('light', 'dark', 'blue');
        
        // Add the selected theme class
        body.classList.add(theme);
    }
    
    // Bonus: Add a transition when changing themes
    themeSelect.addEventListener('change', function() {
        applyTheme(this.value);
    });
});
