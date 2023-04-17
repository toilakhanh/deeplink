import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from 'src/store';

export const useCustomSelector = (selector: (state: RootState) => any) => {
  return useSelector(selector);
};

export const useCustomDispatch = () => {
  return useDispatch<AppDispatch>();
};
