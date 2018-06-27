import './styles/index.less';
import BaseSearch from './components/base-search';
import BtnLeftGroup from './components/btn-left-group';
import BtnRightGroup from './components/btn-right-group';

const FHUi = {
  BaseSearch,
  BtnLeftGroup,
  BtnRightGroup,
};

const install = (Vue) => {
  Object.keys(FHUi).forEach((key) => {
    Vue.component(key, FHUi[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const Obj = Object.assign(FHUi, { install });

export default Obj;
