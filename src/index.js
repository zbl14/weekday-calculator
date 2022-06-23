import { Date } from '../src/js/date.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("form#inputtedDate").submit((event) => {
    event.preventDefault();
    const month = parseInt($("#inputtedMonth").val());
    const day = parseInt($("#inputtedMonth").val());
    const year = parseInt($("#inputtedMonth").val());
    let date = new Date(day, month, year);
    $("#result").html(date.dayOfWeek());
  });
});