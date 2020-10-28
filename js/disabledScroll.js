window.disableScroll = function () {

  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbscrollY = window.scrollY;

  document.body.style.cssText = `
  position: fixed;
  overflow: hidden;
  height: 100vh;
  top: ${window.scrollY}px;
  left: 0;
  width: 100%;
  padding-right: ${widthScroll}px;
  `;
} 
window.enableScroll = function () {
  document.body.style.cssText = `position: relative;`;
  window.scroll({top: document.body.dbscrollY})
}