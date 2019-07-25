import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Btn from "../btn";
import { ModalBackground, ModalContainer, ModalHeader } from './styled';

class Modal extends Component {
  state = {
    isActive: false,
  };

  openModal = () => {
    this.setState({
      isActive: true,
    });
  };

  closeModal = () => {
    this.setState({
      isActive: false,
    });
  };

  /**
   * Close modal by click on the background
   */
  bgClickHandler = (e) => {
    if (e.target.id === 'modal-background') {
      this.closeModal();
    }
  };

  render() {
    const { title, children } = this.props;

    // Add to passed trigger element click listener
    const trigger = React.cloneElement(this.props.trigger, {onClick: this.openModal});

    let content;
    if (this.state.isActive) {
      content = (
        <ModalBackground id="modal-background" onClick={this.bgClickHandler}>
          <ModalContainer>
            <ModalHeader>
              <h2>{title}</h2>
              <Btn type="button" onClick={this.closeModal}>
                <i className="fas fa-times"/>
                <span className="visuallyhidden">Close</span>
              </Btn>
            </ModalHeader>
            <div>
              {React.cloneElement(children, {closeModalHandler: this.closeModal})}
            </div>
          </ModalContainer>
        </ModalBackground>
      );
    } else {
      content = null;
    }

    return ( // Show trigger always. Show content if state is active
      <>
        {trigger}
        {content}
      </>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  trigger: PropTypes.element.isRequired, // Button for open the modal
};

export default Modal;
