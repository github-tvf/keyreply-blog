import React from 'react';
import Modal from 'react-modal';
import Scrollbar from 'react-scrollbars-custom';
import config from '../config/app';

Modal.setAppElement('#root');

const Popup = ({
  isOpen = false,
  children = null,
  className = '',
  title = '',
  scrollbar = true,
  hideCloseButton = false,
  theme = 'default',
  outsideClose = true,
  onClose = () => {},
}) => {
  const afterOpenModal = () => {};
  const selfClose = (e) => {
    e.preventDefault();
    onClose(e);
  };

  const handleClickOutside = (e) => {
    if (outsideClose) {
      onClose(e);
    }
  }

  const body = (
    <>
      {title.length > 0 && <h2 className="modal-title">{title}</h2>}
      {children && <div className="modal-content">{children}</div>}
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={handleClickOutside}
      className={`modal-select modal-theme-${theme} ${className}`}
    >
      <div className="modal-wrapper">
        <div className="modal-body">
          {scrollbar ? (
            <Scrollbar noScrollX={true}>{body}</Scrollbar>
          ) : (
            <>{body}</>
          )}
        </div>
        {!hideCloseButton && (
          <a onClick={e => selfClose(e)} className="close" data-dismiss="modal" aria-label="Close" title="Đóng">
            <img src={`${config.cdn}/img/icon-close.png`} alt="Đóng" />
          </a>
        )}
      </div>
    </Modal>
  )
};

export default Popup;
