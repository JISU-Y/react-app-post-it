// let posX = 0;
// let posY = 0;

// let originalX = 0;
// let originalY = 0;

// // 드래그 시작되었을 때 실행 - onDragStart 콜백함수?
//  const dragStartHandler = e => {
//      // 드래그 시 반투명 이미지 추가
//    const img = new Image();
//    e.dataTransfer.setDragImage(img, 0, 0);

//    // 이동시킬 때 필요한 좌표
//    posX = e.clientX;
//    posY = e.clientY;

//    // 초기 위치 값 (잘못된 위치에 놓았을 때 다시 원래 위치로 돌아갈 수 있도록)
//    originalX = e.target.offsetLeft;
//    originalY = e.target.offsetTop;
//   };

//   // 드래그 중일 때 실행 - onDrag
//   const dragHandler = e => {
//         e.target.style.left = `${e.target.offsetLeft + e.clientX - posX}px`;
//     e.target.style.top = `${e.target.offsetTop + e.clientY - posY}px`;
//     posY = e.clientY;
//         posX = e.clientX;
//       };

// // 드래그 끝났을 때 실행(마우스 놓으면서) - onDragEnd
//         const dragEndHandler = e => {
//             // 올바른 영역에 드랍 되었는지 체크
//     if (
//       box.left < e.clientX &&
//       e.clientX < box.right &&
//       box.top < e.clientY &&
//       e.clientY < box.bottom
//     ) {
//       setTargets(targets => {
//         const newTargets = [...targets];
//        newTargets.push({
//          id: parseInt(e.timeStamp),
//          top: e.target.offsetTop + e.clientY - posY,
//          left: e.target.offsetLeft + e.clientX - posX,
//          details: STOCK_DATA[e.target.id],
//        });
//        return newTargets;
//      });
//    }

//    // 잘못된 영역이면 원래 위치로 이동
//    e.target.style.left = `${originalX}px`;
//    e.target.style.top = `${originalY}px`;
//  };

// // 드랍할 영역이 위치한 컴포넌트 -> TodoBoard가 되겠지
//  const postBoard = useRef();
// const [targets, setTargets] = useState(targetsState); // recoil은 전역 상태 관리 필요해서 그런것 같은데

// useEffect(() => {
//   const box = postBoard.current.getBoundingClientRect();
//   setBox({
//     top: box.top,
//     left: box.left,
//     bottom: box.top + box.height,
//     right: box.left + box.width,
//   });
// }, []);
