import React from "react";
import Home1 from "./Layouts/Home/Home1";
import Home2 from "./Layouts/Home/Home2";
export default function Home() {
  return (
    <div class="page-wrapper">
      <div id="ht-preloader">
        <div class="loader clear-loader">
          <div class="loader-text">Loading</div>
          <div class="loader-dots">
          </div>
        </div>
      </div>
      <Home1 />
      <Home2 />
    </div>
  );
}
