import React from 'react';
import cx from 'classnames'
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';
import Button from '../../common/Button';

const AlertModal = ({ closeModal, title, message }) => {
  return (
    <div className={globalStyles['modal-content']}>
      <div className={globalStyles['modal-header']}>
        <h5 className={globalStyles['modal-title']}>
          {title}
        </h5>
        <Button
          BtnClass={globalStyles.close}
          label="&times;"
          onClick={closeModal}
        />
      </div>
      <div className={globalStyles['modal-body']}>
        <p>{message}</p>
      </div>
      <div className={globalStyles['modal-footer']}>
        <Button
          BtnClass={cx(globalStyles.btn, globalStyles['btn-secondary'])}
          label="close"
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default AlertModal