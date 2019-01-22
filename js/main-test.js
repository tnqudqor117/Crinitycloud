var exText = "다음 문항을 읽고 YES 또는 NO를 선택하세요!";

///도입신청 제목
var doip = "도입신청";
var doipText = "신청 후 24시간(영업일 기준) 이내에 세부 견적서를 발송해 드립니다.";
var doipNum = "문의 : 070-7018-9260 / support@crinity.com";

var viewTitle = '';
var viewTxt = '';
var viewEx = '';
var viewlink = '';

var check = 0;	//설문조사의 yes 선택빈도
var checkPage = 2;	//현재 페이지
var checkPages = 0;	//이전 페이지
$(document).ready(function(){
	//소통테스트 메뉴
	$('.function5').click(function(){
		$('#more-menu').removeClass('on');
		$('.bg-dark').fadeIn();
	});
	
	//컨설팅신청/교육일정 메뉴
	$('.function6').click(function(){
		checkPage = 12;
		checkPages = 10;
		$('#more-menu').removeClass('on');
		$('.test-1').addClass('hide'); // 테스트 부분 가림
		$('.bg-dark').fadeIn();
	});
	
	//도입신청 메뉴
	$('.function7').click(function(){
		checkPage = 17;
		checkPages = 15;
		$('#more-menu').removeClass('on');
		$('.test-1').addClass('hide'); // 테스트 부분 가림
		$('.bg-dark').fadeIn();
	});	
	
	$('.btn-test').on('click',function(){ //처음 시작 버튼
		$('.test-1').addClass('hide');	//처음 설문조사 시작 숨김
		$('.test-2').removeClass('hide');	//설문조사 시작
	});
	$('.btn-all,.btn-apply,.date-ch,.function6,.function7').on('click',function(){	//설문조사 버튼 클릭시 이벤트 발동
		if( $(this).attr('value') == 1 ){	//value값으로 yes 인지 no인지 판별
			check = check + 1;				//yes일경우 check포인트 1증가
		}
		if( $(this).attr('value') == 0 ){	//no일경우 그냥 넘어감
			
		}
		checkPage = checkPage + 1;	//현재페이지 증가
		checkPages = checkPage - 1;	//이전페이지 증가
		
		if( $(this).hasClass('prev-btn') ){		//이전 버튼클릭시 이전 창 보여주기
			checkPage = checkPage - 2;	//현재페이지 감소
			checkPages = checkPage + 1;	//이전페이지 감소
		}
		
		$('.test-'+checkPages).addClass('hide');	//현재페이지 숨김
		$('.test-'+checkPage).removeClass('hide');	//다음페이지 나타냄

		if( checkPage == 12 ){
			alert('소통 테스트가 완료 되었습니다.')
			switch(check){
				case 1 :
				$('.test-12 ul .gage').css('width','18%');
				$('.test-12 ul.bottom li').eq(0).addClass('active');
				break;
				case 2 :
				$('.test-12 ul .gage').css('width','27.1%');
				$('.test-12 ul.bottom li').eq(0).addClass('active');
				break;
				case 3 :
				$('.test-12 ul .gage').css('width','36.1%');
				$('.test-12 ul.bottom li').eq(2).addClass('active');
				break;
				case 4 :
				$('.test-12 ul .gage').css('width','45.2%');
				$('.test-12 ul.bottom li').eq(4).addClass('active');
				break;
				case 5 :
				$('.test-12 ul .gage').css('width','54.3%');
				$('.test-12 ul.bottom li').eq(4).addClass('active');
				break;
				case 6 :
				$('.test-12 ul .gage').css('width','63.4%');
				$('.test-12 ul.bottom li').eq(6).addClass('active');
				break;
				case 7 :
				$('.test-12 ul .gage').css('width','72.5%');
				$('.test-12 ul.bottom li').eq(6).addClass('active');
				break;
				case 8 :
				$('.test-12 ul .gage').css('width','81.6%');
				$('.test-12 ul.bottom li').eq(8).addClass('active');
				break;
				case 9 :
				$('.test-12 ul .gage').css('width','90.6%');
				$('.test-12 ul.bottom li').eq(8).addClass('active');
				break;
				case 10 :
				$('.test-12 ul .gage').css('width','100%');
				$('.test-12 ul.bottom li').eq(10).addClass('active');
				break;
			}
			if( check == 0 || check == 1 ){
				viewTitle = '실화?';
				viewTxt = '설마 디지털 소통도구 없이 구두와 메모로 소통하시나요? 당장의 의사전달은 될 지 모르나 금방 잊어버리고 실수할 가능성이 매우 높습니다. 소통도구 사용에 대해 거부감이 있고 소통도구 자체를 모를 수도 있겠군요.';
				viewEx = '외부소통을 위한 이메일과 함께 우리 회사만을 위한 SNS형 협업툴 "큐브"를 같이 사용해 보세요.';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move01&hid=m0301#section7';
			}
			if( check == 2 || check == 3 ){
				viewTitle = '소 귀에 경 읽기';
				viewTxt = '소통도구로 전화와 카카오톡 정도만 사용하고 있을 수 있겠군요. 카카오톡은 직장상사에게는 편하지만 사생활 침해 등 업무용으로 사용하기에는 많은 문제점이 있답니다. 어쩌면 카카오톡 사용에 대한 부하직원의 불만이 높아 소 귀의 경 읽기 상태가 되어 버렸을지도 몰라요.';
				viewEx = '카카오톡 사용을 자제하고 SNS형 협업툴 "큐브"를 사용하여 여유를 주세요. 정말 급할 땐 전화가 떠 빠르답니다.';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move01&hid=m0301#section7';
			}
			if( check == 4 || check == 5 ){
				viewTitle = '넌 너대로 난 나대로';
				viewTxt = '그룹웨어를 사용하지만 이메일과 메신저로만 소통하고 있을 가능성이 높겠네요.단체 활동이 부족하고, 일에만 너무 몰두하여 동료 직원에게 소홀하지 않나요? 업무도 중요하지만 팀워크도 중요한 법, 커뮤니티를 만들어 서로 소통해 보는 건 어떨까요. ';
				viewEx = 'SNS형 협업툴 "큐브"는 "밴드"처럼 자유롭게 사내 커뮤니티를 만들어 소통할 수 있는 기능을 제공한답니다. ';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move01&hid=m0301#section7';
			}
			if( check == 6 || check == 7 ){
				viewTitle = '소통은 되나 협업은?';
				viewTxt = '한국 평균 수준의 소통 레벨을 보이고 있습니다. 소통도구를 활용할 수 있고 팀원들 간의 소통도 잘 이뤄지는 편입니다.  하지만 중요한 협업에 대해서는 의문이 드는군요. 프로젝트 수행 시 감정 상하는 일이 발생할 지 모릅니다.';
				viewEx = '다양한 협업 기능을 지닌 "크리니티 메일"과 SNS형 협업툴 "큐브"를 활용하면 소통과 협업 모두 향상됩니다. ';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move02&hid=m0301#section4';
			}
			if( check == 8 || check == 9 ){
				viewTitle = '보기드문 모범기업';
				viewTxt = '기업 내 소통문화가 이미 형성되어 있는 모범적인 회사입니다.  최신 소통도구나 협업툴 도입 및 사용에 부담감이 없으며 매우 익숙하게 사용하고 있겠군요. 그럼에도 불구하고 소통이 잘 안된다고 느끼신다면,  도구 탓이 아닐 것입니다. 좀 더 감성적인 면에 주목하세요.';
				viewEx = 'TEXT';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move02&hid=m0301#section4';
			}
			if( check == 10 ){
				viewTitle = '가족?';
				viewTxt = '텔레파시가 통할 정도의 끈끈한 소통과 눈빛만으로도 분업이 가능한 협업 수준을 가지셨군요.  ICT 개발자 이상의 소통도구 사용법을 알고 있고, 새로운 도구 도입에도 전혀 망설임이 없을 듯 합니다. "가족같은 회사"라는 슬로건을 내세워도 전혀 무리가 없을 것 같아요.';
				viewEx = '메신저형 협업툴은 정보의 휘발성(없어짐)이 강합니다. 반면 SNS형 협업툴 "큐브"는 정보 수집, 검색에 편리합니다.';
				viewlink = 'http://crinitycloud.com/bbs/page.php?local=move02&hid=m0301#section4';
			}
			$('.test-12 .viewTitle').text(viewTitle);
			$('.test-12 .viewTxt').text(viewTxt);
			$('.test-12 .viewEx').text(viewEx);
			$('.test-12 .viewEx').text(viewEx);
			$('.test-12 .viewLink').attr('href',viewlink);
		}
	});
	
	$('.next-btn').click(function(){
		if( $('.test-16 .select-box li:eq(1)').hasClass('on') ){
			location.href="https://cubeis.net/";
		}
	});
	
	$('.select-box li').click(function(){
		var count = $(this).index();
		$('.select-box li').removeClass('on');
		$('.select-box li').eq(count).addClass('on');
		$('.index-box .index').removeClass('on');
		$('.index-box .index').eq(count).addClass('on');
	});
	
	$('.done-btn ,.menu-pc').click(function(){
		$('.bg-dark').fadeOut();
		check = 0;	
		checkPage = 2;	
		checkPages = 0;
		$('.test-box > div').addClass('hide');
		$('.test-1').removeClass('hide');
		//설문조사가 끝나면 초기화	
	});
	
	$('.edu-btn').click(function(){		//교육참석신청 완료 안내문
		alert('신청이 접수되었습니다. \n크리니티 담당자가 연락드리겠습니다. \n감사합니다.')
	})
});

class Testbox extends React.Component{
    render() {
        return ( 
		<div className="test-box">
			<div className="test-1">
				<div className="center-css">
					<div className="title">소통테스트</div>
					<div className="text-box">
						당신의 회사는 소통이 잘 되고 있나요?<br/>
						10문항의 간단한 테스트를 통해 소통문화 레벨을 진단해 보세요!
					</div>
					<div className="img-box">
						<img src="/img/main/test-01.png"/>
					</div>
					<a className="btn-test" href="#none">테스트 시작</a>
				</div>
			</div>	
			<div className="test-2 hide">
				<div className="center-css">
					<div className="title">Question 1</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						이메일은 외부 소통용으로만 사용하고 <br/>
						내부 소통은 메신저, 협업툴 등 다른 소통도구를 이용한다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-02.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-3 hide">
				<div className="center-css">
					<div className="title">Question 2</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						부서에 관계없이 전 직원이 사내 회의록을<br/>
						자유롭게 열람할 수 있는 시스템을 구축하고 있다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-03.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-4 hide">
				<div className="center-css">
					<div className="title">Question 3</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						다른 지역 또는 다른 나라의 지사에서 근무하는<br/>
						직원들과 소통하고 실시간 협업할 수 있는 시스템이 있다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-04.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-5 hide">
				<div className="center-css">
					<div className="title">Question 4</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						누군가 인수인계 없이 퇴사하더라도 그동안의<br/>
						업무기록을 참고하여 인수인계가 원활히 진행된다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-05.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-6 hide">
				<div className="center-css">
					<div className="title">Question 5</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						몇개의 검색어 만으로도 업무에 필요한 사내 자료를<br/>
						빠르고 간편하게 찾을 수 있는 시스템을 보유하고 있다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-06.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-7 hide">
				<div className="center-css">
					<div className="title">Question 6</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						사내 지식 및 정보를 소통도구 사용만으로 자연스럽게 <br/>
						보관 및 공유되므로 별도의 문서를 따로 작성하지 않는다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-07.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-8 hide">
				<div className="center-css">
					<div className="title">Question 7</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						내가 속한 프로젝트의 계획, 진행 상황, 결과가 <br/>
						실시간 모니터링되어 관리할 수 있는 관리툴을 사용한다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-08.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-9 hide">
				<div className="center-css">
					<div className="title">Question 8</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						연봉, 주식 등 민감한 사항을 제외한 <br/>
						사내 정보의 99% 이상이 전 직원에게 개방되어 있다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-09.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-10 hide">
				<div className="center-css">
					<div className="title">Question 9</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						상사나 임원에게 보고하기 위한 목적으로
						별도의 보고서를 만들지 않아도 소통이 가능하다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-10.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-11 hide">
				<div className="center-css">
					<div className="title">Question 10</div>
					<div className="text-box">
						{exText}
					</div>
					<div className="small-txt">
						팀원들이 하고 있는 업무와 활동 내용을
						손쉽게 파악할 수 있는 공유 캘린더와 게시판을 사용한다.
					</div>
					<div className="img-box">
						<img src="/img/main/test-11.png"/>
					</div>
					<a className="btn-yes btn-all" href="#none" value="1">YES</a>
					<a className="btn-no btn-all" href="#none" value="0">NO</a>
				</div>
			</div>
			<div className="test-12 hide">
				<div className="center-css">
					<div className="title">소통테스트 진단</div>
					<div className="text-box">
						10개의 문항 중 얼마나 많은 <span className="red-color">YES</span>를 선택하셨나요?<br/>
						테스트를 바탕으로 소통문화 레벨을 진단해 드리겠습니다.
					</div>
					<div className="small-txt">
						당신의 회사의 <span className="yellow-color">소통문화 레벨</span>은 · · ·
					</div>
					<div>
						<ul className="level">
							<li>0</li>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
							<li>7</li>
							<li>8</li>
							<li>9</li>
							<li>10</li>
						</ul>
						<ul className="view">
							<div className="gage"></div>
							<li className="on"></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<ul className="bottom">
							<li>실화?</li>
							<li></li>
							<li className="line">소 귀에 경 읽기</li>
							<li></li>
							<li className="line">넌 너대로 난 나대로</li>
							<li></li>
							<li className="line">소통은 되나 협업은?</li>
							<li></li>
							<li className="line">보기드문 모범기업</li>
							<li></li>
							<li>가족?</li>
						</ul>
					</div>
					<div className="view-txt">
						<div>
							<span className="viewTitle"></span> <a href="#none" className="pull-right viewLink" target="_blank">서비스 소개</a>
						</div>
						<div className="viewTxt"></div>
						<div className="view">
							TIP : <span className="viewEx"></span>
						</div>
					</div>
					<button className="btn-apply" href="#none">컨설팅 신청하기</button>
				</div>
			</div>
			<div className="test-13 hide">
				<div className="center-css">
					<div className="title">컨설팅 신청</div>
					<div className="text-box">
						소통도구 및 협업툴 사용에 어려움을 느끼시나요?<br/>
						전문 컨설턴트와 상담해 보세요!
					</div>
					<div>
						<div className="apply-title">신청자 정보(필수)</div>
						<div className="input-group">
							<input type="text" className="input-word" name="wr_1" id="wr_1" placeholder="이름"/>
							<input type="tel" className="input-word" name="wr_2" id="wr_2" placeholder="연락처"/>
						</div>
						<div className="apply-title2">추가 정보 <span className="apply-color">(입력하시면 보다 자세한 컨설팅이 가능합니다.)</span></div>
						<div className="input-group">
							<input type="text" className="input-word" name="wr_3" id="wr_3" placeholder="회사 또는 단체명"/>
							<input type="text" className="input-word" name="wr_4" id="wr_4" placeholder="직책"/>
						</div>
						<div className="input-group">
							<input type="email" className="input-word" name="wr_5" id="wr_5" placeholder="이메일 주소"/>
							<select className="input-word" name="wr_6" id="wr_6">
								<option value="">커뮤니티 규모</option>
								<option value="10인 이내">10인 이내</option>
								<option value="50인 이내">50인 이내</option>
								<option value="100인 이내">100인 이내</option>
								<option value="500인 이내">500인 이내</option> 
								<option value="1000인 이내">1000인 이내</option>
								<option value="1000인 초과">1000인 초과</option>
							</select>
						</div>
						<div className="input-group">
							<textarea className="input-txt" name="wr_7" id="wr_7" placeholder="궁금한 사항을 적어주세요. (예 : 교육, 사용, 도입, 서버구축 등)"></textarea>	
						</div>
					</div>
					<button className="btn-apply" href="#none">신청하기</button>
				</div>
			</div>
			<div className="test-14 hide">
				<div className="center-css">
					<div className="title">교육일정</div>
					<div className="text-box">
						협업툴 및 소통도구의 사용에 어려움을 느끼시나요?<br/>
						크리니티 커뮤니케이션 서비스의 100% 활용법을 익혀 보세요!
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="date-box">
						<div>
							<button><img src="/img/main/left-bt.jpg" alt="왼쪽 버튼"/></button>
							<span className="month">달력 월</span>
							<button><img src="/img/main/right-bt.jpg" alt="왼쪽 버튼"/></button>
						</div>
						<ul className="week">
							<li className="red-font">SUN</li>
							<li>MON</li>
							<li>TUE</li>
							<li>WED</li>
							<li>THU</li>
							<li>FRI</li>
							<li>SAT</li>
						</ul>
						<ul>
							<li className="red-font">
								<input type="checkbox" name="" id="date_01" value=""/>
								<label htmlFor="date_01">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_02" value=""/>
								<label htmlFor="date_02">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_03" value=""/>
								<label htmlFor="date_03">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_04" value=""/>
								<label htmlFor="date_04">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_05" value=""/>
								<label htmlFor="date_05">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_06" value=""/>
								<label htmlFor="date_06">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_07" value=""/>
								<label htmlFor="date_07">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
						</ul>
						<ul>
							<li className="red-font">
								<input type="checkbox" name="" id="date_08" value=""/>
								<label htmlFor="date_08">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_09" value=""/>
								<label htmlFor="date_09">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_10" value=""/>
								<label htmlFor="date_10">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_11" value=""/>
								<label htmlFor="date_11">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_12" value=""/>
								<label htmlFor="date_12">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_13" value=""/>
								<label htmlFor="date_13">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_14" value=""/>
								<label htmlFor="date_14">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
						</ul>
						<ul>
							<li className="red-font">
								<input type="checkbox" name="" id="date_15" value=""/>
								<label htmlFor="date_15">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_16" value=""/>
								<label htmlFor="date_16">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_17" value=""/>
								<label htmlFor="date_17">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_18" value=""/>
								<label htmlFor="date_18">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_19" value=""/>
								<label htmlFor="date_19">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_20" value=""/>
								<label htmlFor="date_20">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_21" value=""/>
								<label htmlFor="date_21">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
						</ul>
						<ul>
							<li className="red-font">
								<input type="checkbox" name="" id="date_22" value=""/>
								<label htmlFor="date_22">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_23" value=""/>
								<label htmlFor="date_23">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_24" value=""/>
								<label htmlFor="date_24">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_25" value=""/>
								<label htmlFor="date_25">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_26" value=""/>
								<label htmlFor="date_26">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_27" value=""/>
								<label htmlFor="date_27">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_28" value=""/>
								<label htmlFor="date_28">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
						</ul>
						<ul>
							<li className="red-font">
								<input type="checkbox" name="" id="date_29" value=""/>
								<label htmlFor="date_29">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_30" value=""/>
								<label htmlFor="date_30">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_31" value=""/>
								<label htmlFor="date_31">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_32" value=""/>
								<label htmlFor="date_32">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_33" value=""/>
								<label htmlFor="date_33">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_34" value=""/>
								<label htmlFor="date_34">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
							<li>
								<input type="checkbox" name="" id="date_35" value=""/>
								<label htmlFor="date_35">
									0
									<div className="memo-txt ellipsis">세미나</div>
								</label>
							</li>
						</ul>
					</div>
					<div className="bottom-ex">
						참석을 원하시는 교육일자를 선택하신 후 아래 신청하기 버튼을 클릭하세요!
					</div>
					<button className="btn-apply" href="#none">신청서 작성하기</button>
				</div>
			</div>
			<div className="test-15 hide">
				<div className="center-css">
					<div className="title">교육참석신청</div>
					<div className="text-box">
						크리니티 커뮤니케이션 서비스의 100% 활용법을 익혀 보세요!<br/>
						교육에 참석하신 모든 분들에게는 소정의 기념품을 드립니다.
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="wrap-box">
						<div className="apply-title">신청자 정보(필수)</div>
						<div className="apply-title2">
							일시 : <span>2018년 01월 6일</span>
							<span className="date-ch prev-btn">일정변경</span>
						</div>
						<div className="input-group">
							<input type="text" className="input-word" name="wr_1" id="wr_1" placeholder="이름"/>
							<input type="tel" className="input-word" name="wr_2" id="wr_2" placeholder="연락처"/>
						</div>
						<div className="input-group">
							<input type="text" className="input-word" name="wr_3" id="wr_3" placeholder="회사 또는 단체명"/>
							<input type="text" className="input-word" name="wr_4" id="wr_4" placeholder="직책"/>
						</div>
						<div className="input-group">
							<input type="email" className="input-word" name="wr_5" id="wr_5" placeholder="이메일 주소"/>
							<select className="input-word" name="wr_6" id="wr_6">
								<option value="">관심사</option>
								<option value="10인 이내">10인 이내</option>
								<option value="50인 이내">50인 이내</option>
								<option value="100인 이내">100인 이내</option>
								<option value="500인 이내">500인 이내</option> 
								<option value="1000인 이내">1000인 이내</option>
								<option value="1000인 초과">1000인 초과</option>
							</select>
						</div>
					</div>
					<div className="text-box margin-css">
						자세한 교육장소 및 일정에 대한 안내 메일이 이메일로 발송됩니다.<br/>
						이메일을 꼭 확인해 주시기 바랍니다. 
					</div>
					<button className="btn-apply edu-btn" href="#none">신청하기</button>
				</div>
			</div>
			<div className="test-16 hide">
				<div className="center-css">
					<div className="title">{doip}</div>
					<div className="text-box">
						{doipText}
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="bar-racod">
						<div className="bar-full">STEP 1 : 서비스 선택</div>
					</div>
					<div className="step">
						<div className="font-size">STEP. 1</div>
						<div>도입을 원하시는 서비스를 선택해 주세요!</div>
						<div className="font-color">서비스 선택이 어려우실 경우 하단의 SKIP 버튼을 클릭하시기 바랍니다.</div>
					</div>
					<ul className="select-box">
						<li></li>
						<li></li>
						<li><img className="img-right" src="/img/main/select03-right.png"/></li>
					</ul>
					<div className="index-box">
						<div className="view-txt index on">
							<div>
								<span className="viewTitle">크리니티 클라우드 메일 (통합 메시징 서비스)</span> 
								<a href="#none" className="pull-right">가격정보</a>
							</div>
							<div className="viewTxt">
								넉넉한 메일 용량과 다양한 협업 기능을 저렴한 비용으로 사용하세요!<br className="hidden-xs"/>
								최신 웹메일 기술과 다양한 필수 협업 기능이 결합된 차세대 클라우드 메일 서비스입니다. <br className="hidden-xs"/>
								최고의 퍼포먼스는 물론, 공직자통합메일과 동일한 수준의 높은 보안 품질을 제공합니다.  
							</div>
							<div className="view">
								기본 제공 기능 : 메일, 스팸차단, 주소록, 캘린더, 웹폴더, 게시판, 메모장, IMAP/POP3 등
							</div>
						</div>
						<div className="view-txt index">
							<div>
								<span className="viewTitle">크리니티 큐브 (SNS 기반 협업툴)</span> 
								<a href="#none" className="pull-right">가격정보</a>
							</div>
							<div className="viewTxt">
								큐브는 회사의 소통문화 및 공유문화 정착을 위해 탄생한 SNS 기반 협업툴 입니다.<br className="hidden-xs"/>
								회사 내외부 소통을 통해 얻은 정보를 보관 및 검색할 수 있어 정보자산관리에 탁월합니다.<br className="hidden-xs"/>
								조직도 외 손쉬운 커뮤니티 생성을 통해 사내 동아리, TF 팀 등 다양한 활동이 가능합니다.  
							</div>
							<div className="view">
								기본 제공 기능 : 타임라인, 조직도, 웹채팅, 캘린더, 태스크관리, 플러그인, 모바일앱 등
							</div>
						</div>
						<div className="view-txt index">
							<div>
								<span className="viewTitle">클라우드 메일 + 큐브 (소통 및 협업의 완성)</span> 
								<a href="#none" className="pull-right">가격정보</a>
							</div>
							<div className="viewTxt">
								외부 소통 위한 메일과 내부 소통 위한 큐브의 결합으로 완벽한 소통 환경을 조성합니다. <br className="hidden-xs"/>
								메일을 통해 얻은 정보를 간단 클릭만으로 큐브를 통해 전체 공유 및 관리할 수 있습니다.<br className="hidden-xs"/>
								향후 서비스 예정인 메신저와 전자결재를 추가하면 저비용 그룹웨어 구축이 가능합니다. 
							</div>
							<div className="view">
								기본 제공 기능 : 메일 서비스 + 협업툴 서비스 + (모바일 메신저) + (전자결재) + SSO 등
							</div>
						</div>						
					</div>
					<div className="btn-box">
						<button className="btn-apply" href="#none">SKIP</button>
						<button className="btn-apply next-btn" href="#none">NEXT&gt;</button>
					</div>	
				</div>
			</div>
			<div className="test-17 hide">
				<div className="center-css">
					<div className="title">{doip}</div>
					<div className="text-box">
						{doipText}
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="bar-racod">
						<div className="bar-full">STEP 2 : 서비스 이용약관</div>
					</div>
					<div className="step">
						<div className="font-size">STEP. 2</div>
						<div>다음 3가지 서비스 이용 약관에 동의 여부를 체크해 주세요.</div>
						<div>필수 항목은 반드시 체크해 주셔야 원활한 상담이 가능합니다.</div>
					</div>
					<div className="step2-box">
						<div className="ch-txt">
							<input type="checkbox" name="" id=""/>
							크리니티 서비스 이용 약관에 동의합니다. (필수)
						</div>
						<div className="ch-txt">
							<input type="checkbox" name="" id=""/>
							아래의 개인정보의 수집 및 이용목적에 동의합니다. (필수)
						</div>
						<div className="img-bottom">
							<img src="/img/main/step2-img01.png"/>
						</div>
						<div className="ch-txt">
							<input type="checkbox" name="" id=""/>
							아래의 마케팅 수집 및 활용에 동의합니다. (선택)
						</div>
						<div className="img-bottom">
							<img src="/img/main/step2-img02.png"/>
						</div>
					</div>
					<div className="btn-box">
						<button className="btn-apply prev-btn" href="#none">&lt;PREV</button>
						<button className="btn-apply next-btn" href="#none">NEXT&gt;</button>
					</div>
				</div>
			</div>
			<div className="test-18 hide">
				<div className="center-css">
					<div className="title">{doip}</div>
					<div className="text-box">
						{doipText}
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="bar-racod">
						<div className="bar-full">STEP 3 : 서비스 이용약관</div>
					</div>
					<div className="step">
						<div className="font-size">STEP. 3</div>
						<div>도입하고자 하는 회사나 단체의 기본 정보를 입력해 주시기 바랍니다.</div>
						<div>추가 정보를 입력해 주시면 소정의 상품을 드립니다.</div>
					</div>
					<div className="input-box">
						<div className="apply-title">기본 정보 입력(필수)</div>
						<div className="input-group">
							<input type="text" className="input-word" name="" id="" placeholder="회사명(단체명)"/>
							<select className="input-word" name="" id="">
								<option value="">산업 분류</option>
								<option value="제조업">제조업</option>
								<option value="요식업">요식업</option>
								<option value="금융업">금융업</option>
								<option value="농림수산업">농림수산업</option>
								<option value="무역유통업">무역유통업</option>
								<option value="정보지식산업">정보지식산업</option>
								<option value="엔터테인먼트">엔터테인먼트</option>
								<option value="콘텐츠">콘텐츠</option>
								<option value="교육">교육</option>
								<option value="공공기관">공공기관</option>
								<option value="기타">기타</option>
							</select>
						</div>
						<div className="input-group">
							<input type="text" className="input-word" name="" id="" placeholder="담당자명"/>
							<input type="email" className="input-word" name="" id="" placeholder="이메일"/>
						</div>
						<div className="input-group">
							<input type="text" className="input-word" name="" id="" placeholder="연락처"/>
							<input type="text" className="input-word" name="" id="" placeholder="사업자등록번호"/>
						</div>
						<div className="apply-title2">추가 정보 입력<span className="apply-color">(입력하시면 보다 자세한 컨설팅이 가능합니다.)</span></div>
						<div className="input-group">
							<input type="text" className="input-word widthfull" name="" id="" placeholder="현재 사용 중인 협업툴 및 소통도구"/>
							<input type="text" className="input-word widthfull" name="" id="" placeholder="크리니티 커뮤니케이션 서비스 알게 된 경로"/>
						</div>
					</div>
					<div className="btn-box">
						<button className="btn-apply prev-btn" href="#none">&lt;PREV</button>
						<button className="btn-apply next-btn" href="#none">NEXT&gt;</button>
					</div>	
				</div>
			</div>
			<div className="test-19 hide">
				<div className="center-css">
					<div className="title">{doip}</div>
					<div className="text-box">
						{doipText}
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="bar-racod">
						<div className="bar-full">STEP 4 : 객실 정보 입력</div>
					</div>
					<div className="step">
						<div className="font-size">STEP. 4</div>
						<div>서버 개설 및 서비스 비용 산정을 위한 개설 정보를 입력해 주시기 바랍니다.</div>
						<div>개설 정보에 따라 견적이 상이하므로 정확한 정보를 입력해 주시기 바랍니다.</div>
					</div>
					<div className="input-box">
						<div className="apply-title">개설 정보 입력(필수)</div>
						<div className="input-group">
							<input type="text" className="input-word" name="" id="" placeholder="신청 계정수"/>
							<select className="input-word" name="" id="">
								<option value="">없음</option>
								<option value="5GB">5GB</option>
								<option value="10GB">10GB</option>
								<option value="20GB">20GB</option>
								<option value="50GB">50GB</option>
								<option value="1TB">1TB</option>
							</select>
						</div>
						<div className="input-group">
							<select className="input-word" name="" id="">
								<option value="">없음</option>
								<option value="있음">있음</option>
								<option value="신규신청">신규신청</option>
							</select>
							<input type="text" className="input-word" name="" id="" placeholder="도메인 주소 입력"/>
						</div>
						<div className="input-group">
							<select className="input-word" name="" id="">
								<option value="">없음</option>
								<option value="있음">있음</option>
							</select>
							<select className="input-word" name="" id="">
								<option value="">없음</option>
								<option value="있음">있음</option>
							</select>
						</div>
						<div className="apply-title2">기타 필요 및 관심 사항(선택)</div>
						<div className="input-group">
							<textarea className="input-txt" name="" id="" placeholder="기타 필요 및 관심 사항을 적어주세요. (예 : 보안 추가, 세부 커스터마이징 등)"></textarea>	
						</div>
					</div>
					<div className="btn-box">
						<button className="btn-apply prev-btn" href="#none">&lt;PREV</button>
						<button className="btn-apply next-btn" href="#none">NEXT&gt;</button>
					</div>	
				</div>
			</div>
			<div className="test-20 hide">
				<div className="center-css">
					<div className="title">{doip}</div>
					<div className="text-box">
						{doipText}
					</div>
					<div className="red-txt">
						{doipNum}
					</div>
					<div className="bar-racod">
						<div className="bar-full">STEP 5 : 도입 신청 완료</div>
					</div>
					<div className="step">
						<div className="font-size">STEP. 5</div>
						<div>크리니티 클라우드 서비스 도입을 신청해 주셔서 대단히 감사합니다.</div>
						<div>최종확정 (DONE) 버튼을 클릭하시면 신청이 완료됩니다.</div>
						<div>완료 전 신청 정보를 다시 한번 확인해 주시기 바랍니다.</div>
					</div>
					<div className="img-bottom">
						<img src="/img/main/test-18.png"/>
					</div>
					<div className="btn-box">
						<button className="btn-apply prev-btn" href="#none">&lt;PREV</button>
						<button className="btn-apply done-btn" href="#none">DONE</button>
					</div>	
				</div>
			</div>
		</div>	
        );
    } 
};
 
ReactDOM.render(
<Testbox />, 
document.getElementById('test-box')
);
