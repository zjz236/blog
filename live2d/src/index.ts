// ref:
// - https://umijs.org/plugins/api
import { IApi } from '@umijs/types';
import { join } from 'path';

export default function(api: IApi) {
  api.logger.info('use plugin');

  api.modifyHTML($ => {
    $('body')
      .prepend(`<div class="cat-container" id="catContainer" style="position: fixed;right: 50px;bottom:100px;color: #00adb5;">
                                <canvas id="catCanvas" style="position: fixed;opacity: 0.9;right: 0px;bottom: -20px;z-index:99999;pointer-events: none;">
                              </div>`);
    return $;
  });

  api.addEntryImports(() => {
    return {
      source: join(__dirname, './cat.ts'),
    };
  });
}
