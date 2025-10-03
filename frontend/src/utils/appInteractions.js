//
// Shared utilities for minimal interactions from converted static pages.
// Currently kept minimal; pages can import and use helpers as needed.
//

/**
 * PUBLIC_INTERFACE
 * toggleDisplay
 * Utility to toggle display style for an element reference.
 * @param {HTMLElement} el
 * @param {"block"|"none"} state
 */
export function toggleDisplay(el, state) {
  if (!el) return;
  el.style.display = state;
}
