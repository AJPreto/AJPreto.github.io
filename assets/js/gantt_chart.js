function createChart(e) {
  const chart = document.querySelector(".chart-wrapper");
  const days = document.querySelectorAll(".chart-values li");
  const tasks = document.querySelectorAll(".chart-bars li");
  const totalUnits = days.length;
  const startYear = 2012;
  const isRecentFirst = chart && chart.dataset.order === "recent-first";

  function parsePoint(value, isEnd) {
    const normalized = value.trim();

    if (normalized === "Present") {
      return isEnd ? totalUnits : totalUnits - 1;
    }

    const numericValue = Number(normalized);

    if (Number.isNaN(numericValue)) {
      return null;
    }

    const offset = numericValue - startYear;

    if (isEnd && Number.isInteger(numericValue)) {
      return offset + 1;
    }

    return offset;
  }

  tasks.forEach(el => {
    const [startValue, endValue] = el.dataset.duration.split("-");
    const start = parsePoint(startValue, false);
    const end = parsePoint(endValue, true);

    if (start === null || end === null || end <= start) {
      return;
    }

    const left = isRecentFirst ? totalUnits - end : start;
    const width = end - start;

    el.style.setProperty("--bar-left", `${(left / totalUnits) * 100}%`);
    el.style.setProperty("--bar-width", `${(width / totalUnits) * 100}%`);
    el.style.setProperty("--bar-color", el.dataset.color || "#3aa687");

    if (!e || e.type === "load") {
      el.style.opacity = 1;
    }
  });
}

window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);
