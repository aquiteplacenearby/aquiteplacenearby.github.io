document.addEventListener('DOMContentLoaded', function () {
  const gridContainer = document.getElementById('grid');
  const SIZE = 4;

  LEFT_ARROW = '←';
  RIGHT_ARROW = '→';
  UP_ARROW = '↑';
  DOWN_ARROW = '↓';

  gridContainer.style.gridTemplateColumns = `repeat(${SIZE}, 50px)`;
  gridContainer.style.gridTemplateRows = `repeat(${SIZE}, 50px)`;

  const kInput = document.getElementById('k-value');
  const submitButton = document.getElementById('submit-k');

  function greedyAction(v, i, j) {
    const nrows = SIZE;
    const ncols = SIZE;
    const actions = {
      [UP_ARROW]: { di: -1, dj: 0 },
      [DOWN_ARROW]: { di: 1, dj: 0 },
      [LEFT_ARROW]: { di: 0, dj: -1 },
      [RIGHT_ARROW]: { di: 0, dj: 1 },
    };

    let bestActions = [];
    let bestValue = -Infinity;
    let epsilon = 0.000001;
    for (const action in actions) {
      const { di, dj } = actions[action];
      var newI = i + di;
      var newJ = j + dj;
      if (newI < 0) {
        newI = 0;
      }
      if (newI >= SIZE) {
        newI = SIZE - 1;
      }
      if (newJ < 0) {
        newJ = 0;
      }
      if (newJ >= SIZE) {
        newJ = SIZE - 1;
      }
      if (newI >= 0 && newI < nrows && newJ >= 0 && newJ < ncols) {
        const value = v[newI * SIZE + newJ];
        if (i === 2 && j == 2) {
          console.log('value', value, 'action', action, 'bestValue', bestValue);
        }
        if (value - bestValue > epsilon) {
          bestValue = value;
          bestActions = [action];
        } else if (Math.abs(value - bestValue) <= epsilon) {
          bestActions.push(action);
        }
      }
    }
    if (i === 2 && j == 2) {
      console.log('bestActions', i, j, bestActions);
    }
    return bestActions;
  }

  submitButton.addEventListener('click', function () {
    const k = parseInt(kInput.value);
    if (isNaN(k) || k < 0) {
      alert('Please enter a valid non-negative number for k');
      return;
    }
    v = getNewV((k_value = k));
    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        setEmpty(row, col);
        setValue(Number(v[SIZE * row + col].toFixed(2)), row, col);
        arrows = greedyAction(v, row, col);
        if (
          !((row === 0 && col === 0) || (row === SIZE - 1 && col === SIZE - 1))
        ) {
          for (let i = 0; i < arrows.length; i++) {
            const arrow = arrows[i];
            setArrow(arrow, row, col);
          }
        }
      }
    }

    console.log('k value submitted:', k);
  });

  function createGrid(size) {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        gridContainer.appendChild(cell);
      }
    }
    return gridContainer;
  }

  function setArrowDivToCell(arrow, cell) {
    arrowDiv = document.createElement('div');
    console.log('arrow', arrow);
    if (arrow === LEFT_ARROW) {
      arrowDiv.className = 'left_arrow';
      arrowDiv.textContent = LEFT_ARROW;
    } else if (arrow === RIGHT_ARROW) {
      arrowDiv.className = 'right_arrow';
      arrowDiv.textContent = RIGHT_ARROW;
    } else if (arrow === UP_ARROW) {
      arrowDiv.className = 'up_arrow';
      arrowDiv.textContent = UP_ARROW;
    } else if (arrow === DOWN_ARROW) {
      arrowDiv.className = 'down_arrow';
      arrowDiv.textContent = DOWN_ARROW;
    } else {
      console.log('Invalid arrow');
    }
    cell.appendChild(arrowDiv);
    return cell;
  }
  function setArrow(arrow, i, j) {
    const cell = document.querySelector(`.cell:nth-child(${i * SIZE + j + 1})`);
    console.log(cell.className);
    setArrowDivToCell(arrow, cell);
  }
  function setValue(value, i, j) {
    const cell = document.querySelector(`.cell:nth-child(${i * SIZE + j + 1})`);
    valueDiv = document.createElement('div');
    valueDiv.textContent = value;
    valueDiv.style.position = 'absolute';
    valueDiv.style.top = '0px';
    valueDiv.style.left = '1px';
    valueDiv.style.fontSize = '8px';
    cell.appendChild(valueDiv);
  }
  function setEmpty(i, j) {
    const cell = document.querySelector(`.cell:nth-child(${i * SIZE + j + 1})`);
    cell.textContent = '';
  }
  createGrid(SIZE);

  function getNewV(k_value) {
    const P = {
      0: {
        up: {},
        down: {},
        right: {},
        left: {},
      },
      1: {
        up: {
          1: 1,
        },
        down: {
          5: 1,
        },
        right: {
          2: 1,
        },
        left: {
          0: 1,
        },
      },
      2: {
        up: {
          2: 1,
        },
        down: {
          6: 1,
        },
        right: {
          3: 1,
        },
        left: {
          1: 1,
        },
      },
      3: {
        up: {
          3: 1,
        },
        down: {
          7: 1,
        },
        right: {
          3: 1,
        },
        left: {
          2: 1,
        },
      },
      4: {
        up: {
          0: 1,
        },
        down: {
          8: 1,
        },
        right: {
          5: 1,
        },
        left: {
          4: 1,
        },
      },
      5: {
        up: {
          1: 1,
        },
        down: {
          9: 1,
        },
        right: {
          6: 1,
        },
        left: {
          4: 1,
        },
      },
      6: {
        up: {
          2: 1,
        },
        down: {
          10: 1,
        },
        right: {
          7: 1,
        },
        left: {
          5: 1,
        },
      },
      7: {
        up: {
          3: 1,
        },
        down: {
          11: 1,
        },
        right: {
          7: 1,
        },
        left: {
          6: 1,
        },
      },
      8: {
        up: {
          4: 1,
        },
        down: {
          12: 1,
        },
        right: {
          9: 1,
        },
        left: {
          8: 1,
        },
      },
      9: {
        up: {
          5: 1,
        },
        down: {
          13: 1,
        },
        right: {
          10: 1,
        },
        left: {
          8: 1,
        },
      },
      10: {
        up: {
          6: 1,
        },
        down: {
          14: 1,
        },
        right: {
          11: 1,
        },
        left: {
          9: 1,
        },
      },
      11: {
        up: {
          7: 1,
        },
        down: {
          15: 1,
        },
        right: {
          11: 1,
        },
        left: {
          10: 1,
        },
      },
      12: {
        up: {
          8: 1,
        },
        down: {
          12: 1,
        },
        right: {
          13: 1,
        },
        left: {
          12: 1,
        },
      },
      13: {
        up: {
          9: 1,
        },
        down: {
          13: 1,
        },
        right: {
          14: 1,
        },
        left: {
          12: 1,
        },
      },
      14: {
        up: {
          10: 1,
        },
        down: {
          14: 1,
        },
        right: {
          15: 1,
        },
        left: {
          13: 1,
        },
      },
      15: {
        up: {
          11: 1,
        },
        down: {
          15: 1,
        },
        right: {
          15: 1,
        },
        left: {
          14: 1,
        },
      },
    };

    let pi = {};
    for (let i = 1; i <= 15; i++) {
      pi[i] = {
        up: 0.25,
        down: 0.25,
        right: 0.25,
        left: 0.25,
      };
    }
    pi[0] = {
      up: 0.0,
      down: 0.0,
      right: 0.0,
      left: 0.0,
    };
    pi[15] = {
      up: 0.0,
      down: 0.0,
      right: 0.0,
      left: 0.0,
    };

    const r = -1;
    const gamma = 1;
    let v = new Array(16).fill(0);

    for (let k = 0; k < k_value; k++) {
      let v_new = new Array(16).fill(0);
      for (let i = 1; i < 15; i++) {
        for (let a of ['up', 'down', 'right', 'left']) {
          let s_next_and_p = P[i][a];
          let s = 0;
          for (let s_next in s_next_and_p) {
            s += s_next_and_p[s_next] * (r + gamma * v[s_next]);
          }
          s *= pi[i][a];
          v_new[i] += s;
        }
      }
      for (let i = 1; i < 15; i++) {
        v[i] = v_new[i];
      }
    }
    return v;
  }
});
