<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="foo">
        <el-input v-model="ruleForm.foo" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul></ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Provide() ruleForm = {
    foo: ''
  };
  @Provide() rules = {
    foo: [{ required: true, message: '请选择活动区域', trigger: 'blur' }]
  };
  created() {
    console.log(2);
    let arr_aa: string = '1';
    let arr: any[] = [1, 2, 3];
    console.log(1);
    if (arr_aa) {
      console.log(true);
    }
    let str = '1';
    let obj = { a: 1 };
    console.log(1);
    const resolve = (dir: any) => {};

    let url = 'http://120.79.57.19:3335/getDiscList';
    this.$http.get(url).then((res: any) => {
      console.log(res);
    });
    this.$router.push('/abc');
  }
  submitForm() {
    console.log(1);
    (this.$refs.ruleForm as any).validate((valid: boolean) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
// import Vue from 'vue'
// export default Vue.extend({
//   name: "HelloWorld",
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       foo: "123"
//     };
//   },
//   created() {
//     let str: string = "123";
//     console.log(1);
//     // let abc_as = 1
//   }
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
