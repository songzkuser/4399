<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>头部-有点</title>
<link rel="stylesheet" type="text/css" href="${ctx }/backstage/css/public.css" />
<script type="text/javascript" src="${ctx }/backstage/js/jquery.min.js"></script>
<script type="text/javascript" src="${ctx }/backstage/js/public.js"></script>
</head>

<body>
	<!-- 头部 -->
	<div class="head">
		<div class="headL">
			<img class="headLogo" src="${ctx }/backstage/images/logLOGO.png"/>
		</div>
		<div class="headR">
			<span style="color:#FFF"><a href="login.jsp" target="_blank">【登录】</a></span> 
		</div>
	</div>
</body>
</html>