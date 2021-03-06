package com.login.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.login.dao.TeacherRegistDaoImpl;

@Service
@Transactional(readOnly=true)
public class TeacherRegistServiceImpl {
	@Resource
	private TeacherRegistDaoImpl teacherRegistDaoImpl;
	public void save(int id,String passWord,String nickName) {
		this.teacherRegistDaoImpl.registuser(id, passWord, nickName);
	}
}
