import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { featuresOverlayState } from './overlay';

export let bars = writable(Array.from({ length: 5 }, () => {
    return { width: tweened(0, { duration: 5000 }) };
}));

export function resetBars() {
    bars.update((currentBars) => {
        currentBars.forEach((bar) => {
            bar.width.set(0);
        });
        return currentBars;
    });
}

export function setBar(id) {
    bars.update((currentBars) => {
        currentBars.forEach((bar, index) => {
            bar.width.set(id - 1 === index ? 100 : 0);
        });
        return currentBars;
    });
}

export function startTimer(id) {
    bars.update((currentBars) => {
        currentBars.forEach((bar, index) => {
            bar.width.set(id - 1 === index ? 100 : 0);
        });
        const interval = setInterval(() => {
            setBar(id);
            if (id !== 5) {
                // assuming featuresOverlayState is a writable store
                // if not, you may need to adjust this part accordingly
                featuresOverlayState.set(id + 1);
            } else {
                featuresOverlayState.set(1);
            }
        }, 5000);
        return currentBars;
    });
}