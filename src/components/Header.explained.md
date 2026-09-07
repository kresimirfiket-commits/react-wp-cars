# Header.js — Line-by-Line Explanation

## Imports (lines 1-6)

- **Line 1**: `LoadingBar` from `react-top-loading-bar` — a component that renders a thin progress bar (like the one at the top of YouTube pages) typically shown during route/page transitions.
- **Line 2**: `useLoading` — a custom hook from the app's own `LoadingContext`, used to access shared loading-bar state/controls across components.
- **Line 3**: React's `useState`, `useEffect`, `useRef` hooks. *(See deep dive below.)*
- **Line 4**: `Link` from `react-router` — renders `<a>` tags that navigate client-side without a full page reload.
- **Line 5**: Imports the CSS file for this component (side-effect import — just applies styles globally, no JS binding).
- **Line 6**: `useTheme` — a custom hook from `ThemeContext` for reading/toggling light/dark mode.

## Component setup (lines 8-13)

- **Line 8**: Declares the `Header` function component.
- **Line 9**: Pulls `loadingBarRef` out of the loading context — this ref gets attached to the `LoadingBar` component (line 102) so other parts of the app can call `.continuousStart()`/`.complete()` on it to control the bar.
- **Line 10**: Pulls current `theme` value (`'dark'` or something else) and a `toggleTheme` function from the theme context.
- **Line 11**: `isUnseen` boolean state — when `true`, the header is hidden/scrolled-away (styled via the `unseen` CSS class on line 55).
- **Line 12**: `isMenuOpenref` — a ref (not state, so updating it doesn't trigger re-render) tracking whether the Bootstrap mobile nav menu is currently open.
- **Line 13**: `navRef` — a ref that will point to the actual collapsible nav `<div>` DOM element (attached at line 73), so we can listen to Bootstrap's native events on it.

## Effect #1: Track Bootstrap menu open/close (lines 15-35)

- **Line 15**: Comment explaining the effect's purpose.
- **Line 16**: Runs once after mount (empty dependency array at line 35).
- **Line 17-18**: Grabs the actual DOM node from `navRef`; bails out if it isn't attached yet (defensive guard).
- **Line 20-23**: `handleShow` — called when Bootstrap's collapse menu starts opening. Sets the "menu open" ref to `true`, and forces the header to become visible (`setIsUnseen(false)`) so the menu isn't hidden behind a scrolled-away header.
- **Line 24-26**: `handleHide` — called after Bootstrap's collapse menu finishes closing; marks the menu as closed.
- **Line 28-29**: Subscribes to Bootstrap's own custom DOM events (`show.bs.collapse` fires when the collapse starts opening, `hidden.bs.collapse` fires after it's fully closed) directly on the nav element — this is how the component hooks into Bootstrap's (non-React) JS behavior.
- **Line 31-34**: Cleanup function — removes both listeners when the component unmounts (or before the effect re-runs, though here it never will since deps are `[]`).

## Effect #2: Hide header on scroll down, show on scroll up (lines 37-52)

- **Line 37**: Comment describing the scroll behavior.
- **Line 39**: Captures the initial vertical scroll position into a local variable (not state — doesn't need to trigger renders, just needs to persist between scroll events via closure).
- **Line 40**: Defines the scroll handler.
- **Line 41**: If the mobile menu is currently open, do nothing — prevents the header from disappearing while the user is interacting with the open menu.
- **Line 42-45**: On wider screens (>768px, i.e., desktop/tablet where the nav isn't collapsed), always keep the header visible and exit early — the hide-on-scroll behavior is mobile-only.
- **Line 46**: Reads the current scroll position.
- **Line 47**: Sets `isUnseen` to `true` (hide header) if the previous scroll position was less than the current one (i.e., user scrolled *down*); `false` (show header) if scrolling *up*.
- **Line 48**: Updates `prevScrollpos` for the next scroll event.
- **Line 50**: Attaches the scroll listener to the window.
- **Line 51**: Cleanup — removes the scroll listener on unmount.
- **Line 52**: Empty dependency array — effect runs once on mount only.

## Render (lines 54-105)

- **Line 55**: The `<header>` element gets the CSS class `unseen` when `isUnseen` is true (this class presumably translates/hides the header via CSS, e.g. `transform: translateY(-100%)`), otherwise no class.
- **Line 56**: Bootstrap navbar wrapper with responsive collapse behavior (`navbar-expand-lg`: collapses to hamburger menu below the `lg` breakpoint).
- **Line 57**: Bootstrap's full-width fluid container for the navbar content.
- **Line 58-61**: The brand/logo — a `Link` to the home route (`/`) wrapping an inline SVG car icon (a `bi-car-front-fill` Bootstrap Icon, hardcoded as raw SVG markup with a single fill path).
- **Line 62-72**: The hamburger toggle button, shown only on small screens:
  - **Line 65-66**: `data-bs-toggle="collapse"` and `data-bs-target="#navbarNav"` are Bootstrap's (non-React, plain JS/data-attribute driven) way of wiring this button to expand/collapse the element with id `navbarNav` (defined at line 73).
  - **Line 67-69**: Accessibility attributes — `aria-controls` links button to the controlled panel, `aria-expanded` reflects collapsed state, `aria-label` gives screen readers a name for the icon-only button.
  - **Line 71**: The three-line hamburger icon itself is drawn via CSS on this empty `<span>` (Bootstrap's `navbar-toggler-icon` class).
- **Line 73**: The collapsible nav content. Note: `navRef` is attached here — this is the same DOM node Bootstrap fires `show.bs.collapse`/`hidden.bs.collapse` on, which is what Effect #1 listens to. `id="navbarNav"` matches the toggle button's target.
- **Line 74**: The nav links list — `ms-auto` pushes it to the right (Bootstrap margin-start auto), `gap-lg-5` adds spacing between items on large screens.
- **Lines 75-77, 78-81, 82-84, 85-87**: Four standard nav items — Home, Catalog, About, Contact — each an `<li>` wrapping a React Router `Link` to its route.
- **Line 88-97**: A fifth nav item that's a plain `<button>` (not a route link) for toggling the theme:
  - **Line 92**: `onClick={toggleTheme}` calls the context function from line 10 to flip light/dark mode.
  - **Line 93**: Accessibility label since the button's text content changes.
  - **Line 95**: Button label is conditional — shows "Light Mode" when the current theme is `'dark'` (i.e., tells the user what clicking will switch *to*), otherwise "Dark Mode".
- **Line 102**: Renders the `LoadingBar` component outside the `<nav>` but inside `<header>`. Its `ref` is the shared `loadingBarRef` from context (so other components can trigger it), colored via a CSS variable `--green`, 3px tall, no shadow, and given a custom container class for styling/positioning.
- **Line 107**: Default export of the component.

**Summary**: `Header.js` is a sticky/collapsible site header combining a React Router nav, a Bootstrap-driven mobile hamburger menu (tracked via native Bootstrap events rather than React state), scroll-direction-based auto-hide behavior on mobile, a dark/light theme toggle, and a shared page-loading progress bar.

---

# Deep Dive: Line 3

```js
import { useState, useEffect, useRef } from 'react'
```

This is a **named import** — it pulls three specific functions (React "hooks") out of the `react` package, using JavaScript's ES module destructuring-style import syntax. React exports many things (`useState`, `useEffect`, `useRef`, `useContext`, `Component`, `Fragment`, etc.) as named exports from the `'react'` module, and this line cherry-picks only the three this file actually uses — nothing else gets bundled in.

### What each one is, and how it's used in *this* file

**`useState`**
- A hook that gives a function component memory that persists across re-renders and, when updated, *triggers* a re-render.
- Signature: `const [value, setValue] = useState(initialValue)`. Calling `useState(false)` returns a two-element array: the current value, and a setter function. React tracks this state internally, keyed to this component instance and to the *order* in which `useState`/other hooks are called (this is why hooks can't be called conditionally or inside loops — React relies on call order to know which state belongs to which `useState` call across renders).
- Used at line 11: `const [isUnseen, setIsUnseen] = useState(false)`. Every time `setIsUnseen(...)` is called (in the scroll handler or the Bootstrap `show` handler), React schedules a re-render of `Header`, and on that re-render `isUnseen` reflects the new value — which is what flips the `unseen` CSS class on the `<header>` element (line 55).

**`useEffect`**
- A hook for running "side effects" — code that reaches outside the pure render logic, like subscribing to events, timers, or manually touching the DOM/browser APIs. It runs *after* the component renders and commits to the DOM.
- Signature: `useEffect(setupFn, dependencyArray)`. `setupFn` can optionally return a cleanup function, which React calls before the effect runs again or when the component unmounts.
- The dependency array controls *when* it re-runs: `[]` (empty, as used both times here at lines 35 and 52) means "run once after the first render, clean up once on unmount, never re-run."
- Used twice:
  - Lines 16-35: subscribes to Bootstrap's custom `show.bs.collapse`/`hidden.bs.collapse` DOM events on mount, unsubscribes on unmount.
  - Lines 38-52: subscribes to the window's `scroll` event on mount, unsubscribes on unmount.
- Without `useEffect`, you couldn't safely call `addEventListener` during render — it would re-subscribe on every render and leak listeners. `useEffect` guarantees it happens once, in a controlled lifecycle spot, with matching cleanup.

**`useRef`**
- A hook that creates a mutable container object shaped like `{ current: value }` that **persists across re-renders but does not cause a re-render when mutated**. It's the escape hatch for values a component needs to remember without them being part of the rendering output.
- Two roles it plays here:
  1. **DOM reference**: `const navRef = useRef(null)` (line 13) starts as `null`. When React renders the JSX at line 73 (`<div ... ref={navRef}>`), React automatically sets `navRef.current` to the actual DOM node once it's mounted. That's how line 17 (`const navEl = navRef.current`) gets a real element to call `addEventListener` on — there's no other clean way in React to reach into the raw DOM.
  2. **Mutable instance variable**: `const isMenuOpenref = useRef(false)` (line 12) is *not* attached to any JSX element — it's just used as a plain mutable flag (line 21, 25, 41) that needs to survive across renders and across different closures (the Bootstrap event handlers vs. the scroll handler) but must **not** trigger a re-render every time the menu opens/closes. If this were `useState` instead, every menu open/close would cause an extra unnecessary re-render of `Header`; `useRef` avoids that because reading/writing `.current` is silent to React.

### Why this distinction (state vs. ref) matters here
This file is actually a good illustration of the `useState`-vs-`useRef` choice: `isUnseen` needs to be state because changing it must visually update the header (add/remove the `unseen` class), so it needs to trigger a re-render. `isMenuOpenref` and `navRef`, by contrast, are read inside event-handler closures purely to make *decisions* (skip hiding the header, attach listeners) — they never need to appear in the rendered JSX themselves, so a ref (no re-render) is the right, cheaper tool.
