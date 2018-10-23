module.exports = {
    // 根据uid查询对应的用户
    SELECT_USERS_UID:'select * from users where uid=?',
    // users表中插入新用户
    INSERT_USERS_UID:'insert into users (uid) values (?)',
    // users表中更新用户名
    UPDATE_USERS_USERNAME:'update users set user_name=? where uid=?'
}