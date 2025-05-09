let currentPage = 1;
const itemsPerPage = 20;
let currentFlipIndex = 0;
let isFirstTurn = true;
const FLIP_INTERVAL = 3000; // 3초
const FLIP_DURATION = 500; // 0.5초

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

function renderData() {
  const leftList = document.getElementById('left-list');
  const rightList = document.getElementById('right-list');
  
  if (!leftList || !rightList) {
    console.error('List elements not found');
    return;
  }
  
  leftList.innerHTML = '';
  rightList.innerHTML = '';

  // 데이터가 없으면 리턴
  if (!membersData || membersData.length === 0) {
    console.error('No member data available');
    return;
  }

  // 현재 페이지의 데이터 계산
  const currentPageData = getPageData(currentPage);

  // 데이터를 두 열로 나누기
  const halfLength = Math.ceil(currentPageData.length / 2);
  const leftData = currentPageData.slice(0, halfLength);
  const rightData = currentPageData.slice(halfLength);

  // 왼쪽 열 데이터 렌더링
  leftData.forEach((member, index) => {
    const row = document.createElement('div');
    row.className = `fids-row ${index % 2 === 0 ? 'row-blue' : 'row-gray'}`;
    
    const nameCell = document.createElement('div');
    nameCell.className = 'fids-cell';
    nameCell.textContent = member.name;
    
    const schoolNumCell = document.createElement('div');
    schoolNumCell.className = 'fids-cell';
    schoolNumCell.textContent = member.schoolNum;
    
    const testNumCell = document.createElement('div');
    testNumCell.className = 'fids-cell';
    testNumCell.textContent = member.testNum;
    
    row.appendChild(nameCell);
    row.appendChild(schoolNumCell);
    row.appendChild(testNumCell);
    
    leftList.appendChild(row);
  });

  // 오른쪽 열 데이터 렌더링
  rightData.forEach((member, index) => {
    const row = document.createElement('div');
    row.className = `fids-row ${index % 2 === 0 ? 'row-blue' : 'row-gray'}`;
    
    const nameCell = document.createElement('div');
    nameCell.className = 'fids-cell';
    nameCell.textContent = member.name;
    
    const schoolNumCell = document.createElement('div');
    schoolNumCell.className = 'fids-cell';
    schoolNumCell.textContent = member.schoolNum;
    
    const testNumCell = document.createElement('div');
    testNumCell.className = 'fids-cell';
    testNumCell.textContent = member.testNum;
    
    row.appendChild(nameCell);
    row.appendChild(schoolNumCell);
    row.appendChild(testNumCell);
    
    rightList.appendChild(row);
  });
}

function updateRow(rowIndex, nextMember) {
  const cells = document.querySelectorAll('.fids-cell');
  const startIndex = rowIndex * 3;
  
  // 해당 행의 모든 셀에 플립 효과 적용
  for (let i = 0; i < 3; i++) {
    const cell = cells[startIndex + i];
    cell.classList.add('flipping');
  }
  
  setTimeout(() => {
    // 모든 셀의 내용을 한 번에 업데이트
    cells[startIndex].textContent = nextMember.name;
    cells[startIndex + 1].textContent = nextMember.schoolNum;
    cells[startIndex + 2].textContent = nextMember.testNum;
    
    // 플립 효과 제거
    for (let i = 0; i < 3; i++) {
      const cell = cells[startIndex + i];
      cell.classList.remove('flipping');
      cell.classList.add('new-content');
    }
    
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        cells[startIndex + i].classList.remove('new-content');
      }
    }, FLIP_DURATION);
  }, FLIP_DURATION);
}

function startSequentialFlips() {
  const cells = document.querySelectorAll('.fids-cell');
  currentFlipIndex = 0;

  function flipNext() {
    if (currentFlipIndex < flipOrder.length) {
      const rowIndex = flipOrder[currentFlipIndex];
      if (cells[rowIndex * 3]) {
        // 다음 페이지의 데이터 가져오기
        const nextPage = currentPage + 1;
        const nextPageData = getPageData(nextPage);
        
        // 해당 위치의 다음 페이지 회원 데이터
        const nextMember = nextPageData[rowIndex];
        
        if (nextMember) {
          // 해당 행의 모든 셀을 한 번에 업데이트
          updateRow(rowIndex, nextMember);
        }
        
        currentFlipIndex++;
        setTimeout(flipNext, FLIP_INTERVAL);
      }
    } else {
      // 현재 페이지의 모든 회원이 바뀌었을 때
      currentPage++;
      if (currentPage * itemsPerPage < membersData.length) {
        // 다음 페이지가 있으면 새로운 데이터로 렌더링
        renderData();
        currentFlipIndex = 0;
        setTimeout(flipNext, FLIP_INTERVAL);
      } else {
        // 모든 페이지가 끝났으면 랜덤 플립 시작
        isFirstTurn = false;
        startRandomFlips();
      }
    }
  }

  flipNext();
}

function startRandomFlips() {
  const cells = document.querySelectorAll('.fids-cell');
  const totalRows = cells.length / 3;
  
  setInterval(() => {
    const randomRow = Math.floor(Math.random() * totalRows);
    
    // 다음 페이지의 데이터 가져오기
    const nextPage = currentPage + 1;
    if (nextPage * itemsPerPage >= membersData.length) {
      // 마지막 페이지면 처음으로 돌아가기
      currentPage = 1;
    }
    const nextPageData = getPageData(nextPage);
    
    // 해당 위치의 다음 페이지 회원 데이터
    const nextMember = nextPageData[randomRow];
    
    if (nextMember) {
      // 해당 행의 모든 셀을 한 번에 업데이트
      updateRow(randomRow, nextMember);
    }
  }, FLIP_INTERVAL);
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
  startSequentialFlips();
}

// DOM이 완전히 로드된 후 초기화
document.addEventListener('DOMContentLoaded', init); 