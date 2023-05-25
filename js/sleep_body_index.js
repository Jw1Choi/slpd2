const testbody = document.getElementById('test_body');
testbody.innerHTML = `
<div id="wrap" style="width:100%" >


<section id="dbscf" style="display:none;">
<form id="db" name="inputForm" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/site/03/realslim/save.php" target="hidden_iframe12">
<input type="hidden" name="ms" value="S00125897R"/>
<input type="hidden" name="ca" value="C05236151H"/>
	<input type="hidden" name="auto_defense" />

	<section class="dbfield_sec">
	<div class="dbfield">
		<div id="mkis_db" style="top: -5px;">
			<span class="hidden">디비필드로 이동할 위치값</span>
		</div>
		<div class="dbfield_tbl_w">
			<table>
				<caption class="hidden">디비필드 입력폼</caption>
				<tbody>
				<tr>
					<th scope="row">
						<label>이름</label>
					</th>
					<td>
						<input type="text" name="name" style="width: 10em;">
				  
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>성별</label>
					</th>
					<td>
						<label>
							<input type="radio" id="female" value="여성" name="sex" checked="checked">
							<span>여성</span>
						</label>
						<label>
							<input type="radio" value="남성" name="sex">
							<span>남성</span>
						</label>
					  
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>나이</label>
					</th>
					<td>
						<label>
							<input class="align_center" type="text" name="age" maxlength="2" style="width: 3em;"/>
							<span>세</span>
						</label>
				   
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>연락처</label>
					</th>
					<td>
						<input class="align_center" type="text" name="tel1" maxlength="3" style="width: 3em;">
						-
						<input class="align_center" type="text" name="tel2" maxlength="4" style="width: 4em;">
						-
						<input class="align_center" type="text" name="tel3" maxlength="4" style="width: 4em;">
				   
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>현재체중</label>
					</th>
					<td>
						<label>
							<input class="align_center" maxlength="3" type="text" name="item1" style="width: 4em;">
							<span>kg</span>
						</label>
						
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>감량목표</label>
					</th>
					<td>
						<label>
							<input class="align_center" type="text" maxlength="3" name="item3" style="width: 4em;">
							<span>kg</span>
						</label>
					</td>
				</tr>


				<tr>
					<th scope="row">
						<label>키</label>
					</th>
					<td>
						<label>
							<input class="align_center" type="text" maxlength="3" name="item2" style="width: 4em;">
							<span>cm</span>
						</label>
					 
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>문의사항</label>
					</th>
					<td>
						<textarea name="etc" style="height: 50px !important;"></textarea>
		   
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label>
							<span class="no_br">개인정보</span>
							<span class="no_br">취급동의</span>
						</label>
					</th>
					<td>
						<a href="javascript:dbdb_pri_popup();" class="btn_private">
							<span>개인정보 취급방침</span>
						</a>
						<span class="no_br">
									<label>
										<input type="radio" name="agree" checked>
										<span>예</span>
									</label>
									<label>
										<input type="radio" name="agree" >
										<span>아니오</span>
									</label>
								</span>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class="btn_dbfield_submit_w">
			<button type="button" class="btn_dbfield_submit btn_dbfield_submit_orange" onclick="javascript:OnSubmit();">
				<span>무료상담 신청하기</span>
			</button>
		</div>
	</div>
</section>
</form>


</section>


		<div id="container">
		<main id="main">
		
		
		  <div class="area_category">
			  <form action="" id="form_e11" method="POST" target ="hidden_iframe11" onsubmit=" submitted=true;"> 
			  	<input type="hidden" name="entry.272078534" value="type2">
					<div class="wow fadeIn bbackg"> 
		
							 <section  id="main_intro" class="backg" style="text-align: center;" >
							 					  
								  <img src="./img/sleep1.jpg" class="bg-img br50" style="min-height:1060px;max-height:1300px">
								
								  <div class="img-text md-top3 lg-top5 top-space" style="font-size:21px;">
								  <center>  <span class="timer " style="border:1px solid white;padding:8px 15px;font-size:13px; ">
								접수마감 | <span id="day1"></span>( <span id="countdown1"></span>)</center><br>


							
								  <center><h1><span class="questm ft-white">SLEEP & DIET<br>NEW 수면 다이어트 프로그램<br>선착순 14차 무료 상담 혜택<br><br>점점 안빠져 고민이신가요?<br>자면서 살빼는 방법을 알려드립니다.<br></span></h1></center>
	
							
							  <div class="row counters">
								<div class="col-lg-4 col-4 text-center">
								  <span class="counter">98</span><span > %</span>
								  <p>감량만족도</p>
								</div>
					
								<div class="col-lg-4 col-4 text-center">
								  <span class="counter">156,198</span><span> 명</span>
								  <p>누적고객</p>
								</div>
					
								<div class="col-lg-4 col-4 text-center">
								  <span>연속 </span><span class="counter">13</span><span >차</span>
								  <p>조기 마감</p>
								</div>
					
								<!-- <div class="col-lg-4 col-4 text-center">
								  <span class="counter">5</span><span >년</span>
								  <p>기업상담 재직 연수</p>
								</div> -->
							  </div>
					
							<center><p class="notice blink1">현재 페이지 한정</p></center>
							<br>

							
						
							  <center><input name="entry.intro" id="quest00_1" class="input_font quest00" type="radio" value="시작하기" style="text-align:center;" >
							  <label class="label_button1 intro_click" id="start0" for="quest00_1" onclick="go_sub()"><span style="font-size: 16px;"></span><span >시작하기</span></label>
							  
							  
							  <input class="agree" type="checkbox" name="agree11" id="agree11" value="개인정보동의" checked style="font-size:12px !important">
							  <label class="agree" style="font-family: 'RIDIBATANG';font-size:12px !important;margin-top:0px" for="agree11">개인정보동의</label>
							  
							
			  
							<span class="privacyBtn" onclick="privacyPopUp()">
							  [자세히보기]
							</span>
							<br>
							<span class="alert"  id="alert_41">　</span>
							  </center>
																		  <!--원하는 영역을 가도록 수정법= 'onclick = jump_quest(원하는 영역 번호)'를 작성-->
									
									
							
																		  <div class="wrap linkWrap" style="display:inline">
																		  <div class="sec00 contents" >
																			<div class="inner" style="text-align:-webkit-center;">
																			<p>
																			  <span id="day"></span><br>
																			  현재 <span  class="counter" style="bottom:1px;">142</span> 명이 신청 대기 중입니다.
																			  
																			</p>
															  
																   
															  
																			<div class="box_02">
																			  <div class="box_02_1">
																				<div style="position:relative;height:150px;overflow:hidden;">
																				  <div id="ticker_wrap" style="position: absolute;top:0px;right:0px;width:100%;">
																					<table id="ticker" class="tg">
																					<tbody>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">배</span></td>
																						<td class="tg-02ax">35세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">배</span></td>
																						<td class="tg-02ax">50세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">옆구리</span></td>
																						<td class="tg-02ax">26세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">허벅지</span></td>
																						<td class="tg-02ax">25세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">배</span></td>
																						<td class="tg-02ax">42세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">등</span></td>
																						<td class="tg-02ax">31세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">허벅지</span></td>
																						<td class="tg-02ax">49세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">종아리</span></td>
																						<td class="tg-02ax">38세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					  <tr>
																						<td class="tg-0lax"><span class="submit_02">배</span></td>
																						<td class="tg-02ax">27세 / 여성</td>
																						<td class="tg-03ax"><span class="submit_03">신청완료</span></td>
																					  </tr>
																					</tbody>
																					</table>
																					
																				  </div>
																				</div>
																			  </div>
																			</div>
																			</div>
																		  </div>
																		</div>		
									
																		  <!--버튼 글자 수정 = '시작하기 >>' 부분을 원하는대로 수정해주시면 됩니다.-->
							  </div>

	


							  
							  </section>

						  <!--메인 화면 SECTION-->

						  <section  id="quest8_wrap" class="wow fadeIn backg container1" style="text-align: center;" >
							 					  
						  <img src="./img/ezgif-frame-041.jpg" class="bg-img br50" style="min-height:950px;max-height:1050px">
					 
					  <div class="img-text md-top3 lg-top3 top-space" style="font-size:14px;">
					  <center><h1 style="line-height:1.0;padding-bottom:0px;"><span class="questm ft-white">올바른 수면을 통해<br>자면서 감량할 수 있도록 도와드리는<br>SLEEP & DIET 입니다.<br></span></h1></center>

					  <section id="clients" class="wow fadeInUp">
					  <hr style="background-color:#fff;width:90%;margin-bottom:35px">
					  <div class="container">

				
							<div class="owl-carousel clients-carousel">


						<!-- flat slide -->
						<!--	<div>  
									
										
											<div class="row ">
												<div class="col-lg-4 col-4 text-center">
												<center><img class="img_slide" src="img/sleep.jpg" alt="" ></center>
												</div>
									
												<div class="col-lg-8 col-8 text-center">
												
												<p class="txt-tip">수면 중에는 체지방 분해와 단백질 합성에<br>가장 중요한 성장 호르몬을 분비합니다.</p>	
												</div>
		
											</div>
									</div> -->

						<!-- end flat slide -->		


									<div>  
									<p class="txt-tip">1) 살이 점점 안빠지고<br>체중이 늘기만 하는 이유?</p>	
										<center><img class="img_slide" src="img/ft.jpg" alt="" ></center>
										<p class="txt-tip">체지방을 없애고 근육을 만드는 핵심인<br>성장호르몬이 20대 이후 감소하면서<br>나잇살이 생기고 안빠지는 체질이 됩니다.<br>[출처: 서울대학교 병원]</p>	
											<!-- <div class="row ">
												<div class="col-lg-4 col-4 text-center">
												<p class="txt-tip">체지방 분해<br>근육을 만드는<br>성장호르몬의 감소<br></p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
												<p class="txt-tip"></p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
												<center><img src="./img/gmp-ffood.png" class="gmp" style="padding:0 0"></center>
												<p class="txt-tip">체지방 </p>
												</div>
									
										
											</div> -->
									</div>

									<div>  
									<p class="txt-tip">2) 성장호르몬 분비를 다시 촉진시켜<br>감량에 도움되게 하는 가장 좋은 방법은 수면입니다.</p>	
										<center><img class="img_slide" src="img/sleep.jpg" alt="" ></center><br>
											<div class="row ">
												<div class="col-lg-4 col-4 text-center">
											
												<p class="txt-tip">1. 좋은 수면<br>(하루 성장호르몬의 60~70% 분비)</p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
											
												<p class="txt-tip">2. 규칙적 운동<br>(운동시 분비 촉진)</p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
												<p class="txt-tip">3. 균형잡힌 식단<br>(혈당 낮을 때 분비)</p>
												</div>
									
										
											</div>
									</div>

									<div>  
									<p class="txt-tip">3) 수면의 장점을 활용해<br>올바른 감량을 진행할 수 있다면?</p>	
									<center><img class="img_slide" src="img/sleep.jpg" alt="" ></center><br><br>
											<p class="txt-tip">SLEEP & DIET 수면 프로그램은<br>이 질문에 대한 긴 고민과 연구 끝에 태어났습니다.</p>	
									</div> 

									<div>  
									<p class="txt-tip">4) 식약처 인증된 안전한 성분을 함께 활용해<br>체계적이고 효과적인 감량을 도와드립니다.</p>	
										<center><img class="img_slide" src="img/sleep_product.png" alt="" ></center>
											<div class="row ">
												<div class="col-lg-4 col-4 text-center">
												<span >500</span><span class="txt-tip">mg</span>
												<p class="txt-tip">감태추출물<br>(수면 개선에 도움 줄 수 있음)</p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
												<span>500</span><span class="txt-tip">mg</span>
												<p class="txt-tip">콜레우스포스콜리추출물<br>(체지방 감소 도움 줄 수 있음)</p>
												</div>
									
												<div class="col-lg-4 col-4 text-center">
												<center><img src="./img/gmp-ffood.png" class="gmp" style="padding:0 0"></center>
												<p class="txt-tip">식약처 기능성 인증</p>
												</div>
									
										
											</div>
									</div>
							</div>
							<hr style="background-color:#fff;width:90%">
					  </div>
	
					</section>

					<!-- <div class="col-lg-12 col-md-12 wow fadeInUp">
   <div class="member">
  <img class="br80" src="img/sleep_product.png" class="img-fluid" alt="" style="width:80%;object-fit:cover;max-width:400px" />
  </div>
  </div><br>
					  <div class="row counters">
					  <div class="col-lg-4 col-4 text-center">
						<span class="countercheck">500</span><span>mg</span>
						<p class="txt-tip">감태추출물<br>(수면 개선에 도움)</p>
					  </div>
		  
					  <div class="col-lg-4 col-4 text-center">
						<span class="countercheck">500</span><span >mg</span>
						<p class="txt-tip">콜레우스포스콜리<br>(체지방 감소 도움)</p>
					  </div>
		  
					  <div class="col-lg-4 col-4 text-center">
						<img src="./img/gmp-ffood.png" class="gmp">
						<p class="txt-tip">식약처 기능성 인증</p>
					  </div> 

					</div><br> -->
		


					<!-- chat -->
					<center> <div class=" alert_msg">
					 <div class="col-2 col-xxs-2 pad0">
					 <center><img class="chat_img mw74" src="img/guide.png" ></center>
					 </div>

					 <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
					 
					 <span class="txt-tip ">여러분의 체형에 맞게 수면을 이용한<br>최대 감량치 분석을 도와드립니다.</span><br><br>	
					 </div>

						 </div> </center><br>

				 <!-- end chat -->

					  <center><input name="entry.intro" id="quests_1" class="input_font sub_click quest8" type="radio" value="체형 분석하기" style="text-align:center;" >
					  <label class="label_button1" id="start1" for="quests_1" onclick="go_gw()"><span style="font-size: 16px;"></span><span >무료 수면 감량 분석하기</span></label><Br>
					  
			
					  
					  </center>

					  </div>
					  </section>
				  <!--메인 화면 SECTION-->
		
							  
		
						  <!--질문0번 SECTION-->	
						  <section  id="quest0_wrap" class="wow fadeIn backg container1" >
						  
							  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
		
							  <div class="wow fadeIn img-text ft-white">	
							  
						  <!--질문 문구 부분 시작-->
							  <center><h1><span class="questm ft-white">희망 목표 체중</span></h1></center>
						 
						  <!--질문을 띄어쓰기 하려면 '<br>'을 적으시면 됩니다-->
						  <input name="entry.1989036305" class="test_input bb-white"  type="number"  id="weight" style="width:40%;text-align:center;" maxlength="3" oninput="maxLengthCheck(this)" onkeyup="goal_weight()"><label class="ft-white" >kg</label><br><br>
						  <!--질문 문구 부분 끝-->
						  <span class="alert" id="alert_gw">　</span><br>

						  <!-- chat -->
						  <center> <div class=" alert_msg">
						   <div class="col-2 col-xxs-2 pad0">
						   <center><img class="chat_img mw74" src="img/guide.png" ></center>
						   </div>
	 
						   <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
						   
						   <span class="txt-tip ">희망 목표에 맞게<br>맞춤 감량치를 분석을 진행합니다.</span><br><br>	
						   </div>
	 
							   </div> </center><br>
	 
					   <!-- end chat -->
						  <center><input name="entry.quest0" id="quest0_1" class="input_font quest0 " type="radio" value="다음" style="text-align:center;" disabled="disabled">
							  <label class="label_button1 click_goal_weight disabled" id="next_gw" for="quest0_1" style="text-align:Center;" onclick="go_weight()">다음</label></center>	
							  </div>
		
					  
								 
						  </section>
						  <!--질문0번 SECTION 끝 -->	   
							  
						  <!--질문 클릭 시 진행 방향 함수-->
						  
							 <!--질문 클릭 시 진행 방향 함수-->
						 
								 <section  id="quest1_wrap" class="wow fadeIn backg container1" >
		
								  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
		
								  <div class="wow fadeIn img-text ft-white">
									 <!-- <div class="menu1" style="text-align:left">
									 <span class="menu_font" style="cursor:pointer;" onclick="jump_quest(0)">PREV</span>
									 </div><br><br> -->
										
							  <center><h1><span class="questm ft-white">성별</span></h1></center><br>
							  <center><input id="mf_1" name="entry.1818522882" type="radio" value="여성" /> <label class="label_button1 female" for="mf_1" onclick="jump_quest(5)" >여성</label></center>
							  <center><input id="mf_2" name="entry.1818522882" type="radio" value="남성" /> <label class="label_button1" for="mf_2" onclick="ban()">남성</label></center>
							  <center><p id="dzi1_ord" class="ft-white alert">　</p></center>

							  <!-- chat -->
							  <center> <div class=" alert_msg">
							   <div class="col-2 col-xxs-2 pad0">
							   <center><img class="chat_img mw74" src="img/guide.png" ></center>
							   </div>
		 
							   <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
							   
							   <span class="txt-tip ">최대 감량치를 파악하기 위해<br>여러분의 체형을 분석합니다.</span><br><br>	
							   </div>
		 
								   </div> </center><br>
		 
						   <!-- end chat -->
						  </div>
						  
						 
							  </section>
								 
							  <!--질문2 SECTION 시작-->
							  <section  id="quest2_wrap" class="wow fadeIn backg container1" >
								  
								  <!--'이전으로' 버튼 부분-->
							  
								  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
								 
							  <div class="wow fadeIn img-text ft-white">	
		
								  
									  <center><h1><span class="questm ft-white">현재 체중</span></h1></center>
		
						  <!--질문 문구 부분 시작-->
						  <input name="entry.880528237" class="test_input bb-white"  type="number"  id="now-weight" style="width:40%;text-align:center;" maxlength="3" oninput="maxLengthCheck(this)"  onkeyup="now_weight()"><label class="ft-white" >kg</label><br><br>
		
		
						

						  <!--질문 문구 부분 끝-->
		<span class="alert" id="alert_nw">　</span><br>
		<!-- chat -->
		<center> <div class=" alert_msg">
		 <div class="col-2 col-xxs-2 pad0">
		 <center><img class="chat_img mw74" src="img/guide.png" ></center>
		 </div>

		 <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
		 
		 <span class="txt-tip ">최대 감량치를 파악하기 위해<br>여러분의 체형을 분석합니다.</span><br><br>	
		 </div>

			 </div> </center><br>

	 <!-- end chat -->
		<center><input name="entry.quest2" id="quest2_1" class="input_font click_weight quest2 " type="radio" value="다음" style="text-align:center;" disabled="disabled">
		<label class="label_button1 disabled" id="next_nw" for="quest2_1" style="text-align:Center;" onclick="go_height()">다음</label></center>	
		</div>								   
						 
							  </section>	
							  <!--질문2 SECTION 끝-->
		
		
								 
									 <section  id="quest3_wrap" class="wow fadeIn backg container1" >
							  
													 <!-- <center><div class="stepper-wrapper probar">
								 <div class="stepper-item completed"></div>
									 <div class="stepper-item"></div>
										 <div class="stepper-item"></div>
								 <div class="stepper-item"></div>
											 </div></center><br> -->
											 <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
											 
											 <div class="wow fadeIn img-text ft-white">	
											 <!--질문 문구 부분 시작-->
											 <center><h1><span class="questm ft-white">신장</span></h1></center>
											 
											 <!--질문을 띄어쓰기 하려면 '<br>'을 적으시면 됩니다-->
											 <input name="entry.205668662" class="test_input bb-white"  type="number"  id="now-height" style="width:40%;text-align:center;" maxlength="3" oninput="maxLengthCheck(this)"  onkeyup="now_height()"><label class="ft-white" >cm</label><br><br>
											 <!--질문 문구 부분 끝-->
											 <span class="alert" id="alert_height">　</span><br>
											 <!-- chat -->
											 <center> <div class=" alert_msg">
											  <div class="col-2 col-xxs-2 pad0">
											  <center><img class="chat_img mw74" src="img/guide.png" ></center>
											  </div>
						
											  <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
											  
											  <span class="txt-tip ">최대 감량치를 파악하기 위해<br>여러분의 체형을 분석합니다.</span><br><br>	
											  </div>
						
												  </div> </center><br>
						
										  <!-- end chat -->
											 <center><input name="entry.quest3" id="quest3_1" class="input_font quest3 " type="radio" value="다음" style="text-align:center;" disabled="disabled">
											 <label class="label_button1 click_height disabled" id="next_height" for="quest3_1" style="text-align:Center;" onclick="go_age()">다음</label></center>	
											 </div>
										  
										  
									  </section>	
						 
								 
						 <section  id="quest4_wrap" class="wow fadeIn backg container1" >	
						  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
						 
						  <div class="wow fadeIn img-text ft-white">	
							  <center><h1><span class="questm ft-white">나이</span></h1></center>
								  
								 
										 <!--질문을 띄어쓰기 하려면 '<br>'을 적으시면 됩니다-->
										 <input name="entry.1881318671" class="test_input bb-white"  type="number"  id="now-age" style="width:30%;text-align:center;min-width: 100px;" maxlength="2" oninput="maxLengthCheck(this)"  onkeyup="now_age()"><label class="ft-white" >세</label><br><br>
										 <!--질문 문구 부분 끝-->
										 <span class="alert" id="alert_age">　</span><br>
										 <!-- chat -->
										 <center> <div class=" alert_msg">
										  <div class="col-2 col-xxs-2 pad0">
										  <center><img class="chat_img mw74" src="img/guide.png" ></center>
										  </div>
					
										  <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
										  
										  <span class="txt-tip ">최대 감량치를 파악하기 위해<br>여러분의 체형을 분석합니다.</span><br><br>	
										  </div>
					
											  </div> </center><br>
					
									  <!-- end chat -->
										 <center><input name="entry.quest4" id="quest4_1" class="input_font quest4 " type="radio" value="다음" style="text-align:center;" disabled="disabled">
										 <label class="label_button1 click_age disabled" id="next_age" for="quest4_1" style="text-align:Center;" onclick="go_se()">다음</label></center>	
										 </div>
									  
										 
										</section>
										
		
							  <section  id="quest5_wrap" class="wow fadeIn backg container1" >
							  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:460px;max-height:500px">
						  
						  <div class="wow fadeIn img-text ft-white">	
							  <center><h1><span class="questm ft-white">성함</span></h1></center>
								  
								 
										 <!--질문을 띄어쓰기 하려면 '<br>'을 적으시면 됩니다-->
										 <input name="entry.583978956" class="test_input bb-white"  type="text"  id="now_name" maxlength="4" oninput="maxLengthCheck(this)" spellcheck="false" autocomplete="off" style="width:30%;text-align:center;min-width:120px" ><label class="ft-white" >님</label>
										 <br><br>
										  <!--질문 문구 부분 끝-->
										  <span class="alert" id="alert_name">　</span><br>
										  <!-- chat -->
										  <center> <div class=" alert_msg">
										   <div class="col-2 col-xxs-2 pad0">
										   <center><img class="chat_img mw74" src="img/guide.png" ></center>
										   </div>
					 
										   <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
										   
										   <span class="txt-tip ">최대 감량치 분석을<br>무료로 안내해드리겠습니다.</span><br><br>	
										   </div>
					 
											   </div> </center><br>
					 
									   <!-- end chat -->
										  <center><input name="entry.quest5" id="quest5_1" class="input_font quest5 " type="radio" value="다음" style="text-align:center;" disabled="disabled" >
										  <label class="label_button1 click_name disabled" id="next_name" for="quest5_1" style="text-align:Center;" onclick="go_phone()">다음</label></center>	
										  </div>
										  
										 
							  </section>
							  <!-- 다른 번호의 SECTION 끝 -->
		
								 
								  <section  id="quest6_wrap" class="wow fadeIn backg container1" >
									  <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:500px;max-height:550px">
									 
									  <div class="wow fadeIn img-text ft-white">	
										  <center><h1><span class="questm ft-white">휴대폰 번호</span></h1></center>
											  
											 
										  <input name="entry.576088086" class="test_input bb-white"  type="text"  id="phone" style="width:80%;text-align:center;max-width: 300px;" maxlength="11" oninput="maxLengthCheck(this)" onkeyup="now_phone()"><br><br>
										  <!--질문 문구 부분 끝-->
										  <span class="alert" id="alert_phone">　</span>

										  <!-- chat -->
										  <center> <div class=" alert_msg">
										   <div class="col-2 col-xxs-2 pad0">
										   <center><img class="chat_img mw74" src="img/guide.png" ></center>
										   </div>
					  
										   <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
										   
										   <span class="txt-tip ">여러분의 체형에 맞게 수면을 이용한<br>최대 감량치 분석을 도와드립니다.</span><br><br>	
										   </div>
					  
											   </div> </center><br>
					  
									   <!-- end chat -->


										  <center><input name="entry.quest6" id="quest6_1" class="input_font quest6 click_submit" type="submit" value="무료 전화 상담 받기" style="text-align:center;display: none;" >
										  <label class="label_button1 disabled" id="next_phone" for="quest6_1" style="text-align:Center;" onclick="go_result();">무료 상담 받기</label></center>	

										  <br>
										  <input class="agree" type="checkbox" name="agree11" id="agree12" value="개인정보동의" checked style="font-size:12px !important">
										  <label id="end0" class="agree" style="font-family: 'RIDIBATANG';font-size:12px !important;margin-top:0px" for="agree12" >개인정보동의</label>
										  
										
						  
										<span class="privacyBtn" onclick="privacyPopUp()">
										  [자세히보기]
										</span>
										<br> 
										</div>
												  
								  </section>	
								 
								 
		
								 
									 <section  id="quest7_wrap" class="wow fadeIn backg container1" >
									  <img src="./img/mirror.jpg" class="bg-img br50" style="max-height:800px;min-height:700px;">
		
									  <div class="wow fadeIn img-text ft-white" style="top:4% !important">
											
								  <center><h1><span class="questm ft-white">희망 감량 부위</span></h1></center><br>
								  <center><input id="hope_1" name="entry.1817436242" type="radio" value="배" /> <label class="label_button1 choice" for="hope_1" onclick="jump_quest(0);focus()" >배</label></center>
								  <center><input id="hope_2" name="entry.1817436242" type="radio" value="옆구리" /> <label class="label_button1 choice" for="hope_2" onclick="jump_quest(0);focus()">옆구리</label></center>
								  <center><input id="hope_3" name="entry.1817436242" type="radio" value="허벅지" /> <label class="label_button1 choice" for="hope_3" onclick="jump_quest(0);focus()">허벅지</label></center>
								  <center><input id="hope_4" name="entry.1817436242" type="radio" value="등" /> <label class="label_button1 choice" for="hope_4" onclick="jump_quest(0);focus()">등</label></center>
								  <center><input id="hope_5" name="entry.1817436242" type="radio" value="종아리" /> <label class="label_button1 choice" for="hope_5" onclick="jump_quest(0);focus()">종아리</label></center>
								<br><br>
								<!-- chat -->
								<center> <div class=" alert_msg">
								 <div class="col-2 col-xxs-2 pad0">
								 <center><img class="chat_img mw74" src="img/guide.png" ></center>
								 </div>
		   
								 <div class="col-6 col-xxs-10 col50 text-center pad-msg" >
								 
								 <span class="txt-tip ">여러분의 고민에 맞게<br>감량 방법을 분석해드릴께요.</span><br><br>	
								 </div>
		   
									 </div> </center><br>
		   
							 <!-- end chat -->
							  </div>

							
								 </section>	
		
													 
								 
														  
						 <section id="quest99_wrap" class="container1 wow fadeIn backg" style="display:none;background:#1b1b1b;box-shadow:none;height:100vh;">
						 
						 <center><div class="box_wrap">
										 <br /><div id="box" style="margin-left:0px;margin-top:50px"></div>
									 </div></center><br>
									 <center><div class="wait_text">잠시만 기다려주세요.</div>
									 
											  
						 
						 </section>


						 <section  id="quest100_wrap" class="wow fadeIn backg container1" >
						  
						 <img src="./img/mirror.jpg" class="bg-img br50" style="min-height:660px;max-height:800px">
   
						 <div class="wow fadeIn img-text ft-white">	
				
						 <center><h1 style="line-height:90%"><span class="questm ft-white">수면 다이어트<br>무료 체형 분석<br>상담 신청이 완료 되었습니다.<br><br>실질적인 도움과 안내를 위하여<br>전화를 통해 안내를 드리고 있습니다.<br>다만 부재시 감량을 도와드리지 못하니<br>꼭 전화를 받아주세요.<br><br>오로지 여러분의<br>건강한 감량만을 생각합니다.<br>-수면 다이어트-</span></h1></center>

							
						 
						 </div>
   
				 
							
					 </section>
							 
						 <footer id="footer" class="section-bg">
						  <div class="footer-top">
							<div class="container">
							  <div class="row">
							
									<span>*감량 효과는 개인별 차이가 있을 수 있습니다.</span><br>
									
								  <span>회사명 : (주)에스디엘에이치</span><br>
								  <span>사업자번호: 641-86-00917</span><br>
								  <span>광고사전심의필: 210612104</span><br>
								  <span>주소: 서울특별시 광진구 능동로 40길 10-3</span><br>
					  				<span>FLOS © All rights reserved</span>
								</div>
							  </div>
							</div>
						</footer>				
								   
			  
		<!-- // footer -->
				  
		  </div>
		
		</main>
		
		</div>
		
		
		</div>
    <!-- // wrap -->

	

	<div id="privacy">
		<div id="privacyContent">
		  <div class="titWrap">
			<span>개인정보처리방침</span>
			<i style="margin-top:-23px" class="ion-close-circled closeBtn"></i>
		  </div>
		  <div style="line-height:1.2" class="conWrap">
			개인정보처리방침<br><br>
			‘(주)에스디엘에이치 수면다이어트' 회사는 (이하 ‘회사’는) 고객님의 개인정보를 중요시하며, “개인정보보호법”, “정보통신망 이용촉진 및 정보보호에 관한 법률”등 관련법규를 준수하고 있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.<br />
			아울러 개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.<br><br>
			<br />
			01. 수집하는 개인정보 항목<br />
			<br />
			회사는 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.<br />
			<br />
			-수집항목 : 본인이름, 본인나이, 본인연락처, 문의(불편)사항, 결혼유무<br />
			-개인정보수집방법 : 홈페이지(상담신청양식), 전화, 협력회사로부터의 제공<br />
			<br />
			02. 개인정보의 수집 및 이용목적<br />
			회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br />
			<br />
			서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 상담, 요금정산, 구매 및 요금결제, 물품배송 또는 청구지 등 발송<br />
			회원관리 : 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 구매 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동 여부 확인 , 불만처리 등 민원처리 , 고지사항 전달, 입사 지원에 따른 본인 확인, 제휴신청 업체 정보 확인<br />
			마케팅 및 광고      에 활용 : 신규 서비스(제품) 개발 및 특화 , 이벤트 등 광고성 정보 전달 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />
			<br />
			또한, 본 회사는 “통신비밀보호법”에 의거하여 공개되지 않은 타인 간의 대화를 녹음 또는 청취하지 못하며,<br />
			위반 시 10년 이하의 징역과 5년 이하의 자격정지에 처하도록 규정을 따르고 있으며, 녹취를 할 때 내 사건에 증거로 제출할 목적으로 서로간의 합의하에만 녹취가 가능합니다.<br />
			<br />
			03. 개인정보의 보유 및 이용기간<br />
			원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br />
			<br />
			보존항목 : 이름, 나이, 연락처, 주소, 이메일<br />
			보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
			보존기간 : 5년<br />
			<br />
			그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.<br />
			<br />
			보존항목 : 이름, 나이, 연락처, 주소, 이메일<br />
			보존근거 : 전자상거래 등에서의 소비자보호에 관한 법률<br />
			보존기간 : 5년<br />
			<br />
			04. 개인정보의 파기절차 및 방법<br />
			회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.<br />
			<br />
			<br />
			-파기절차<br />
			<br />
			고객님이 상담신청 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함)내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)일정기간 저장된 후 파기되어집니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.<br />
			<br />
			-파기방법<br />
			<br />
			전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br />
			<br />
			05. 개인정보의 제3자 제공<br />
			회사는 정보주체의 개인정보를 이용목적 내에서만 처리하며, 정보 주체의 동의, 법률의 특별한 규정이 있는 경우에만 개인정보를 제3자에게 제공합니다.<br />
			회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.<br />
			<br />
			-제공하는 개인정보 항목 : 본인이름, 본인나이, 본인연락처, 불편사항, 결혼유무, 이메일 등 고객이 입력한 정보<br />
			-제공받는 자의 개인정보 이용목적<br />
			서비스 제공에 관한 이행 및 서비스 제공에 따른 콘텐츠제공<br />
			고객을 대상으로 제품 상담 응대 및 판매<br />
			서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 상담, 요금정산, 구매 및 요금결제, 물품배송 또는 청구지 등 발송<br />
			-회원 관리 : 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 구매 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인 , 불만처리 등 민원처리 , 고지사항 전달, 입사 지원에 따른 본인 확인, 제휴신청 업체 정보 확인<br />
			-마케팅 및 광고에 활용 : 신규 서비스(제품) 개발 및 특화 , 이벤트 등 광고성 정보 전달 , 인구통계학적 특성에 따른 서비스 제공 및 광고 게재 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계<br />
			-제공받는 자의 보유․이용기간 : 5년(소비자의 불만 또는 분쟁처리에 관한 기록 : 3년)<br />
			고객은 제3자 개인정보 제공에 대하여 동의를 거부할 권리가 있으며 동의를 거부할 경우 서비스 제공 및 서비스 제공에 따른 콘텐츠 제공에 제한이 있을 수 있습니다.<br />
			<br />
			06. 이용자 및 법정대리인의 권리와 그 행사방법<br />
			이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자들의 개인정보 조회, 수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다. 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 “회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.<br />
			<br />
			07. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항<br />
			회사는 귀하의 정보를 수시로 저장하고 찾아내는‘쿠키(cookie)’ 등을 운용합니다. 쿠키란 인사이드케어 솔루션의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다. 회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.<br />
			<br />
			쿠키 등 사용 목적<br />
			회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공<br />
			귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.<br />
			쿠키 설정 거부 방법<br />
			예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.<br />
			설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보<br />
			단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.<br />
			<br />
			08. 개인정보에 관한 민원서비스<br />
			회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.<br />
			<br /> 
			귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보 보호 관련민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.<br />
			회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br />
			<br />
			기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.<br />
			<br />
			개인분쟁조정위원회 (www.1336.or.kr/1336)<br />
			정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)<br />
			대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)<br />
			경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
		  </div>
		</div>
	  </div>
`;

document.body.appendChild(testbody.content);