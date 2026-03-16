function init(indicator) {
  document.body.appendChild(indicator);

  function update() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const percent = (scrollTop / scrollHeight) * 100;

    indicator.style.width = percent + "%";
  }

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });

      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll);

  return {
    destroy() {
      window.removeEventListener("scroll", onScroll);
      indicator.remove();
    },
    element: indicator
  };
}

export default function createScrollIndicator(options = {}) {
  const {
    color = "#0073aa",
    height = "4px",
    zIndex = 9999,
    position = "top",
    transition = "width 0.1s ease-out"
  } = options;

  const indicator = document.createElement("div");

  indicator.style.position = "fixed";
  indicator.style.left = "0";
  indicator.style.width = "0%";
  indicator.style.height = height;
  indicator.style.background = color;
  indicator.style.zIndex = zIndex;
  indicator.style.transition = transition;

  if (position === "bottom") {
    indicator.style.bottom = "0";
  } else {
    indicator.style.top = "0";
  }

  if (document.body) {
    return init(indicator);
  }

  window.addEventListener("DOMContentLoaded", () => init(indicator));
}