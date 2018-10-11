import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import anime = require('animejs');
import swal = require('sweetalert2');

interface JQuery {
    $(options ? : any): any;
}

interface Anime {
    anime(options : any): any;
}

interface Swal {
    swal(options : any): any;
}