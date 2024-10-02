"use client";

import handleImageSource from "./handleImageSource";
import "./toast-style.css";

const createToast = (text: string, type: string) => {
  // 클라이언트 사이드에서만 DOM 조작 가능
  if (typeof window !== "undefined") {
    const root = document.getElementById("root");

    const toastContainer = document.createElement("div");
    const toastImg = document.createElement("img");
    const toastText = document.createElement("div");
    const toastProgressBar = document.createElement("div");

    toastImg.src = handleImageSource(type);
    toastText.innerText = text;
    toastProgressBar.classList.add("progress-bar");

    toastContainer.classList.add("toast");
    toastContainer.classList.add(type);

    toastContainer.appendChild(toastImg);
    toastContainer.appendChild(toastText);
    toastContainer.appendChild(toastProgressBar);

    toastContainer.addEventListener("click", () => toastContainer.remove());
    root?.parentElement?.appendChild(toastContainer);

    const duration = 2280;
    const interval = 20;
    let currentTime = 0;

    toastProgressBar.style.width = "100%";

    const progressBarAnimation = setInterval(() => {
      const remainingTime = duration - currentTime;
      const progress = (remainingTime / duration) * 100;
      toastProgressBar.style.width = `${progress}%`;
      currentTime += interval;
      if (currentTime >= duration) {
        clearInterval(progressBarAnimation);
        toastContainer.classList.add("out");
        setTimeout(() => {
          toastContainer.remove();
        }, 280);
      }
    }, interval);
  }
};

const toast = {
  success: (message: string) => {
    createToast(message, "success");
  },

  warning: (message: string) => {
    createToast(message, "warning");
  },

  error: (message: string) => {
    createToast(message, "error");
  },
};

export default toast;
