import { history } from 'umi';
import live2dJSString from './live2d';

const blackCat =
  'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json';
const whiteCat =
  'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json';
const initCat = () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? true
    : false;
  if (isMobile) {
    document.getElementById('catContainer').style.display = 'none';
    return console.log('mobile do not load model');
  }
  if (!window.loadlive2d) {
    const script = document.createElement('script');
    script.innerHTML = live2dJSString;
    document.body.appendChild(script);
  }
  let catCanvas = document.getElementById('catCanvas');
  catCanvas.width = (150 / 1424) * document.body.clientWidth;
  catCanvas.height = ((150 / 1424) * document.body.clientWidth) / 0.8;
  setTimeout(() => {
    window.loadlive2d('catCanvas', Math.random() > 0.5 ? blackCat : whiteCat);
  }, 0);
};
console.log(history);
const unlisten = history.listen(val => {
  console.log(val);
  console.log('aaa');
  initCat();
});
unlisten();
initCat();
