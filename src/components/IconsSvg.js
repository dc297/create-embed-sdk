import React from 'react';

export const CodeSnippetSVG = ({ name }) => 
     (
        <svg xmlns="http://www.w3.org/2000/svg" width="358" height="174" viewBox="0 0 358 174">
        <defs>
          <filter id="Rectangle_152034" x="0" y="0" width="358" height="174" filterUnits="userSpaceOnUse">
            <feOffset dy="8" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g id="Foreground_Code" data-name="Foreground Code" transform="translate(-722 -703)">
          <g transform="matrix(1, 0, 0, 1, 722, 703)" filter="url(#Rectangle_152034)" style="mix-blend-mode: hard-light;isolation: isolate">
            <rect id="Rectangle_152034-2" data-name="Rectangle 152034" width="310" height="126" rx="12" transform="translate(24 16)" fill="#fff"/>
          </g>
          <g id="Foreground_Code-2" data-name="Foreground Code" transform="translate(736 709.332)">
            <g id="Rectangle_149606" data-name="Rectangle 149606" transform="translate(10 9.668)" fill="#f8f8f8" stroke="#efefef" stroke-width="2">
              <rect width="310" height="126" rx="12" stroke="none"/>
              <rect x="1" y="1" width="308" height="124" rx="11" fill="none"/>
            </g>
            <text id="_1_2_3_4_5" data-name="1
      2
      3
      4
      5" transform="translate(20 19.668)" fill="#7f8495" font-size="14" font-family="SourceCodePro-Regular, Source Code Pro" opacity="0.5"><tspan x="-8" y="14">1</tspan><tspan x="-8" y="36">2</tspan><tspan x="-8" y="58">3</tspan><tspan x="-8" y="80">4</tspan><tspan x="-8" y="102">5</tspan></text>
            <text id="ccEverywhere.openQuickAction_id:_image-resize_2" data-name="ccEverywhere.openQuickAction(
          {
              id: 'image-resize'
          }
      )" transform="translate(50 19.668)" fill="#7f8495" font-size="14" font-family="SourceCodePro-Regular, Source Code Pro" style="mix-blend-mode: multiply;isolation: isolate"><tspan x="0" y="14">ccEverywhere.</tspan><tspan y="14" fill="#72b7f9">openQuickAction</tspan><tspan y="14">(</tspan><tspan x="0" y="36"></tspan><tspan x="0" y="58">        </tspan><tspan y="58" fill="#ca9ffc">id</tspan><tspan y="58" fill="#72b7f9">:</tspan><tspan y="58" fill="#43c78f">'{name}'<animate attributeName="dx" from="0" to="20" dur="3s" begin="0s" repeatCount="indefinite"/></tspan><tspan x="0" y="80"></tspan><tspan x="0" y="102">)</tspan> </text>
          </g>
        </g>
    </svg>     
)