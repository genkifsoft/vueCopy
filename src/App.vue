<template>
  	<div id="app">
    	<div v-if="!$auth.check()">
			<header-element></header-element>
			<footer-element></footer-element>
		</div>
		
		<div class="wrapper" v-if="$auth.check()">
			<admin-nav-element></admin-nav-element>
			<admin-slidebar-left-element></admin-slidebar-left-element>

			<router-view></router-view>

			<admin-footer-element></admin-footer-element>
			<admin-slidebar-right-element></admin-slidebar-right-element>
		</div>
 	</div>
</template>

<script>

// import HeaderElement from "./view/component/header";
import AdminNavElement from "../src/views/admin/components/nav";
import AdminSlidebarLeftElement from "../src/views/admin/components/slidebar-left";
import AdminSlidebarRightElement from "../src/views/admin/components/slidebar-right";
import AdminFooterElement from "../src/views/admin/components/footer";

import HeaderElement from "../src/views/user/components/header";
import FooterElement from "../src/views/user/components/footer";

// import LoginElement from "../src/views/login";

import $ from 'jquery'

export default {
	name: 'App',
	components: {
		"admin-slidebar-left-element": AdminSlidebarLeftElement,
		"admin-slidebar-right-element": AdminSlidebarRightElement,
		"admin-nav-element": AdminNavElement,
		"admin-footer-element": AdminFooterElement,

		"header-element": HeaderElement,
		"footer-element": FooterElement,
		// "login-element": LoginElement,
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			page_login: false,
			is_admin: false,
		}
	},
	created() {
		
	},
	mounted() {
		this.page_login = (this._route.name == 'login');
		this.is_admin = (this._route.link.match(/admin/g) != null);

		if (this.page_login) {
			this.addClassInBody();
		} else {
			this.removeClassInBody();
		}
	},
	methods: {
		addClassInBody() {
			$("body").addClass("login-page");
		},
		removeClassInBody() {
			if ($("body").hasClass("login-page")) {
				$("body").removeClass("login-page");	
			}
			if ($("body").hasClass("login-page")) {
				$("body").removeClass("login-page");
			}
        }
	}
}
