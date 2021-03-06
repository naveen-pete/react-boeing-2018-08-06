import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return this.props.open ? (
      <div>
        <div className="modal-background" />
        <div role="dialog" className="modal-dialog">
          <header>
            <span>{this.props.header}</span>
            <button
              onClick={() => this.props.onClose()}
              type="button"
              aria-label="close"
            >
              CLOSE
            </button>
          </header>
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
