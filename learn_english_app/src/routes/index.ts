import About from '@pages/About/index.vue';
import Admin from '@pages/Admin/index.vue';
import Home from '@pages/Home/index.vue';
import Login from '@pages/Login/index.vue';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/", component: Home,

	},
	{
		path: "/about", component: About
	},
	{
		path: "/parts",
		component: About,
		children: [
			{
				path: "about/:id", component: About
			}
		]
	},
	{
		path: "/login", component: Login
	}, {
		path: "/admin", component: Admin
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router