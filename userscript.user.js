// ==UserScript==
// @name         r/femboy + Astolfo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Overlay to help placing the pixels - the small pixels in the middle of the real pixels show where a pixel should be placed
// @author       Orgiginal script from r/TransPlace Discord: oralekin - script, Ender#5769 - image; Modified image source by: Yuki | ユキ#5381
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/OwO-Yuki-UwU/r_place_r_femboy_astolfo_overlay/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
