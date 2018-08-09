import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入组件
import HeroesList from '../views/heroes/list.vue';
import EquipsList from '../views/equips/list.vue';
import WeaponsList from '../views/weapons/list.vue';
import AddHeroes from '../views/heroes/add.vue';

// 注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
	linkExactActiveClass: 'active',
	// 路由规则
	routes: [
		{ path: '/', redirect: '/heroes' },
		{ name: 'heroes', path: '/heroes', component: HeroesList },
		{ name: 'addheroes', path: '/heroes/add', component: AddHeroes },
		{ name: 'equips', path: '/equips', component: EquipsList },
		{ name: 'weapons', path: '/weapons', component: WeaponsList }
	]
});

// 导出路由组件
export default router;