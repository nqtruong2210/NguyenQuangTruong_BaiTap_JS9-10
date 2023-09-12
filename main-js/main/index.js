var staffList = [];

var staffListJSON = localStorage.getItem('staffList');
if (staffListJSON != null) {
  let staffArr = JSON.parse(staffListJSON);

  staffList = staffArr.map(function (item) {
    return new Staff(
      item.account,
      item.name,
      item.email,
      item.password,
      item.date,
      item.salary,
      item.position,
      item.time
    );
  });
  render(staffList);
}

// on/off disabled when click edit button and add button
document.getElementById('btnThem').onclick = function () {
  document.getElementById('tknv').disabled = false;
};

// Add staff
var addStaffBtn = document.getElementById('btnThemNV');

function addStaff() {
  let informationStaff = getValueFromForm();

  // Validate
  isValid = true;
  isAccount =
    checkDuplicate(informationStaff.account, staffList, 'tbTKNV') &&
    checkLength(informationStaff.account, 4, 6, 'tbTKNV') &&
    checkNumber(informationStaff.account, 'tbTKNV');

  isName = checkString(informationStaff.name, 'tbTen');
  isEmail = checkEmail(informationStaff.email, 'tbEmail');
  isPassword = checkPassword(informationStaff.password, 'tbMatKhau');
  isDate = checkDate(informationStaff.date, 'tbNgay');
  isPosition = checkPosition(informationStaff.position, 'tbChucVu');
  isSalary =
    checkNumber(informationStaff.salary, 'tbLuongCB') &&
    checkSalary(informationStaff.salary, 'tbLuongCB');
  isTime =
    checkNumber(informationStaff.time, 'tbGiolam') && checkTime(informationStaff.time, 'tbGiolam');

  isValid = isAccount & isName & isEmail & isPassword & isDate & isPosition & isTime & isSalary;

  if (isValid) {
    staffList.push(informationStaff);
    saveToLocalStorage(staffList, 'staffList');
    render(staffList);
  }
}

// Delete staff
function deleteStaff(id) {
  let position = searchPositionEl(id, staffList);

  if (position != -1) {
    staffList.splice(position, 1);
    saveToLocalStorage(staffList, 'staffList');
    render(staffList);
  }
}

function editStaff(id) {
  document.getElementById('tknv').disabled = true;
  let position = searchPositionEl(id, staffList);

  if (position == -1) return;
  showInformationStaff(staffList[position]);
  // document.getElementById('tknv').setAttribute('disabled', 'false');
}

function updateStaff() {
  var staff = getValueFromForm();
  var position = searchPositionEl(staff.account, staffList);

  if (position != -1) {
    // Validate
    isValid = true;

    isName = checkString(staff.name, 'tbTen');
    isEmail = checkEmail(staff.email, 'tbEmail');
    isPassword = checkPassword(staff.password, 'tbMatKhau');
    isDate = checkDate(staff.date, 'tbNgay');
    isPosition = checkPosition(staff.position, 'tbChucVu');
    isSalary = checkNumber(staff.salary, 'tbLuongCB') && checkSalary(staff.salary, 'tbLuongCB');
    isTime = checkNumber(staff.time, 'tbLuongCB') && checkTime(staff.time, 'tbGiolam');

    isValid = isName & isEmail & isPassword & isDate & isPosition & isTime & isSalary;

    if (isValid) {
      staffList[position] = staff;
      saveToLocalStorage(staffList, 'staffList');
      render(staffList);
    }
  }
}

function resetForm() {
  reset();
}

// Filter staff
var searchBtn = document.getElementById('btnTimNV');
var searchInput = document.getElementById('searchName');

function clearInput() {
  document.getElementById('searchName').value = '';
  document.querySelector('.icon-search').style.display = 'none';
  document.getElementById('noticeInput').innerText = '';
  render(staffList);
}

function filterStaff(arr, value) {
  return arr.filter(function (item) {
    return item.rank() == value || item.rank().toLowerCase() == value.toLowerCase();
  });
}

searchInput.addEventListener('input', function (e) {
  if (e.target.value != '') {
    document.querySelector('.icon-search').style.display = 'block';
  } else {
    document.querySelector('.icon-search').style.display = 'none';
  }
});

searchBtn.onclick = function () {
  var filterItem = filterStaff(staffList, searchInput.value);
  console.log(filterItem);

  if (filterItem.length > 0) {
    document.getElementById('noticeInput').innerText = '';
    render(filterItem);
  } else {
    document.getElementById('noticeInput').innerText = 'Không tìm thấy kết quả phù hợp';
  }
};



searchInput.addEventListener('keyup', function (e) {
  var filterItem = filterStaff(staffList, searchInput.value);
  if (e.keyCode == 13 && filterItem.length > 0) {
    document.getElementById('noticeInput').innerText = '';
    render(filterItem);
  } else if (e.keyCode == 13 && filterItem.length == 0) {
    document.getElementById('noticeInput').innerText = 'Không tìm thấy kết quả phù hợp';
    render(staffList);
  } else if (searchInput.value == '') {
    render(staffList);
  }
});
