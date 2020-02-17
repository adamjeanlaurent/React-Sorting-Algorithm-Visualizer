import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

export function Header() {
    return (
        <nav
            class="navbar navbar-light navbar-expand-lg "
            style={{ backgroundColor: "#e3f2fd" }}
        >
            <a class="navbar-brand" href="#">
                Sorting Algo Visualizer
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <button type="button" class="btn btn-success">
                            Bubble Sort
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-primary">
                            Insertion Sort
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-warning">
                            Merge Sort
                        </button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-danger">
                            Quick Sort
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
