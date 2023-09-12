function checkDuplicate(id, arr, idErr) {
  var index = arr.findIndex(function (item) {
    return id == item.account;
  });

  if (index == -1) {
    document.getElementById(idErr).innerText = '';
    return true;
  } else {
    document.getElementById(idErr).innerText = 'Tài khoản đã tồn tại';
    return false;
  }
}

function checkLength(value, min, max, idErr) {
  let length = value.length;

  if (length < min || length > max) {
    document.getElementById(idErr).innerText = `Vui lòng nhập từ ${min} đến ${max} kí tự`;
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkNumber(value, idErr) {
  let reg = /^\d+$/;
  let isNumber = reg.test(value);
  if (isNumber) {
    document.getElementById(idErr).innerText = '';
    return true;
  } else {
    document.getElementById(idErr).innerText = 'Vui lòng nhập số';
    return false;
  }
}

function checkString(value, idErr) {
  let reg = /\d/;
  let isString = reg.test(value);
  if (isString || value == '') {
    document.getElementById(idErr).innerText = 'Vui lòng nhập chữ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkEmail(value, idErr) {
  let reg =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isEmail = reg.test(value);
  if (isEmail == false || value == '') {
    document.getElementById(idErr).innerText = 'Vui lòng nhập email hợp lệ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkPassword(value, idErr) {
  let reg = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

  let isPassword = reg.test(value);
  if (isPassword == false || value == '') {
    document.getElementById(idErr).innerText =
      'Vui lòng nhập 6-10 kí tự có ít nhất một chữ số, một chữ cái in hoa và một ký tự đặc biệt ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkDate(value, idErr) {
  if (value == '') {
    document.getElementById(idErr).innerText = 'Vui lòng nhập ngày';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkPosition(value, idErr) {
  if (value == 'Chọn chức vụ') {
    document.getElementById(idErr).innerText = 'Vui lòng chọn chức vụ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkSalary(value, idErr) {
  if (value < 1000000 || value > 20000000) {
    document.getElementById(idErr).innerText = 'Vui lòng nhập số lương hợp lệ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}

function checkTime(value, idErr) {
  if (value < 80 || value > 200) {
    document.getElementById(idErr).innerText = 'Vui lòng nhập số giờ hợp lệ';
    return false;
  } else {
    document.getElementById(idErr).innerText = '';
    return true;
  }
}
