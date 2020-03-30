<template>
    <div class="wrapper">
        <admin-nav-element></admin-nav-element>
        <admin-slidebar-left-element></admin-slidebar-left-element>

        <router-view></router-view>

        <admin-footer-element></admin-footer-element>
        <admin-slidebar-right-element></admin-slidebar-right-element>
    </div>
</template>

<style src="../../../assets/plugins/fontawesome-free/css/all.min.css"></style>
<style href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"></style>
<style src="../../../assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"></style>
<style src="../../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css"></style>
<style src="../../../assets/plugins/jqvmap/jqvmap.min.css"></style>
<style src="../../../assets/dist/css/adminlte.min.css"></style>
<style src="../../../assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"></style>
<style src="../../../assets/plugins/daterangepicker/daterangepicker.css"></style>
<style src="../../../assets/plugins/summernote/summernote-bs4.css"></style>

<script>

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
<script src="../../../assets/plugins/jquery/jquery.min.js"></script>