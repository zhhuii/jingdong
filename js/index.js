window.onload = function(){
	//按需加载图片
	// var flow = document.getElementsByClassName('flow');
	// window.onscroll = function(){
	// 	var top = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
	// 	//按需加载图片
	// 	for(var i = 0;i < flow.length;i++){
	// 		var ftop = flow[i].offsetTop;
	// 		var img = flow[i].getElementsByTagName('img');
	// 		if(top > ftop - 300){
	// 			for(var j = 0;j < img.length;j++){
	// 				var dizhi = img[j].getAttribute('attr');
	// 				img[j].src = dizhi;
	// 			}
	// 		}
	// 	}
	// }
	//侧导航
	let title = document.getElementsByClassName('aside-ul-li');
	let con = document.getElementsByClassName('jdaside-box');
	for(let i = 0;i < title.length;i++){
		title[i].onmouseover = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
			con[i].classList.add('con-active');
		}
		title[i].onmouseout = function(){
			for(let j = 0;j < con.length;j++){
				con[j].classList.remove('con-active');
			}
		}
	}
	//地标
	let dbox = document.getElementsByClassName('nav-left-box');
	let db = document.getElementsByClassName('nav-city');
	for(let i = 0;i < dbox.length;i++){
		dbox[i].onmouseover = function(){
			for(let j = 0;j < db.length;j++){
				db[j].classList.remove('con-active');
			}
			db[i].classList.add('con-active');
		}
		dbox[i].onmouseout = function(){
			for(let j = 0;j < db.length;j++){
				db[j].classList.remove('con-active');
			}
		}
	}
	//我的京东 客户服务 网站导航
	let wdjdbox = document.getElementsByClassName('bai');
	let wdjd = document.getElementsByClassName('myjd-box');
	for(let i = 0;i < wdjdbox.length;i++){
		wdjdbox[i].onmouseover = function(){
			for(let j = 0;j < wdjd.length;j++){
				wdjd[j].classList.remove('con-active');
			}
			wdjd[i].classList.add('con-active');
		}
		wdjdbox[i].onmouseout = function(){
			for(let j = 0;j < wdjd.length;j++){
				wdjd[j].classList.remove('con-active');
			}
		}
	}
	//手机京东
	let sjjdbox = document.getElementsByClassName('sjjd-box');
	let sjjd = document.getElementsByClassName('sjjd');
	for(let i = 0;i < sjjdbox.length;i++){
		sjjdbox[i].onmouseover = function(){
			for(let j = 0;j < sjjd.length;j++){
				sjjd[j].classList.remove('con-active');
			}
			sjjd[i].classList.add('con-active');
		}
		sjjdbox[i].onmouseout = function(){
			for(let j = 0;j < sjjd.length;j++){
				sjjd[j].classList.remove('con-active');
			}
		}
	}
	//Banner————透明度轮播
	/*1.初始化css
		第一张opacity:0;
		其余：opacity:1;
	2.获取元素
		图片  .img-list>liS
		大盒子  .banner
	3.让图片自动播放
		开启时间函数
			控制当前图片下标 now
			遍历图片  显示完之后再拉回初始状态
	4.停止自动播放
		鼠标移入  大盒子
			clear
	5.通过轮播点控制图片
		得到每一个轮播点
			for  或  forEach
				鼠标移入或点击  on  addEvenLisiener
	6.左右切换
		右箭头 now++
			if(now == banner.length)  now=0
		左箭头 now--
			if(now < 0)  now = banner.length+1*/
	let bannerBox = document.getElementsByClassName('lb')[0];
	let banner = document.querySelectorAll('.img-list>li');
	let dian  = document.querySelectorAll('.lb-btn>li');
	let right = document.querySelectorAll('.lb-right')[0];
	let left = document.querySelectorAll('.lb-left')[0];
	let now = 0;
	let time = setInterval(move,2000);
	//自动轮播
	function move(type){
		type = type || 'right';
		if(type == 'right'){
			now++;
			if(now == banner.length){
				now = 0;
			}
		}else if(type == 'left'){
			now--;
			if(now == -1){
				now = banner.length-1;
			}
		}
		banner.forEach(function(ele,index){
			ele.style.opacity = 0;
			dian[index].style.background = '#fff';
		})
		banner[now].style.opacity = 1;
		dian[now].style.background = '#db192a';
	}
	bannerBox.onmouseover = function(){
		clearInterval(time);
		right.style.display = 'block';
		left.style.display = 'block';
	}
	bannerBox.onmouseout = function(){
		time = setInterval(move,2000);
		right.style.display = 'none';
		left.style.display = 'none';
	}
	dian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			banner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				dian[bindex].style.background = '#fff';
			})
			banner[dindex].style.opacity = 1;
			this.style.background = '#db192a';
			now = dindex;
		})
	});
	right.onclick = function(){
		move('right');
	}
	left.onclick = function(){
		move('left');
	}

	//京东秒杀————透明度轮播
	let msrBox = document.getElementsByClassName('ms-shop-right')[0];
	let msrbanner = document.querySelectorAll('.ms-shop-right-gg>li');
	let msrdian  = document.querySelectorAll('.ms-shop-right-btn>li');
	let msrnow = 0;
	let msrtime = setInterval(msrmove,1000);
	console.log(msrbanner)
	function msrmove(){
		msrnow++;
		if(msrnow == msrbanner.length){
			msrnow = 0;
		}
		msrbanner.forEach(function(ele,index){
			ele.style.opacity = 0;
			msrdian[index].style.background = '#342a2d';
		})
		msrbanner[msrnow].style.opacity = 1;
		msrdian[msrnow].style.background = '#db192a';
	}
	msrBox.onmouseover = function(){
		clearInterval(msrtime);
	}
	msrBox.onmouseout = function(){
		msrtime = setInterval(msrmove,1000);
	}
	msrdian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			msrbanner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				msrdian[bindex].style.background = '#342a2d';
			})
			msrbanner[dindex].style.opacity = 1;
			this.style.background = '#db192a';
			msrnow = dindex;
		})
	});

	//会买专辑
	let hmBox = document.getElementsByClassName('hm-shop')[0];
	let hmbanner = document.querySelectorAll('.hm-shop-box');
	let hmdian  = document.querySelectorAll('.hm-shop-dian>li');
	let hmleft = document.querySelectorAll('.hm-btn-left')[0];
	let hmright = document.querySelectorAll('.hm-btn-right')[0];
	let hmnow = 0;
	let hmtime = setInterval(hmmove,5000);
	//自动轮播
	function hmmove(type){
		type = type || 'hmright';
		if(type == 'hmright'){
			hmnow++;
			if(hmnow == hmbanner.length){
				hmnow = 0;
			}
		}else if(type == 'hmleft'){
			hmnow--;
			if(hmnow == -1){
				hmnow = hmbanner.length-1;
			}
		}
		hmbanner.forEach(function(ele,index){
			ele.style.opacity = 0;
			hmdian[index].style.background = '#c8c8c8';
		})
		hmbanner[hmnow].style.opacity = 1;
		hmdian[hmnow].style.background = '#e01222';
	}
	hmBox.onmouseover = function(){
		clearInterval(hmtime);
		hmright.style.display = 'block';
		hmleft.style.display = 'block';
	}
	hmBox.onmouseout = function(){
		hmtime = setInterval(hmmove,5000);
		hmright.style.display = 'none';
		hmleft.style.display = 'none';
	}
	hmdian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			hmbanner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				hmdian[bindex].style.background = '#c8c8c8';
			})
			hmbanner[dindex].style.opacity = 1;
			this.style.background = '#e01222';
			hmnow = dindex;
		})
	});
	hmright.onclick = function(){
		hmmove('hmright');
	}
	hmleft.onclick = function(){
		hmmove('hmleft');
	}

	//寻me————透明度轮播
	let xunBox = document.getElementsByClassName('xun-shop')[0];
	let xunbanner = document.querySelectorAll('.xun-shop-a');
	let xundian  = document.querySelectorAll('.xun-shop-dian>li');
	let xunleft = document.querySelectorAll('.xun-btn-left')[0];
	let xunright = document.querySelectorAll('.xun-btn-right')[0];
	// console.log(xunbanner,xundian)
	let xunnow = 0;
	let xuntime = setInterval(xunmove,5000);
	//自动轮播
	function xunmove(type){
		type = type || 'xunright';
		if(type == 'xunright'){
			xunnow++;
			if(xunnow == xunbanner.length){
				xunnow = 0;
			}
		}else if(type == 'xunleft'){
			xunnow--;
			if(xunnow == -1){
				xunnow = xunbanner.length-1;
			}
		}
		xunbanner.forEach(function(ele,index){
			ele.style.opacity = 0;
			xundian[index].style.background = '#c8c8c8';
		})
		xunbanner[xunnow].style.opacity = 1;
		xundian[xunnow].style.background = '#e01222';
	}
	xunBox.onmouseover = function(){
		clearInterval(xuntime);
		xunright.style.display = 'block';
		xunleft.style.display = 'block';
	}
	xunBox.onmouseout = function(){
		xuntime = setInterval(xunmove,5000);
		xunright.style.display = 'none';
		xunleft.style.display = 'none';
	}
	xundian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			xunbanner.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				xundian[bindex].style.background = '#c8c8c8';
			})
			xunbanner[dindex].style.opacity = 1;
			this.style.background = '#e01222';
			xunnow = dindex;
		})
	});
	xunright.onclick = function(){
		xunmove('xunright');
	}
	xunleft.onclick = function(){
		xunmove('xunleft');
	}

	//视频————透明度轮播
	let videoBox = document.getElementsByClassName('video')[0];
	let video = document.querySelectorAll('.video-img-box>li');
	let vdian  = document.querySelectorAll('.quality-btn>li');
	let vright = document.querySelectorAll('.quality-right-btn')[0];
	let vleft = document.querySelectorAll('.quality-left-btn')[0];
	let vnow = 0;
	let vtime = setInterval(vmove,2000);
	//自动轮播
	function vmove(type){
		type = type || 'vright';
		if(type == 'vright'){
			vnow++;
			if(vnow == video.length){
				vnow = 0;
			}
		}else if(type == 'vleft'){
			vnow--;
			if(vnow == -1){
				vnow = video.length-1;
			}
		}
		video.forEach(function(ele,index){
			ele.style.opacity = 0;
			vdian[index].style.background = '#fff';
		})
		video[vnow].style.opacity = 1;
		vdian[vnow].style.background = '#db192a';
	}
	videoBox.onmouseover = function(){
		clearInterval(vtime);
		vright.style.display = 'block';
		vleft.style.display = 'block';
	}
	videoBox.onmouseout = function(){
		vtime = setInterval(vmove,2000);
		vright.style.display = 'none';
		vleft.style.display = 'none';
	}
	vdian.forEach(function(dele,dindex){
		dele.addEventListener('click',function(){
			video.forEach(function(bele,bindex){
				bele.style.opacity = 0;
				vdian[bindex].style.background = '#fff';
			})
			video[dindex].style.opacity = 1;
			this.style.background = '#db192a';
			vnow = dindex;
		})
	});
	vright.onclick = function(){
		vmove('vright');
	}
	vleft.onclick = function(){
		vmove('vleft');
	}


	//用户：促销公告
	/*1.初始化CSS
		选项卡  display:block;
	2.获取元素
		大盒子   .message
		标题   .mes-t
		信息盒子   .mes-ul
	3.遍历大盒子   .message
	4.遍历标题  .mes-t  onmouseover
	5.遍历选项卡  .mes-ul  
		添加属性 classList.add
		删除属性 classList.remove*/
	let message = document.getElementsByClassName('message');
	// console.log(message);
	for(let i = 0; i < message.length;i++){
		let mt = message[i].getElementsByClassName('mes-t');
		// console.log(mt);
		let mm = message[i].getElementsByClassName('mes-ul');
		// console.log(mm);
		for(let j = 0; j < mt.length;j++){
			mt[j].onmouseover = function(){
				for(let k = 0; k < mm.length;k++){
					mm[k].classList.remove('mi-ms');
				}
				mm[j].classList.add('mi-ms');
			}
		}
	}

	//排行榜
	let phb = document.getElementsByClassName('phb-box');
	for(let i = 0; i < phb.length;i++){
		let pt = phb[i].getElementsByClassName('phb-t');
		let ps = phb[i].getElementsByClassName('phb-shop');
		for(let j = 0; j < pt.length;j++){
			pt[j].onmouseover = function(){
				for(let k = 0; k < ps.length;k++){
					ps[k].classList.remove('phb-mi');
				}
				ps[j].classList.add('phb-mi');
			}
		}
	}

	//返回顶部
	let top = document.getElementsByClassName('rc-a-top');
	top.onclick = function(){
		window.scroll(0,0);
	}

	//楼层跳转
	/*1.初始化
		jump  display:none;
	2.获取元素
		floor 6
		jump>li  6
	3.控制jump显示隐藏
		window.onscroll
			滚动条当前位置wTop  document.body  document。documentElements
			window
				wTop >floor[i].offsetTop-200
						jump display:block;
	4.wTop > floor[i].offsetTop
		item red
	5.item click
		滚动条当前的位置wTop = floor[i].offsetTop*/
	
	let searchf = document.getElementsByClassName('search_fix')[0];//活动搜索框

	let flow = document.querySelectorAll('.flow');
	let jump = document.querySelector('.lc');
	let floor = document.querySelectorAll('.floor');
	let item = document.querySelectorAll('.jump>li');
	//判断
	let obj = document.documentElement.scrollTop?document.documentElement:document.body;
	let num;
	window.onscroll = function(){
		let wTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset;
		if(wTop > floor[0].offsetTop - 280){
			jump.style.opacity = '1';
		}else{
			jump.style.opacity = '0';
		}
		for(let i = 0;i < floor.length;i++){
			if(wTop >= floor[i].offsetTop - 300){
				num = i;
				for(let j = 0;j < item.length;j++){
					item[j].style.background = '#918888';
				}
				item[i].style.background = '#d70b1c';
				// console.log(num);
			}
		}
		//按需加载图片
		for(var i = 0;i < flow.length;i++){
			var ftop = flow[i].offsetTop;
			var img = flow[i].getElementsByTagName('img');
			if(wTop > ftop - 300){
				for(var j = 0;j < img.length;j++){
					var dizhi = img[j].getAttribute('attr');
					img[j].src = dizhi;
				}
			}
		}
		//活动搜索框
		if(wTop > 700){
			searchf.style.opacity = '1';
		}else{
			searchf.style.opacity = '0';
		}	
	}
	for(let j = 0;j < item.length;j++){
		item[j].aa = j;
		item[j].onclick = function(){
			animate(obj,{scrollTop:floor[j].offsetTop - 100},1000,Tween.Linear,function(){
				console.log(1);
			});
		}
		item[j].onmousemove = function(){
			item[this.aa].style.background = '#d70b1c';
		}
		item[j].onmouseout = function(){
			if(this.aa != num){
				item[this.aa].style.background = '#918888';
			}	
		}
	}
}

	//京东秒杀———节点轮播
	let bottom = document.querySelector(".ms-shop-left-box");
	let lbtn = document.querySelector(".ms-btn-left");
	let rbtn = document.querySelector(".ms-btn-right");

	let widths = bottom.firstElementChild.offsetWidth;

	let count = bottom.childElementCount;
	bottom.style.width = count * widths + 'px'; 
	console.log(widths,count)
	let num = 0;
	rbtn.onclick = function(){
		if(num == 2){
			rbtn.className = 'ms-btn-right';
			lbtn.className = 'ms-btn-left';
			return;
		}
		num++;
		bottom.style.transform = `translateX(${-1000*num}px)`;
	}
	lbtn.onclick = function(){
		if(num == 0){
			rbtn.className = 'ms-btn-right';
			lbtn.className = 'ms-btn-left';
			return;
		}
		num--;
		bottom.style.transform = `translateX(${-1000*num}px)`;
	}
	

