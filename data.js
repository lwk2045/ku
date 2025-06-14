const membersData = [
  { name: "강편모★", schoolNum: "", testNum: "8(서울중앙)" },
  { name: "강현우★", schoolNum: "95(전파)", testNum: "29(서울중앙)" },
  { name: "고기동", schoolNum: "84(법)", testNum: "9(서울중앙)" },
  { name: "고승연★", schoolNum: "", testNum: "7(서울중앙)" },
  { name: "고은영", schoolNum: "96(법)", testNum: "23(서울동부)" },
  { name: "고재도★", schoolNum: "91(법)", testNum: "18(서울중앙)" },
  { name: "고태환★", schoolNum: "91(법)", testNum: "" },
  { name: "공성수★", schoolNum: "84(법)", testNum: "15(서울중앙)" },
  { name: "곽수현★", schoolNum: "", testNum: "25(서울중앙)" },
  { name: "권오종", schoolNum: "(법)", testNum: "23(옥천)" },
  { name: "김다혜★", schoolNum: "91(국교)", testNum: "12(서울중앙)" },
  { name: "김동현★", schoolNum: "88(법)", testNum: "28(경기중앙)" },
  { name: "김세연★", schoolNum: "00(법)", testNum: "28(서울중앙)" },
  { name: "김승수★", schoolNum: "86(법)", testNum: "12(천안)" },
  { name: "김여원★", schoolNum: "04(생공)", testNum: "26(광주전남)" },
  { name: "김영식★", schoolNum: "86(정외)", testNum: "10기(인천)" },
  { name: "김재원★", schoolNum: "82(법)", testNum: "23(서울동부)" },
  { name: "김종환★", schoolNum: "81(법)", testNum: "22(서울중앙)" },
  { name: "김창국★", schoolNum: "84(유전공학)", testNum: "9(서울중앙)" },
  { name: "김창수★", schoolNum: "", testNum: "25(서울중앙)" },
  { name: "김청교★", schoolNum: "85(전자공학)", testNum: "24(경기중앙)" },
  { name: "김충식★", schoolNum: "91(법)", testNum: "27(법률구조공단)" },
  { name: "김태완★", schoolNum: "", testNum: "14(대구경북)" },
  { name: "김태진★", schoolNum: "", testNum: "25(성남)" },
  { name: "김현덕★", schoolNum: "83(법)", testNum: "24(경남)" },
  { name: "김형경★", schoolNum: "88(영교)", testNum: "27" },
  { name: "김형주★", schoolNum: "84(법)", testNum: "5(서울중앙)" },
  { name: "김홍근★", schoolNum: "82(행정)", testNum: "26(서울동부)" },
  { name: "김회진", schoolNum: "91(경영)", testNum: "" },
  { name: "김희섭★", schoolNum: "90(법)", testNum: "23(서울동부)" },
  { name: "박노형★", schoolNum: "92", testNum: "25(서울중앙)" },
  { name: "박상호★", schoolNum: "", testNum: "9(서울중앙)" },
  { name: "박성경★", schoolNum: "85(법)", testNum: "17(안양)" },
  { name: "박성민", schoolNum: "", testNum: "25" },
  { name: "박성수", schoolNum: "", testNum: "" },
  { name: "박성원", schoolNum: "85(법)", testNum: "25(창원)" },
  { name: "박성준★", schoolNum: "85(법)", testNum: "18(서울중앙)" },
  { name: "박양수★", schoolNum: "82(법)", testNum: "15(서울서부)" },
  { name: "박진수★", schoolNum: "", testNum: "" },
  { name: "박흥순★", schoolNum: "", testNum: "안양" },
  { name: "배건희★", schoolNum: "82(법)", testNum: "11(서울중앙)" },
  { name: "배병웅", schoolNum: "87(법)", testNum: "14(서울동부)" },
  { name: "백진기★", schoolNum: "85(정외)", testNum: "10(서울중앙)" },
  { name: "장지수", schoolNum: "75(법)", testNum: "2(수원)" },
  { name: "송민병", schoolNum: "84(법)", testNum: "17(부산)" },
  { name: "송의림★", schoolNum: "91(법)", testNum: "25(서울중앙)" },
  { name: "송혁수★", schoolNum: "85(서문)", testNum: "23(서울중앙)" },
  { name: "신기상★", schoolNum: "82(법)", testNum: "16(서울중앙)" },
  { name: "신진태★", schoolNum: "85(정외)", testNum: "17(김해)" },
  { name: "안선희★", schoolNum: "89(법)", testNum: "15(경기중앙)" },
  { name: "안성재★", schoolNum: "89(법)", testNum: "11(서울중앙)" },
  { name: "안신영★", schoolNum: "91(법)", testNum: "18(서울동부)" },
  { name: "양동빈★", schoolNum: "84(법)", testNum: "21(경기중앙)" },
  { name: "오영진★", schoolNum: "", testNum: "12(제주)" },
  { name: "오은석★", schoolNum: "82(법)", testNum: "28(경기북부)" },
  { name: "오창근", schoolNum: "95(수학)", testNum: "3(광주전남,여수)" },
  { name: "우상원★", schoolNum: "88(토목환경)", testNum: "29(서울동부)" },
  { name: "윤병준★", schoolNum: "82(법)", testNum: "26(서울중앙)" },
  { name: "윤석필★", schoolNum: "69(법)", testNum: "12(서울중앙)" },
  { name: "윤여선★", schoolNum: "82(법)", testNum: "1(서울중앙)" },
  { name: "이교한", schoolNum: "83(행정)", testNum: "8(서울동부)" },
  { name: "이기현", schoolNum: "91(법)", testNum: "16(서울중앙)" },
  { name: "이길용", schoolNum: "83(법)", testNum: "20(제주)" },
  { name: "이상대★", schoolNum: "81(법)", testNum: "30" },
  { name: "이상진★", schoolNum: "93(법)", testNum: "3(대구)" },
  { name: "이상현★", schoolNum: "", testNum: "26(서울중앙)" },
  { name: "이성기★", schoolNum: "73(행정)", testNum: "" },
  { name: "이성수", schoolNum: "", testNum: "법행" },
  { name: "이승훈★", schoolNum: "90(법)", testNum: "28(서울중앙)" },
  { name: "이영하★", schoolNum: "94(법)", testNum: "24(안양)" },
  { name: "이왕국★", schoolNum: "93(경영)", testNum: "30" },
  { name: "이용주", schoolNum: "81(경제)", testNum: "15(서울중앙)" },
  { name: "이원술", schoolNum: "82(법)", testNum: "13(서울중앙)" },
  { name: "이재석★", schoolNum: "84(법)", testNum: "법행" },
  { name: "이정희", schoolNum: "84(법)", testNum: "22(법률구조공단)" },
  { name: "이종택", schoolNum: "88(법)", testNum: "1(부산사하)" },
  { name: "이종혁★", schoolNum: "", testNum: "29(김해)" },
  { name: "이진수", schoolNum: "89(수학)", testNum: "" },
  { name: "이창훈", schoolNum: "88(체교)", testNum: "" },
  { name: "이창훈★", schoolNum: "", testNum: "27(서울중앙)" },
  { name: "이태인★", schoolNum: "81(법)", testNum: "28(서울북부)" },
  { name: "이한휴★", schoolNum: "89(법)", testNum: "3(서울중앙)" },
  { name: "이현재★", schoolNum: "82(법)", testNum: "16(서울 종로)" },
  { name: "이효경", schoolNum: "88(법)", testNum: "21(서울중앙)" },
  { name: "인태관★", schoolNum: "95(사회)", testNum: "13(안양평촌)" },
  { name: "임만혁★", schoolNum: "", testNum: "27(서울중앙)" },
  { name: "임소리", schoolNum: "84(법)", testNum: "22(서울중앙)" },
  { name: "임온식", schoolNum: "", testNum: "15(서울남부)" },
  { name: "임인택★", schoolNum: "", testNum: "9(서울중앙)" },
  { name: "임종명★", schoolNum: "", testNum: "14(경기중앙)" },
  { name: "임채균★", schoolNum: "91(법)", testNum: "25(서울중앙)" },
  { name: "전재호★", schoolNum: "86(행정)", testNum: "12(서울중앙)" },
  { name: "정개영★", schoolNum: "84(법)", testNum: "9(서울중앙)" },
  { name: "정병선★", schoolNum: "85(사회학)", testNum: "28(서울중앙)" },
  { name: "정병규", schoolNum: "", testNum: "23(대전세종)" },
  { name: "정비호", schoolNum: "82(법)", testNum: "17(서울중앙)" },
  { name: "정성헌", schoolNum: "", testNum: "6(서울중앙)" },
  { name: "정영근★", schoolNum: "", testNum: "12(부산)" },
  { name: "정원교★", schoolNum: "85(경영)", testNum: "10(서울중앙)" },
  { name: "정주원★", schoolNum: "91(법)", testNum: "20(서울중앙)" },
  { name: "정찬권", schoolNum: "", testNum: "21(광주전남)" },
  { name: "정택근★", schoolNum: "84(법)", testNum: "11(서울중앙)" },
  { name: "정현우★", schoolNum: "02(법)", testNum: "18(부천)" },
  { name: "조동욱★", schoolNum: "96(국문)", testNum: "24(서울중앙)" },
  { name: "조미경★", schoolNum: "80(법)", testNum: "12(서울중앙)" },
  { name: "조수호★", schoolNum: "04(법)", testNum: "2(부천)" },
  { name: "조연수★", schoolNum: "82(법)", testNum: "29(경기북부)" },
  { name: "조윤호★", schoolNum: "84(법)", testNum: "23(공주)" },
  { name: "주계흠", schoolNum: "85(법)", testNum: "14" },
  { name: "주상희", schoolNum: "89(사학)", testNum: "3(경기중앙)" },
  { name: "최승윤★", schoolNum: "82(법)", testNum: "15(서울중앙)" },
  { name: "최영민★", schoolNum: "86(법)", testNum: "16(서울중앙)" },
  { name: "최영범★", schoolNum: "84(법)", testNum: "8(인천)" },
  { name: "최운식★", schoolNum: "76(법)", testNum: "2(서울중앙)" },
  { name: "최인수★", schoolNum: "75(법)", testNum: "2(수원)" },
  { name: "최인자", schoolNum: "84(법)", testNum: "13(서울남부)" },
  { name: "최현진★", schoolNum: "96(영문)", testNum: "17(서울남부)" },
  { name: "추명호★", schoolNum: "99", testNum: "21(서울동부)" },
  { name: "하경민★", schoolNum: "86(법)", testNum: "18(서울동부)" },
  { name: "하두성★", schoolNum: "85(법)", testNum: "19(서울중앙)" },
  { name: "하정우★", schoolNum: "89(법)", testNum: "7(서울중앙)" },
  { name: "허동규★", schoolNum: "82(법)", testNum: "24(서울중앙)" },
  { name: "허태식★", schoolNum: "87(법)", testNum: "7(서울서부)" },
  { name: "홍상길★", schoolNum: "81(법)", testNum: "21(서울중앙)" },
  { name: "황병대★", schoolNum: "80(법)", testNum: "1(서울동부)" },
  { name: "황우인★", schoolNum: "", testNum: "30" },
  { name: "jini", schoolNum: "", testNum: "" }
];

// flip 순서 (1,4,8,10,18,15,6,11,19,5,3,16,14,9,2,12,17,13,7,20) → 0-indexed
const flipOrder = [0,3,7,9,17,14,5,10,18,4,2,15,13,8,1,11,16,12,6,19]; 