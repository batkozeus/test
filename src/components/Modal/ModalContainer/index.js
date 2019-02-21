import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import modalTypes from '../ModalType';
import cx from 'classnames'
import globalStyles from 'assets/global-styles/bootstrap.min.module.css';

class ModalContainer extends React.Component {
  state = {
    modalIsOpen: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modalProps.open !== prevState.modalIsOpen) {
      return {modalIsOpen: nextProps.modalProps.open};
    }
    else return null;
  }
  
  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }

    const SpecifiedModal = modalTypes[this.props.modalType]

    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          overlayClassName={cx(globalStyles.fade, globalStyles.show)}
          bodyOpenClassName={globalStyles['modal-open']}
          className={cx(globalStyles['modal-dialog'], globalStyles['modal-dialog-centered'])}
        >
          <SpecifiedModal
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.modal
})

export default connect(mapStateToProps, null)(ModalContainer)