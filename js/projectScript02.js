document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('#menuList div');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuItems.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


/*호출*/
document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('#menuList > div');
  const subjectBlocks = document.querySelectorAll('.projectSubject > div, .projectSubject > p');

  // 메뉴의 두 번째 이미지 id → 콘텐츠 키 매핑
  // (HTML 그대로 유지: allS, BMS, DCPS, IBS, VPS)
  const idMap = {
    allS: 'all',
    BMS: 'brand',
    DCPS: 'digital',
    IBS: 'interaction',
    VPS: 'visual'
  };

  function getKeyFromSecondImg(secondImg) {
    if (!secondImg) return 'all';
    return idMap[secondImg.id] || (secondImg.getAttribute('alt') || 'all').toLowerCase();
  }

  function hideAllSubjects() {
    subjectBlocks.forEach(el => { el.style.display = 'none'; });
  }

  function showByKey(key) {
    hideAllSubjects();
    const matches = document.querySelectorAll(`.projectSubject #${key}, .projectSubject #${key}Txt`);
    matches.forEach(el => { el.style.display = 'block'; });
  }

  function filterProjectCards(key) {
    const cards = document.querySelectorAll('#projectList .contain .person');
    cards.forEach(card => {
      if (key === 'all') {
        card.style.display = '';
      } else {
        card.style.display = (card.id === key) ? '' : 'none';
      }
    });
  }

  (function init() {
    const activeSecond = document.querySelector('#menuList > div.active img:nth-child(2)');
    const initialKey = getKeyFromSecondImg(activeSecond);
    showByKey(initialKey);
    filterProjectCards(initialKey);
  })();

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menuItems.forEach(el => el.classList.remove('active'));
      this.classList.add('active');

      const secondImg = this.querySelector('img:nth-child(2)');
      const key = getKeyFromSecondImg(secondImg);

      showByKey(key);
      filterProjectCards(key);
    });
  });
});
