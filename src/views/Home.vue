<template>
  <div class="home">
	<img alt="Vue logo" src="../assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
	HelloWorld
  }
})
export default class Home extends Vue {
  // 声明周期钩子
  mounted () {
  }
  created() {
		class Star {
			public name: string = 'pr';
			protected age: number = 18;
			private weight: number = 90;
			readonly gender: string = '女';
			public constructor(name: string, age: number, weight: number, gender: string) {
				this.name = name;
				this.age = age;
				this.weight = weight;
				this.gender = gender;
			}
		}

		class ChinaStar extends Star {
			constructor(name: string, age: number, weight: number, gender: string) {
				super(name, age, weight, gender);
			}

			showName(){
				return `我是${this.name}`
			}

			showAge(){
				return `我实际年龄${this.age}`
			}


			showGender(){
				return `我的性别${this.gender}`
			}
		}

		let pr = new ChinaStar('pr', 30, 120, '男');
		pr.name = '江湖再见'; // !public  所修饰的属性和方法是公共的，任意使用；
		//pr.age = 18; // !protected  所修饰的属性和方法是受保护的，仅供类自身和子类使用；
		//pr.weight = 100; // !private 所修饰的属性和方法是私有的，仅供类自身使用；
		//pr.gender = '女'; // !readonly 所修饰的属性是只读的，必须在声明时或构造函数里被初始化；

		// console.log(pr.name);
		// //console.log(pr.age);
		// //console.log(pr.weight);
		// console.log(pr.gender);

		// console.log(pr.showName());
		// console.log(pr.showAge());
		// console.log(pr.showGender());

  }
}
</script>
