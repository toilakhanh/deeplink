import React from 'react';
import {useLogin} from 'src/hooks';
import {LoginView} from 'src/views';

const LoginController = () => {
  const {yBottomView, heightImage, sizeIcon, opacityImage, _login, loading} =
    useLogin();
  return (
    <LoginView
      yBottomView={yBottomView}
      heightImage={heightImage}
      sizeIcon={sizeIcon}
      opacityImage={opacityImage}
      _login={_login}
      loading={loading}
    />
  );
};

export default LoginController;
