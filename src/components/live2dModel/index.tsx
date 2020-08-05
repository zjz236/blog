import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import live2dJSString from './live2d';
import { history } from '@@/core/history';
import './index.less';

const Live2dModel = (props: any) => {
  const model1 =
    'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-haruto/assets/haruto.model.json';
  const model2 =
    'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json';
  const [isLoaded, setIsLoaded] = useState(true);
  const [route, setRoute] = useState(history.location);
  const [style, setStyle] = useState({
    width: 280,
    height: 250,
  });
  useEffect(() => {
    initLive2d();
    history.listen(val => {
      console.log(route.pathname, val.pathname);
      if (route.pathname !== val.pathname) {
        initLive2d();
      }
      setRoute(route);
    });
  }, []);
  const initLive2d = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
      ? true
      : false;
    if (isMobile) {
      setIsLoaded(false);
      return console.log('mobile do not load model');
    }
    // @ts-ignore
    if (!window.loadlive2d) {
      const script = document.createElement('script');
      script.innerHTML = live2dJSString;
      document.body.appendChild(script);
    }
    setStyle({
      width: (150 / 1424) * document.body.clientWidth,
      height: ((150 / 1424) * document.body.clientWidth) / 0.8,
    });
    setTimeout(() => {
      // @ts-ignore
      window.loadlive2d('live2d-model', Math.random() > 0.5 ? model1 : model2);
    });
  };
  return (
    <canvas
      style={{ display: isLoaded ? 'block' : 'none' }}
      className="live2d-model"
      id="live2d-model"
      height={style.height}
      width={style.width}
    />
  );
};
const live2dContainer = document.createElement('div');
live2dContainer.className = 'live2d-container';
ReactDOM.render(<Live2dModel />, live2dContainer);

document.body.prepend(live2dContainer);
