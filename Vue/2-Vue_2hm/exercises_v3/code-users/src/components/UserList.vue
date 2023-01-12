<template>
  <div>
    <!-- 按钮 -->
    <el-button type="primary" @click="dialogVisible = true"
      >添加新用户</el-button
    >
    <!-- 对话框 -->
    <el-dialog
      title="添加新用户"
      :visible.sync="dialogVisible"
      width="50%"
      @close="onDialogClosed"
    >
      <!-- 添加用户表单 -->
      <el-form
        :model="form"
        label-width="80px"
        :rules="formRules"
        ref="myaddForm"
      >
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄" prop="age">
          <el-input v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="用户头衔" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onAddNewUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 用户表格 -->
    <el-table :data="userList" border stripe height="250">
      <!-- 索引列 -->
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="position" label="头衔"> </el-table-column>
      <el-table-column label="创建时间">
        <template #default="scope">
          {{ scope.row.addtime | dateFormat }}</template
        >
      </el-table-column>

      <el-table-column label="操作">
        <template v-slot:default="{ row }">
          <router-link :to="'/users/' + row.id">详情</router-link>&nbsp;
          <a href="#" @click.prevent="onRemove(row.id)">删除</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    //声明校验年龄的函数
    let checkAge = (rule, value, callback) => {
      if (!Number.isInteger(value)) return callback(new Error('请填写整数'))
      if (value > 100 || value < 1) {
        return callback(new Error('年龄必须在1-100之间'))
      }
      callback()
    }
    return {
      userList: [],
      dialogVisible: false,
      //要采集的用户的信息对象
      form: {
        name: '',
        age: '',
        position: ''
      },
      formRules: {
        name: [
          { required: true, message: '姓名是必填项', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        age: [
          {
            required: true,
            message: '年龄是必填项',
            trigger: 'blur'
          },
          {
            validator: checkAge,
            trigger: 'blur'
          }
        ],
        position: [
          { required: true, message: '头衔是必填项', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get('/api/users')
      if (res.status !== 0) return console.log('请求失败')
      this.userList = res.data
      // console.log(this.userList)
    },

    onDialogClosed() {
      //拿到Form表单的引用
      this.$refs.myaddForm.resetFields()
    },
    onAddNewUser() {
      this.$refs.myaddForm.validate(async (valid) => {
        if (!valid) return
        //执行添加的业务处理
        const { data: res } = await this.$http.post('/api/users', this.form)
        console.log(res)
        if (res.status !== 0) return this.$message.error('添加失败')
        // console.log('添加成功！')
        this.$message.success('添加成功！')
        this.dialogVisible = false
        this.getUserList()
      })
    },
    async onRemove(id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ) /* .then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }) */
        .catch((err) => err)
      /* () => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        }) */
      // console.log(confirmResult)
      if (confirmResult !== 'confirm') return this.$message.info('取消了删除！')
      const { data: res } = await this.$http.delete('/api/users/' + id)
      if (res.status !== 0) return this.$message.error('删除失败')
      this.$message.success('删除成功！')
      this.getUserList()
    }
  }
}
</script>

<style lang="less" scoped>
.el-table {
  margin-top: 15px;
}
</style>
