/* eslint-disable import/extensions */
import { Application } from "@hotwired/stimulus";
import EventListenerController from "./controllers/event_listener_controller.js";

window.Stimulus = Application.start();
Stimulus.register("event-listener", EventListenerController);
