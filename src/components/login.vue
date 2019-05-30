<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position='top'
    >
      <el-form-item label="密码" >
        <el-input type="password" v-model="ruleForm" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" >
        <el-input type="password" v-model="ruleForm" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>
