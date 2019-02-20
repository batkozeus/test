import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import modalTypes from '../ModalType';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ModalContainer extends React.Component {
  state = {
    modalIsOpen: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps !== prevState) {
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
          overlayClassName="modal fade show"
          bodyOpenClassName="modal-open"
          className="modal-dialog modal-dialog-centered"
        >
          <SpecifiedModal
            closeModal={this.closeModal}
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