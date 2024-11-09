'use strict';

const buttons = Array.from(document.querySelectorAll('button'));
const tableBody = document.querySelector('.field tbody');
const trElements = document.querySelector('tr');

buttons.forEach((button) => {
  button.onclick = function (events) {
    const target = events.target.className;

    switch (target) {
      case 'append-row button':
        appendRow();
        break;

      case 'remove-row button':
        removeRow();
        break;

      case 'append-column button':
        appendColumn();
        break;

      case 'remove-column button':
        removeColumn();
        break;
    }
  };
});

function appendRow() {
  const rowCount = tableBody.children.length;
  const removeButton = document.querySelector('.remove-row');

  if (removeButton.hasAttribute('disabled')) {
    removeButton.removeAttribute('disabled');
  }

  if (rowCount < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < trElements.children.length; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }

  if (rowCount === 9) {
    document.querySelector('.append-row').setAttribute('disabled', 'true');
  }
}

function removeRow() {
  const rowCount = tableBody.children.length;
  const appendButton = document.querySelector('.append-row');

  if (rowCount > 2) {
    const tr = tableBody.lastChild;

    tableBody.removeChild(tr);
  }

  if (rowCount === 2) {
    document.querySelector('.remove-row').setAttribute('disabled', 'true');
  }

  if (appendButton.hasAttribute('disabled')) {
    appendButton.removeAttribute('disabled');
  }
}

function appendColumn() {
  const tr = document.querySelectorAll('tr');
  const trLength = document.querySelector('tr').children.length;

  if (trLength > 1) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }

  if (trLength === 9) {
    document.querySelector('.append-column').setAttribute('disabled', 'true');
  }

  tr.forEach((elements) => {
    const td = document.createElement('td');

    elements.append(td);
  });
}

function removeColumn() {
  const tr = document.querySelectorAll('tr');
  const trLength = document.querySelector('tr').children.length;
  const appendColumnButton = document.querySelector('.append-column');

  if (trLength === 3) {
    document.querySelector('.remove-column').setAttribute('disabled', 'true');
  }

  if (appendColumnButton.hasAttribute('disabled')) {
    appendColumnButton.removeAttribute('disabled');
  }

  if (trLength > 2) {
    tr.forEach((elements) => {
      const lastTd = elements.lastElementChild;

      elements.removeChild(lastTd);
    });
  }
}
