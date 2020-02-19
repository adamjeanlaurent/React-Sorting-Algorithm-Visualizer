/* eslint-disable */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

export function Header(props) {
    return (
        <nav
            className="navbar navbar-light navbar-expand-lg "
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <a className="navbar-brand">Sorting Algo Visualizer</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={props.bubbleSort}
                        >
                            Bubble Sort
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-primary">
                            Insertion Sort
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-warning">
                            Merge Sort
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-danger">
                            Quick Sort
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={props.randomize}
                        >
                            Randomize
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
