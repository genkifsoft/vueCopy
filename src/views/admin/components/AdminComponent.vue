<template>
    <div class="wrapper">
        <admin-nav-element></admin-nav-element>
        <admin-slidebar-left-element></admin-slidebar-left-element>

        <router-view></router-view>

        <admin-footer-element></admin-footer-element>
        <admin-slidebar-right-element></admin-slidebar-right-element>
    </div>
</template>
<script>

import "@/assets/plugins/jquery/jquery.min.js"

import "@/assets/plugins/jquery-ui/jquery-ui.min.js";

$.widget.bridge('uibutton', $.ui.button)

// <!-- Bootstrap 4 -->
import "@/assets/plugins/bootstrap/js/bootstrap.bundle.min.js";
// <!-- ChartJS -->
import "@/assets/plugins/chart.js/Chart.min.js";

// <!-- Sparkline -->
import "@/assets/plugins/sparklines/sparkline.js";
// <!-- JQVMap -->
import "@/assets/plugins/jqvmap/jquery.vmap.min.js";

import "@/assets/plugins/jqvmap/maps/jquery.vmap.usa.js";
// <!-- jQuery Knob Chart -->
import "@/assets/plugins/jquery-knob/jquery.knob.min.js";
// <!-- daterangepicker -->
// import "@/assets/plugins/moment/moment.min.js";
import "@/assets/plugins/daterangepicker/daterangepicker.js";
// <!-- Tempusdominus Bootstrap 4 -->
import "@/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js";
// <!-- Summernote -->
import "@/assets/plugins/summernote/summernote-bs4.min.js";
// <!-- overlayScrollbars -->
import "@/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
// <!-- AdminLTE App -->
import "@/assets/dist/js/adminlte.js";
// <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
import "@/assets/dist/js/pages/dashboard.js";
// <!-- AdminLTE for demo purposes -->
import "@/assets/dist/js/demo.js";

import AdminFooterElement from './footer';
import AdminSlidebarLeft from './slidebar-left';
import AdminSlidebarRight from './slidebar-right';
import AdminNavElement from './nav';

export default {
    name: 'AdminComponent',
    data() {
        return {
            title: 'AdminComponent'
        };
    },
    components: {
        'admin-nav-element': AdminNavElement,
        'admin-slidebar-left-element': AdminSlidebarLeft,
        'admin-slidebar-right-element': AdminSlidebarRight,
        'admin-footer-element': AdminFooterElement,
    },
    methods: {

    }
};
</script>
