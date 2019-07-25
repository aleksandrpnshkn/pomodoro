import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Btn from "../btn";
import colors from "../../theme/colors";

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    
    background: rgba(0, 0, 0, .1);
`;

const ModalContainer = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    //width: 500px;
    padding: 32px 48px;
    
    background: ${colors.appBg};
    border-radius: 3px;
    box-shadow: 0 2px 3px 0 ${colors.shadow};
`;

const ModalHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

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
                <span className="visuallyhidden">Закрыть</span>
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
