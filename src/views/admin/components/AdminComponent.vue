<template>
    <div class="wrapper">
        <admin-nav-element></admin-nav-element>
        <admin-slidebar-left-element></admin-slidebar-left-element>

        <router-view></router-view>

        <admin-footer-element></admin-footer-element>
        <admin-slidebar-right-element></admin-slidebar-right-element>
    </div>
</template>

<style>
  @import 'public/plugins/fontawesome-free/css/all.min.css';

</style>

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
