const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'James',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office People'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var remUser = users.removeUser('2');

    expect(remUser.id).toBe('2');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var remUsers = users.removeUser('18');

    expect(remUsers).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var foundUser = users.getUser('3');

    expect(foundUser.id).toBe('3');
    expect(foundUser.name).toBe('James');
    expect(foundUser).toEqual(users.users[2]);
  });

  it('should not find user', () => {
    var foundUser = users.getUser('20');

    expect(foundUser).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'James']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
