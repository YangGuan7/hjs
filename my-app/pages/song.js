import React, { useState, useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
export default function song() {
  return (
    <>
      <div data-scroll-container>
        <div data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll>👋</p>
        </div>
        <div data-scroll-section>
            <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">😬</p>
        </div>
    </div>
    </>
  );
}
