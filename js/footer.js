var footerLogo = [
    {
        img : "./img/footer_logo.png"
    }
]
var Footer = React.createClass({
    render: function() {
        return ( 
         <div className="footer">
			<div className="logo-box">
				<img src="./img/footer_logo.png" alt="로고" />
			 </div>
			<div className="footer-box">
				<div>
					<ul className="menu-list">

						<li>
							<a href="http://www.crinity.com/?page_id=57">회사소개</a>
						</li>
						<li>
							<a href="/cloud/sub01.html">소통과 협업</a>
						</li>
						<li>
							<a href="/cloud/sub03.html">서비스소개</a>
						</li>
						<li>
							<a href="./img/m0301/mail_service_info.pdf">서비스 이용약관</a>
						</li>
						<li>
							<a href="./img/m0301/crinity_mail_personal_info.pdf">개인정보 취급방침</a>
						</li>
						<li>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSc6GlYWFHMMAFQOlgvN_s3iwfZ1cFqbByJJNnHLmpC8XJLShg/viewform?c=0&w=1">도입신청</a>
						</li>
					</ul>
					<ul className="sns-list">
						<li><a href="#"><img src="./img/footer/footer_img01.png" alt="페이스북"/></a></li>
						<li><a href="#"><img src="./img/footer/footer_img02.png" alt="블로그"/></a></li>
						<li><a href="#"><img src="./img/footer/footer_img03.png" alt="유튜브"/></a></li>
						<li><a href="#"><img src="./img/footer/footer_img04.png" alt="카페"/></a></li>
						<li className="mail">
							<a href="mailto:support@crinity.com">
								<img src="./img/footer/mail.jpg" alt="이메일"/>support@crinity.net
							</a>
						</li>
					</ul>
				</div>	
				<div className="op-box">
					서울시 금천구 벚꽃로 244 807~809호 (가산동, 벽산디지털밸리 5차) (우)08513<br/>
					사업자등록번호 : 229 - 81 - 34605 | 대표이사 : 유병선 | 대표전화 : 02 - 573 - 0030 | 팩스 : 02 - 573 - 0235
				</div>
			</div>
		</div>
        );
    } 
});
 
ReactDOM.render(
<Footer />, 
document.getElementById('footer')
);