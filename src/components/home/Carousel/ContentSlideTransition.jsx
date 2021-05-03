import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const timeout = 350;

const TransitionGroupStyled = styled(TransitionGroup)`
  position: relative;

  .fade-enter-active {
    z-index: 1;
  }

  .fade-enter-active,
  .fade-exit-active {
    transition: all ${timeout}ms ease-in-out;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .slide-enter-active {
    z-index: 1;
  }

  .slide-enter-active,
  .slide-exit-active {
    transition: all ${timeout}ms ease-in-out;
  }
`;

const ContentSlideTransition = ({ children, id }) => (
  <TransitionGroupStyled>
    <CSSTransition
      classNames="fade"
      key={id}
      timeout={{
        enter: timeout,
        exit: timeout,
      }}
    >
      {children}
    </CSSTransition>
  </TransitionGroupStyled>
);

ContentSlideTransition.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
};

export default ContentSlideTransition;
