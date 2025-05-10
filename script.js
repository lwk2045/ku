let currentPage = 1;
const itemsPerPage = 20;
let currentFlipIndex = 0;
let isFirstTurn = true;
const FLIP_INTERVAL = 2000; // 2초
const FLIP_DURATION = 500; // 0.5초
const MIN_FLIP_COUNT = 2;
const MAX_FLIP_COUNT = 5;
const ROW_DELAY = 100; // 0.1초 간격
const UPDATE_INTERVAL = 2000; // 2초마다 업데이트

const membersData = [
  { name: '강편모', schoolNum: '', testNum: '8(서울중앙)' },
  { name: '강현우', schoolNum: '95(전파)', testNum: '29(서울중앙)' },
  { name: '고기동', schoolNum: '84(법)', testNum: '9(서울중앙)' },
  { name: '고승연', schoolNum: '', testNum: '7(서울중앙)' },
  { name: '고은영', schoolNum: '96(법)', testNum: '23(서울동부)' },
  { name: '고재도', schoolNum: '91(법)', testNum: '18(서울중앙)' },
  { name: '고태환', schoolNum: '91(법)', testNum: '' },
  { name: '공성수', schoolNum: '84(법)', testNum: '15(서울중앙)' },
  { name: '곽수현', schoolNum: '', testNum: '25(서울중앙)' },
  { name: '권오종', schoolNum: '(법)', testNum: '23(옥천)' },
  { name: '김다혜', schoolNum: '91(국교)', testNum: '12(서울중앙)' },
  { name: '김동현', schoolNum: '88(법)', testNum: '28(경기중앙)' },
  { name: '김세연', schoolNum: '00(법)', testNum: '28(서울중앙)' },
  { name: '김승수', schoolNum: '86(법)', testNum: '12(천안)' },
  { name: '김여원', schoolNum: '04(생공)', testNum: '26(광주전남)' },
  { name: '김영식', schoolNum: '86(정외)', testNum: '10기(인천)' },
  { name: '김재원', schoolNum: '82(법)', testNum: '23(서울동부)' },
  { name: '김종환', schoolNum: '81(법)', testNum: '22(서울중앙)' },
  { name: '김창국', schoolNum: '84(유전공학)', testNum: '9(서울중앙)' },
  { name: '김창수', schoolNum: '', testNum: '25(서울중앙)' },
  { name: '김청교', schoolNum: '85(전자공학)', testNum: '24(경기중앙)' },
  { name: '김충식', schoolNum: '91(법)', testNum: '27(법률구조공단)' },
  { name: '김태완', schoolNum: '', testNum: '14(대구경북)' },
  { name: '김태진', schoolNum: '', testNum: '25(성남)' },
  { name: '김현덕', schoolNum: '83(법)', testNum: '24(경남)' },
  { name: '김형경', schoolNum: '88(영교)', testNum: '27' },
  { name: '김형주', schoolNum: '84(법)', testNum: '5(서울중앙)' },
  { name: '김홍근', schoolNum: '82(행정)', testNum: '26(서울동부)' },
  { name: '김회진', schoolNum: '91(경영)', testNum: '' },
  { name: '김희섭', schoolNum: '90(법)', testNum: '23(서울동부)' },
  { name: '박노형', schoolNum: '92', testNum: '25(서울중앙)' },
  { name: '박상호', schoolNum: '', testNum: '9(서울중앙)' },
  { name: '박성경', schoolNum: '85(법)', testNum: '17(안양)' },
  { name: '박성민', schoolNum: '', testNum: '25' },
  { name: '박성수', schoolNum: '', testNum: '' },
  { name: '박성원', schoolNum: '85(법)', testNum: '25(창원)' },
  { name: '박성준', schoolNum: '85(법)', testNum: '18(서울중앙)' },
  { name: '박양수', schoolNum: '82(법)', testNum: '15(서울서부)' },
  { name: '박진수', schoolNum: '', testNum: '' },
  { name: '박흥순', schoolNum: '', testNum: '안양' },
  { name: '배건희', schoolNum: '82(법)', testNum: '11(서울중앙)' },
  { name: '배병웅', schoolNum: '87(법)', testNum: '14(서울동부)' },
  { name: '백진기', schoolNum: '85(정외)', testNum: '10(서울중앙)' },
  { name: '장지수', schoolNum: '75(법)', testNum: '2(수원)' },
  { name: '송민병', schoolNum: '84(법)', testNum: '17(부산)' },
  { name: '송의림', schoolNum: '91(법)', testNum: '25(서울중앙)' },
  { name: '송혁수', schoolNum: '85(서문)', testNum: '23(서울중앙)' },
  { name: '신기상', schoolNum: '', testNum: '16(서울중앙)' },
  { name: '신진태', schoolNum: '82(법)', testNum: '17(김해)' },
  { name: '안선희', schoolNum: '85(정외)', testNum: '15(경기중앙)' },
  { name: '안성재', schoolNum: '89(법)', testNum: '11(서울중앙)' },
  { name: '안신영', schoolNum: '91(법)', testNum: '18(서울동부)' },
  { name: '양동빈', schoolNum: '89(경경)', testNum: '21(경기중앙)' },
  { name: '오영진', schoolNum: '84법', testNum: '12(제주)' },
  { name: '오은석', schoolNum: '', testNum: '28(경기북부)' },
  { name: '오창근', schoolNum: '82(법)', testNum: '3(광주전남,여수)' },
  { name: '우상원', schoolNum: '95(수학)', testNum: '29(서울동부)' },
  { name: '윤병준', schoolNum: '88(토목환경)', testNum: '26(서울중앙)' },
  { name: '윤석필', schoolNum: '82(법)', testNum: '12(서울중앙)' },
  { name: '윤여선', schoolNum: '69(법)', testNum: '1(서울중앙)' },
  { name: '이교한', schoolNum: '82(법)', testNum: '8(서울동부)' },
  { name: '이기현', schoolNum: '83(행정)', testNum: '16(서울중앙)' },
  { name: '이길용', schoolNum: '91(법)', testNum: '20(제주)' },
  { name: '이상대', schoolNum: '83(법)', testNum: '30' },
  { name: '이상진', schoolNum: '81(법)', testNum: '3(대구)' },
  { name: '이상현', schoolNum: '93(법)', testNum: '26(서울중앙)' },
  { name: '이성기', schoolNum: '', testNum: '' },
  { name: '이성수', schoolNum: '73(행정)', testNum: '법행' },
  { name: '이승훈', schoolNum: '', testNum: '28(서울중앙)' },
  { name: '이영하', schoolNum: '90(법)', testNum: '24(안양)' },
  { name: '이왕국', schoolNum: '94(법)', testNum: '30' },
  { name: '이용주', schoolNum: '93(경영)', testNum: '15(서울중앙)' },
  { name: '이원술', schoolNum: '81(경제)', testNum: '13(서울중앙)' },
  { name: '이재석', schoolNum: '82(법)', testNum: '법행' },
  { name: '이정희', schoolNum: '84(법)', testNum: '22(법률구조공단)' },
  { name: '이종택', schoolNum: '84(법)', testNum: '1(부산사하)' },
  { name: '이종혁', schoolNum: '88(법)', testNum: '29(김해)' },
  { name: '이진수', schoolNum: '', testNum: '' },
  { name: '이창훈', schoolNum: '', testNum: '27(서울중앙)' },
  { name: '이태인', schoolNum: '89(수학)', testNum: '28(서울북부)' },
  { name: '이창훈', schoolNum: '', testNum: '' },
  { name: '이한휴', schoolNum: '81(법)', testNum: '3(서울중앙)' },
  { name: '이현재', schoolNum: '88(체교)', testNum: '16(서울 종로)' },
  { name: '이효경', schoolNum: '89(법)', testNum: '21(서울중앙)' },
  { name: '인태관', schoolNum: '88(법)', testNum: '13(안양평촌)' },
  { name: '임만혁', schoolNum: '95(사회)', testNum: '27(서울중앙)' },
  { name: '임소리', schoolNum: '', testNum: '22(서울중앙)' },
  { name: '임온식', schoolNum: '84(법)', testNum: '15(서울남부)' },
  { name: '임인택', schoolNum: '', testNum: '9(서울중앙)' },
  { name: '임종명', schoolNum: '', testNum: '14(경기중앙)' },
  { name: '임채균', schoolNum: '', testNum: '25(서울중앙)' },
  { name: '전재호', schoolNum: '91(법)', testNum: '12(서울중앙)' },
  { name: '정개영', schoolNum: '86(행정)', testNum: '9(서울중앙)' },
  { name: '정병선', schoolNum: '84(법)', testNum: '28(서울중앙)' },
  { name: '정병규', schoolNum: '85(사회학)', testNum: '23(대전세종)' },
  { name: '정비호', schoolNum: '', testNum: '17(서울중앙)' },
  { name: '정성헌', schoolNum: '82(법)', testNum: '6(서울중앙)' },
  { name: '정영근', schoolNum: '', testNum: '12(부산)' },
  { name: '정원교', schoolNum: '', testNum: '10(서울중앙)' },
  { name: '정주원', schoolNum: '85(경영)', testNum: '20(서울중앙)' },
  { name: '정찬권', schoolNum: '91(법)', testNum: '21(광주전남)' },
  { name: '정택근', schoolNum: '', testNum: '11(서울중앙)' },
  { name: '정현우', schoolNum: '84(법)', testNum: '18(부천)' },
  { name: '조동욱', schoolNum: '02(법)', testNum: '24(서울중앙)' },
  { name: '조미경', schoolNum: '96(국문)', testNum: '12(서울중앙)' },
  { name: '조수호', schoolNum: '80(법)', testNum: '2(부천)' },
  { name: '조연수', schoolNum: '04(법)', testNum: '29(경기북부)' },
  { name: '조윤호', schoolNum: '82(법)', testNum: '23(공주)' },
  { name: '주계흠', schoolNum: '84(법)', testNum: '14' },
  { name: '주상희', schoolNum: '85(법)', testNum: '3(경기중앙)' },
  { name: '최승윤', schoolNum: '89(사학)', testNum: '15(서울중앙)' },
  { name: '최영민', schoolNum: '82(법)', testNum: '16(서울중앙)' },
  { name: '최영범', schoolNum: '86(법)', testNum: '8(인천)' },
  { name: '최운식', schoolNum: '84(법)', testNum: '2(서울중앙)' },
  { name: '최인수', schoolNum: '76(법)', testNum: '2(수원)' },
  { name: '최인자', schoolNum: '75(법)', testNum: '13(서울남부)' },
  { name: '최현진', schoolNum: '84(법)', testNum: '17(서울남부)' },
  { name: '추명호', schoolNum: '96(영문)', testNum: '21(서울동부)' },
  { name: '하경민', schoolNum: '(99)', testNum: '18(서울동부)' },
  { name: '하두성', schoolNum: '86(법)', testNum: '19(서울중앙)' },
  { name: '하정우', schoolNum: '85(법)', testNum: '7(서울중앙)' },
  { name: '허동규', schoolNum: '89(법)', testNum: '24(서울중앙)' },
  { name: '허태식', schoolNum: '82(법)', testNum: '7(서울서부)' },
  { name: '홍상길', schoolNum: '87(법)', testNum: '21(서울중앙)' },
  { name: '황병대', schoolNum: '81(법)', testNum: '1(서울동부)' },
  { name: '황우인', schoolNum: '80(법)', testNum: '30' }
];

function updateClock() {
  const clockElement = document.getElementById('clock');
  if (!clockElement) {
    console.error('Clock element not found');
    return;
  }
  
  const now = new Date();
  const timeString = now.toLocaleTimeString('ko-KR', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
  clockElement.textContent = timeString;
}

function getPageData(page) {
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, membersData.length);
  return membersData.slice(startIdx, endIdx);
}

function createCell(content) {
  const cell = document.createElement('div');
  cell.className = 'fids-cell';
  const cellContent = document.createElement('div');
  cellContent.className = 'fids-cell-content';
  cellContent.textContent = content;
  cell.appendChild(cellContent);
  return cell;
}

function updateRow(rowIndex, nextMember) {
  const row = document.querySelector(`.fids-row:nth-child(${rowIndex + 1})`);
  if (!row) return;

  const cells = row.querySelectorAll('.fids-cell');
  
  // 기존 내용이 아래로 내려가면서 사라지는 애니메이션
  cells.forEach(cell => {
    cell.classList.add('sliding');
  });

  setTimeout(() => {
    // 새로운 내용으로 업데이트
    cells[0].querySelector('.fids-cell-content').textContent = nextMember.name;
    cells[1].querySelector('.fids-cell-content').textContent = nextMember.schoolNum;
    cells[2].querySelector('.fids-cell-content').textContent = nextMember.testNum;

    // 새로운 내용이 나타나는 애니메이션
    cells.forEach(cell => {
      cell.classList.remove('sliding');
      cell.classList.add('new-content');
    });

    setTimeout(() => {
      cells.forEach(cell => {
        cell.classList.remove('new-content');
      });
    }, 500);
  }, 500);
}

function renderData() {
  const leftList = document.getElementById('left-list');
  const rightList = document.getElementById('right-list');
  
  if (!leftList || !rightList) {
    console.error('List elements not found');
    return;
  }

  leftList.innerHTML = '';
  rightList.innerHTML = '';

  // 첫 20명의 회원만 표시
  const displayData = membersData.slice(0, 20);
  const leftData = displayData.slice(0, 10);
  const rightData = displayData.slice(10, 20);

  // 왼쪽 섹션 렌더링 (1-10번)
  leftData.forEach((member, index) => {
    const row = document.createElement('div');
    row.className = `fids-row ${index % 2 === 0 ? 'row-blue' : 'row-gray'}`;
    row.dataset.memberNumber = index + 1;
    
    row.appendChild(createCell(member.name));
    row.appendChild(createCell(member.schoolNum));
    row.appendChild(createCell(member.testNum));
    
    leftList.appendChild(row);
  });

  // 오른쪽 섹션 렌더링 (11-20번)
  rightData.forEach((member, index) => {
    const row = document.createElement('div');
    row.className = `fids-row ${index % 2 === 0 ? 'row-blue' : 'row-gray'}`;
    row.dataset.memberNumber = index + 11;
    
    row.appendChild(createCell(member.name));
    row.appendChild(createCell(member.schoolNum));
    row.appendChild(createCell(member.testNum));
    
    rightList.appendChild(row);
  });
}

function updateFirstThreeRows() {
  const leftList = document.getElementById('left-list');
  const rows = leftList.querySelectorAll('.fids-row');
  
  // 다음 페이지의 데이터 가져오기
  const nextPage = currentPage + 1;
  if (nextPage * itemsPerPage >= membersData.length) {
    currentPage = 1;
  }
  const nextPageData = getPageData(nextPage);

  // 첫 3개 행을 순차적으로 업데이트
  rows.forEach((row, index) => {
    setTimeout(() => {
      const cells = row.querySelectorAll('.fids-cell');
      const nextMember = nextPageData[index];

      // 기존 내용이 아래로 내려가면서 사라짐
      cells.forEach(cell => {
        cell.classList.add('sliding');
      });

      // 새로운 내용으로 업데이트
      setTimeout(() => {
        cells[0].querySelector('.fids-cell-content').textContent = nextMember.name;
        cells[1].querySelector('.fids-cell-content').textContent = nextMember.schoolNum;
        cells[2].querySelector('.fids-cell-content').textContent = nextMember.testNum;

        // 새로운 내용이 나타남
        cells.forEach(cell => {
          cell.classList.remove('sliding');
          cell.classList.add('new-content');
        });

        // 애니메이션 클래스 제거
        setTimeout(() => {
          cells.forEach(cell => {
            cell.classList.remove('new-content');
          });
        }, 300);
      }, 500);
    }, index * 100); // 0.1초 간격으로 순차적 실행
  });
}

function updateRandomRows() {
  const allRows = document.querySelectorAll('.fids-row');
  const totalRows = allRows.length;
  
  // 랜덤한 수의 행 선택 (1~8개)
  const rowCount = Math.floor(Math.random() * 8) + 1;
  const selectedRows = new Set();
  
  while(selectedRows.size < rowCount) {
    selectedRows.add(Math.floor(Math.random() * totalRows));
  }

  // 선택된 행들을 배열로 변환하고 순서대로 정렬
  const orderedRows = Array.from(selectedRows).sort((a, b) => a - b);

  // 순차적으로 업데이트
  orderedRows.forEach((rowIndex, index) => {
    setTimeout(() => {
      const row = allRows[rowIndex];
      const cells = row.querySelectorAll('.fids-cell');
      const currentMemberNumber = parseInt(row.dataset.memberNumber);
      
      // 다음 회원 데이터 가져오기 (20명씩 건너뛰기)
      let nextMemberIndex;
      if (currentMemberNumber <= 10) {
        // 1-10번은 21-30번으로
        nextMemberIndex = currentMemberNumber + 20;
      } else if (currentMemberNumber <= 20) {
        // 11-20번은 31-40번으로
        nextMemberIndex = currentMemberNumber + 20;
      } else {
        // 그 외의 경우 20명씩 건너뛰기
        nextMemberIndex = currentMemberNumber + 20;
      }
      
      // 회원 목록의 끝에 도달하면 처음으로 돌아가기
      if (nextMemberIndex >= membersData.length) {
        nextMemberIndex = nextMemberIndex % membersData.length;
      }
      
      const nextMember = membersData[nextMemberIndex];

      if (nextMember) {
        // 현재 회원 번호 업데이트
        row.dataset.memberNumber = nextMemberIndex + 1;

        cells.forEach(cell => {
          const content = cell.querySelector('.fids-cell-content');
          content.classList.add('old');
        });

        setTimeout(() => {
          cells.forEach((cell, i) => {
            const content = cell.querySelector('.fids-cell-content');
            content.classList.remove('old');
            
            if (i === 0) content.textContent = nextMember.name;
            else if (i === 1) content.textContent = nextMember.schoolNum;
            else content.textContent = nextMember.testNum;
            
            content.classList.add('new');
          });

          setTimeout(() => {
            cells.forEach(cell => {
              const content = cell.querySelector('.fids-cell-content');
              content.classList.remove('new');
            });
          }, 500);
        }, 500);
      }
    }, index * ROW_DELAY);
  });
}

function startContinuousUpdates() {
  // 초기 렌더링
  renderData();
  
  // 2초마다 반복적으로 업데이트
  setInterval(() => {
    updateRandomRows();
  }, UPDATE_INTERVAL);
}

function init() {
  console.log('Initializing...');
  
  // 데이터가 로드되었는지 확인
  if (typeof membersData === 'undefined') {
    console.error('membersData is not defined');
    return;
  }

  console.log('Members data loaded:', membersData.length);

  // 데이터 정렬
  membersData.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  
  // 시계 초기화
  updateClock();
  setInterval(updateClock, 1000);
  
  // 데이터 렌더링
  renderData();
  
  // 플립 애니메이션 시작
  startContinuousUpdates();
}

// DOM이 완전히 로드된 후 초기화
document.addEventListener('DOMContentLoaded', () => {
  startContinuousUpdates();
}); 