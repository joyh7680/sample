<? if($mNum=="") $mNum=0 ?>
<? if($sNum=="") $sNum=0 ?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta name="format-detection" content="telephone=no">
	<meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=3.0,user-scalable=yes" name="viewport">
	<title>위피크</title>
	<meta name="subject" content="위피크">
	<meta name="description" content="위피크">
	<meta name="keywords" content="위피크">

	<meta property="og:type" content="website">
	<meta property="og:title" content="위피크">
	<meta property="og:description" content="위피크">
	<meta property="og:image" content="/images/sns_link.png">
	<meta property="og:url" content="">

	<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
	<link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/css/pretendard.css">
	<link rel="stylesheet" type="text/css" href="/css/aos.css">
	<link rel="stylesheet" type="text/css" href="/css/slick.css">
	<link rel="stylesheet" type="text/css" href="/css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="/css/jquery.modal.css">
	<link rel="stylesheet" type="text/css" href="/css/reset.css">	
	<link rel="stylesheet" type="text/css" href="/css/layout.css">	
	<link rel="stylesheet" type="text/css" href="/css/doc.css">	
	<link rel="stylesheet" type="text/css" href="/css/board.css">
	<link rel="stylesheet" type="text/css" href="/css/responsive.css">	

	<script type="text/javascript" src="/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="/js/jquery.ui.js"></script>
	<script type="text/javascript" src="/js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="/js/jquery.rwdImageMaps.min.js"></script>
	<script type="text/javascript" src="/js/jquery.gnb.js"></script>
	<script type="text/javascript" src="/js/aos.js"></script>
	<script type="text/javascript" src="/js/slick.min.js"></script>
	<script type="text/javascript" src="/js/swiper.min.js"></script>
	<script type="text/javascript" src="/js/jquery.modal.min.js"></script>
	<script type="text/javascript" src="/fancybox/lib/jquery.mousewheel-3.0.6.pack.js"></script>
	<script type="text/javascript" src="/fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></script>
	<link rel="stylesheet" type="text/css" href="/fancybox/source/jquery.fancybox.css?v=2.1.5" media="screen">
	<script type="text/javascript" src="/js/script.js"></script>
	<!--[if lte IE 9]
		<script src="/js/html5.js"></script>
	<![endif]-->	
</head>
<body id="<?=$main=="main"?"main":"sub"?>">
<div id="skipToContent">
	<a href="#container">본문 바로가기</a>
	<a href="#gnb">주메뉴 바로가기</a>
</div>
<div id="wrapper"> 	
	<!-- // header -->
	<div id="header">
		<div class="contain">
			<h1 class="sitelogo"><a href="/index.php"><img src="/images/common/logo.png" alt="위피크(주)"></a></h1>	
			<div id="gnb">
				<h2 class="blind">주메뉴</h2>
				<ul>
					<li><a href="">회사소개</a>
						<div class="submenu">
							<ul>
								<li><a href="/sub/sub01_01.php">인사말</a></li>
								<li><a href="/sub/sub01_02.php">경영이념</a></li>
								<li><a href="/sub/sub01_03.php">주요연혁</a></li>
								<li><a href="/sub/sub01_04.php">조직도</a></li>
								<li><a href="/sub/sub01_05.php">CI·BI</a></a></li>
							</ul>
						</div>
					</li>
					<li><a href="">사업분야</a>
						<div class="submenu">
							<ul>
								<li><a href="/sub/sub02_01.php">Equipment</a></li>
								<li><a href="/sub/sub02_02.php">Digital</a></li>
								<li><a href="/sub/sub02_03.php">Facilities</a></li>
								<li><a href="/sub/sub02_04.php">Apparel</a></li>
								<li><a href="/sub/sub02_05.php">Marketing</a></li>
								<li><a href="/sub/sub02_06.php">Academy</a></li>
							</ul>
						</div>
					</li>
					<li><a href="">홍보센터</a>
						<div class="submenu">
							<ul>
								<li><a href="/sub/sub03_01.php">공지사항</a></li>
								<li><a href="/sub/sub03_02.php">인재채용</a></li>
								<li><a href="/sub/sub03_03.php">보도자료</a></li>
								<li><a href="/sub/sub03_04.php">오시는 길</a></li>
							</ul>
						</div>
					</li>
					<li><a href="">브랜드사이트</a>
						<div class="submenu">
							<ul>
								<li><a href="">Sportime</a></li>
								<li><a href="">Sporvision</a></li>
								<li><a href="">Sporpeak</a></li>
								<li><a href="">Sporteam</a></li>
								<li><a href="">Sport Insight</a></li>
								<li><a href="">Sports monster Academy</a></li>
							</ul>
						</div>
					</li>
				</ul>				
			</div>
			
			
			<script type="text/javascript">

			jQuery(document).ready(function(){    

				jQuery('#gnb').gnb({ d1: <?=$mNum?> , d2: <?=$sNum?> });

			});

			</script>
			<a href="#menu" class="btn-m-menu"><span>메뉴</span></a><!-- for mobile -->
		</div>
		<div class="submenu-bg"></div>
	</div>
	
	<!-- header //-->