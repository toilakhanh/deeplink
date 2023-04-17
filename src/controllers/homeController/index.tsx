import React from 'react';
import {useHome} from '../../hooks';
import {HomeView} from '../../views';

const HomeController = () => {
  const {showModalStatus, _openModal, _closeModal, _openImageGallery} =
    useHome();
  return (
    <HomeView
      showModalStatus={showModalStatus}
      _openModal={_openModal}
      _closeModal={_closeModal}
      _openImageGallery={_openImageGallery}
    />
  );
};

export default HomeController;
