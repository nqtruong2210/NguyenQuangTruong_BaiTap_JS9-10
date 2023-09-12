function Staff(_account, _name, _email, _password, _date, _salary, _position, _time) {
  this.account = _account;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.date = _date;
  this.salary = _salary;
  this.position = _position;
  this.time = _time;
  this.total = function () {
    if (this.position === 'Sếp')
      return (this.salary * 3).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    if (this.position === 'Trưởng phòng')
      return (this.salary * 2).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    if (this.position === 'Nhân viên')
      return this.salary.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  };
  this.rank = function () {
    if (this.time >= 192) return 'Xuất xắc';
    if (this.time >= 176) return 'Giỏi';
    if (this.time >= 160) return 'Khá';
    return 'Trung bình';
  };
}
