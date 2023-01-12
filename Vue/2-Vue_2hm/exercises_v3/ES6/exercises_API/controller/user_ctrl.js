import db from '../db/index.js'

export async function getAllUser(req, res) {
  const [rows] = await db.query('select id, username, nickname from ev_users')
  // console.log(rows)
  res.send({
    status: 0,
    message: '获取用户列表数据成功！',
    data: rows
  })
}
// getAllUser()
