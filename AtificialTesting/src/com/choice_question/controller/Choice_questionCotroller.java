package com.choice_question.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.choice_question.service.Choice_questionServiceImpl;
import com.entity.Page;

@Controller
@RequestMapping("Choice")
public class Choice_questionCotroller {
	@Resource
	@Autowired
	private Choice_questionServiceImpl choice_questionServiceImpl;
	
	@RequestMapping(value = "/showAll")
    public String findAllCourse(HttpServletRequest request,
            HttpServletResponse response, ModelMap modelMap) {
		String pageNo=request.getParameter("pageNo");
		if(pageNo==null) {
			pageNo = "1";
		}
		Page page = this.choice_questionServiceImpl.queryForPage(Integer.valueOf(pageNo), 10);
		request.setAttribute("c_page", page);
		modelMap.put("c_metodname", "showAll");
        return "test";
    }
	@RequestMapping(value = "/jschuan")
    public String findAllCourse2(HttpServletRequest request,
            HttpServletResponse response, ModelMap modelMap) {
		String pageNo=request.getParameter("test");
		if(pageNo.equals("")&pageNo==null) {
			System.out.println("kong");
		}
		System.out.println(pageNo);
        return "jschuandi";
    }
	@RequestMapping(value="/qwe")
	public void qwe(HttpServletRequest request,
            HttpServletResponse response, ModelMap modelMap) {
		String txt = request.getParameter("id");
		HttpSession session = request.getSession();
		session.setAttribute("txt", txt);
		String str = (String)session.getAttribute("t");
	    str = str + " " + txt;
		System.out.println(str);
	}
}
