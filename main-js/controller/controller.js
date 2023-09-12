function getValueFromForm() {
  let _account = document.getElementById('tknv').value;
  let _name = document.getElementById('name').value;
  let _email = document.getElementById('email').value;
  let _password = document.getElementById('password').value;
  let _date = document.getElementById('datepicker').value;
  let _salary = document.getElementById('luongCB').value * 1;
  let _position = document.getElementById('chucvu').value;
  let _time = document.getElementById('gioLam').value * 1;

  return new Staff(_account, _name, _email, _password, _date, _salary, _position, _time);
}

function saveToLocalStorage(arr, key) {
  let arrJSON = JSON.stringify(arr);
  localStorage.setItem(key, arrJSON);
}

function render(arr) {
  let contentHTML = '';

  for (let index = 0; index < arr.length; index++) {
    let item = arr[index];

    let contentTable = `
    <tr>
        <td>${item.account}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.date}</td>
        <td>${item.position}</td>
        <td>${item.total()}</td>
        <td>${item.rank()}</td>
        <td class='d-flex'>
        <button class='btn btn-info mr-2' data-toggle="modal"
        data-target="#myModal" onclick="editStaff('${
          item.account
        }')">Sửa</button>
      
        <button class='btn btn-danger' onclick="deleteStaff('${
          item.account
        }')">Xóa</button>
      </td>
  </tr>
                    `;
    contentHTML += contentTable;
  }

  document.getElementById('tableDanhSach').innerHTML = contentHTML;
}

function reset() {
  document.getElementById('tknv').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('datepicker').value = '';
  document.getElementById('luongCB').value = '';
  document.getElementById('chucvu').value = 'Chọn chức vụ';
  document.getElementById('gioLam').value = '';
}

function searchPositionEl(id, arr) {
  let position = -1;

  for (let index = 0; index < arr.length; index++) {
    let staff = arr[index];

    if (staff.account == id) {
      position = index;
      break;
    }
  }
  return position;
}

function showInformationStaff(staff) {
  document.getElementById('tknv').value = staff.account;
  document.getElementById('name').value = staff.name;
  document.getElementById('email').value = staff.email;
  document.getElementById('password').value = staff.password;
  document.getElementById('datepicker').value = staff.date;
  document.getElementById('luongCB').value = staff.salary;
  document.getElementById('chucvu').value = staff.position;
  document.getElementById('gioLam').value = staff.time;
}
