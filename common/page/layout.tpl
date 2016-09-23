<!DOCTYPE html>
{%* 使用html插件替换普通html标签，同时注册JS组件化库 *%}
{%html framework="common:static/mod.js" class="expanded"%}
    {%* 使用head插件替换head标签，主要为控制加载同步静态资源使用 *%}
	{%head%}
	    <meta charset="utf-8"/>
    	<title>FISP DEMO</title>
	    <link rel="stylesheet" type="text/css" href="/static/lib/css/bootstrap.css">
	    <script type="text/javascript" src="/static/lib/js/jquery-1.10.1.js"></script>
    	{%block name="block_head_static"%}{%/block%}
	{%/head%}
	{%* 使用body插件替换body标签，主要为可控制加载JS资源 *%}
	{%body%}
        {%widget name="common:widget/header/header.tpl"%}
		{%block name="content"%}{%/block%}
	{%/body%}
{%/html%}