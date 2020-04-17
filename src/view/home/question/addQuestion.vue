<template>
  <!-- 
    el-dialog    visible.syna显示        width属性   fullscreen是否全屏，默认不全屏
      slot="title/footer" 重写标题与底部按钮
  -->
  <el-dialog :visible.sync="dialogVisible" :fullscreen="true" class="addQuestion">
    <div slot="title" class="title">新增题库测试</div>
    <el-form :model="form" class="form">
      <el-form-item label="学科" prop="subject">
        <el-select placeholder="请选择学科" v-model="form.subject" class="select">
          <el-option
            v-for="(item, index) in subjectData"
            :key="index"
            :label="item.name"
            :value="item.id"
            v-show="item.status==1"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="阶段" prop="step">
        <el-select placeholder="请选择阶段" v-model="form.step" class="select">
          <el-option v-for="(value,key,index) in stepObj" :key="index" :label="value" :value="+key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="企业" prop="enterprise">
        <el-select placeholder="请选择企业" v-model="form.enterprise" class="select">
          <el-option
            v-for="(item, index) in businessData"
            :key="index"
            :label="item.name"
            :value="item.id"
            v-show="item.status==1"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-cascader v-model="form.city" :options="options" :props="{value:'label'}"></el-cascader>
      </el-form-item>
    </el-form>
    <div slot="footer" class="footer">
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { regionData } from "element-china-area-data";
// import导入的数据不能直接到html里面使用
export default {
  props: ["subjectData", "stepObj", "businessData"],
  data() {
    return {
      dialogVisible: true,
      options: regionData,
      form: {
        subject: "", //学科
        step: "", //阶段
        enterprise: "", //企业
        city: [] //城市
      }
    };
  }
};
</script>
<style lang="less">
.addQuestion {
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
  .title {
    color: #fff;
    padding-left: 15px;
    height: 54px;
    line-height: 54px;
    background-color: rgb(4, 188, 250);
  }
  .footer {
    text-align: center;
  }
  .form {
    width: 832px;
    margin: 0 auto;
    .select {
      width: 300px;
    }
  }
}
</style>