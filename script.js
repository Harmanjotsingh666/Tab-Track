let totalSwitches = 0;

function handleVisibilityChange() {
    if (document.hidden) {
        // Document is hidden (switched to another tab or window)
        totalSwitches++;
        updateSwitchCount();
    }
}

function updateSwitchCount() {
    const totalSwitchesDisplay = document.getElementById('totalSwitches');
    totalSwitchesDisplay.textContent = totalSwitches;
}

// Initial update of the switch count
updateSwitchCount();

// Listen for visibility change events (tab/window switches)
document.addEventListener('visibilitychange', handleVisibilityChange);
