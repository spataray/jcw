/**
 * Johnny Castaway - Web Homage
 * Behavioral Engine and Environment Controller
 */

(function() {
    'use strict';

    // --- State Variables ---
    let currentState = 'IDLE';
    let lastStateChange = Date.now();
    const states = ['IDLE', 'SLEEPING', 'EXERCISING', 'DREAMING'];
    
    // --- DOM Elements ---
    const johnny = document.getElementById('johnny');
    const thoughtBubble = document.getElementById('thought-bubble');
    const container = document.getElementById('scene-container');
    const startOverlay = document.getElementById('start-overlay');
    const oceanAudio = document.getElementById('audio-ocean');

    // --- Initialization ---
    function init() {
        updateEnvironment();
        setInterval(updateEnvironment, 60000); // Check time every minute
        
        // Start Behavior Loop
        setInterval(think, 10000); // Re-evaluate state every 10 seconds

        // Event Listeners
        startOverlay.addEventListener('click', startScreensaver);
    }

    function startScreensaver() {
        startOverlay.style.display = 'none';
        
        // Attempt to play audio (handled by user gesture)
        if (oceanAudio) {
            oceanAudio.play().catch(e => console.log("Audio playback deferred", e));
        }
    }

    // --- Environment Controller ---
    function updateEnvironment() {
        const hour = new Date().getHours();
        
        // Reset classes
        container.classList.remove('night', 'sunset');
        
        if (hour >= 18 || hour < 6) {
            container.classList.add('night');
        } else if (hour >= 16 && hour < 18) {
            container.classList.add('sunset');
        }
    }

    // --- Behavioral Logic (The "Brain") ---
    function think() {
        // Only change state if we've been in the current one long enough
        if (Date.now() - lastStateChange < 15000) return;

        // Determine if we should change state (30% chance)
        if (Math.random() > 0.7) {
            const nextState = states[Math.floor(Math.random() * states.length)];
            changeState(nextState);
        }
    }

    function changeState(newState) {
        console.log(`Johnny's state: ${currentState} -> ${newState}`);
        
        // Cleanup old state
        johnny.className = '';
        thoughtBubble.innerHTML = '';
        thoughtBubble.style.display = 'none';

        currentState = newState;
        lastStateChange = Date.now();

        // Apply new state
        switch(newState) {
            case 'IDLE':
                johnny.classList.add('idle');
                break;
            case 'SLEEPING':
                johnny.classList.add('sleeping');
                break;
            case 'EXERCISING':
                johnny.classList.add('exercising');
                // Mini-logic: jumping jacks animation or simple scale
                break;
            case 'DREAMING':
                johnny.classList.add('idle');
                showDream();
                break;
        }
    }

    function showDream() {
        const dreams = ['⛵', '🍔', '🍺', '💻', '📞'];
        const dream = dreams[Math.floor(Math.random() * dreams.length)];
        
        thoughtBubble.innerHTML = dream;
        thoughtBubble.style.display = 'block';
        
        // Dreams don't last long
        setTimeout(() => {
            if (currentState === 'DREAMING') changeState('IDLE');
        }, 5000);
    }

    // Start
    init();

})();
