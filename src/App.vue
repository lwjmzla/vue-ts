<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
	// 声明周期钩子
	mounted () {
	}
	created() {
		// function gen_func1<T>(arg: T): T {
    // 	return arg;
		// }
		// let str = gen_func1<number>(4);
		// console.log(str)

		// function array_func<T>(arg: Array<T>): Array<T> {
		// 		console.log(arg.length);
		// 		return arg;
		// }
		// array_func([1])

		class Student {
				fullName: string;
				constructor(public firstName: any, public middleInitial: any, public lastName: any) {
						this.fullName = firstName + " " + middleInitial + " " + lastName;
				}
		}

		interface Person {
				firstName: string;
				lastName: string;
		}

		function greeter(person : Person) {
				return "Hello, " + person.firstName + " " + person.lastName;
		}

		let user = new Student("Jane", "M.", "User");

		document.body.innerHTML = greeter(user);

		interface LabelledValue {
			label: string;
		}

		function printLabel(labelledObj: LabelledValue) {
			console.log(labelledObj.label);
		}

		let myObj = { size: 10, label: "Size 10 Object" };
		printLabel(myObj);

		let a: number[] = [1, 2, 3, 4];
		let ro: ReadonlyArray<number> = a;
		a.push(1)

		let b:any[] = a as any[]
		b.push('1')
		
		interface SearchFunc {
			(source: string, subString: string): boolean;
		}
		let mySearch: SearchFunc;
		mySearch = function(a: string, b: string) {
			let result = a.search(b);
			return result > -1;
		}
		console.log(mySearch('abc','c'))

		interface StringArray {
			[index: number]: string;
		}

		let myArray: StringArray;
		myArray = ["Bob", "Fred"];
	}
}
</script>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
