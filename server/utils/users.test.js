const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;
  beforeEach( () => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Andrew',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Mike',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Neil',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '55',
      name: 'Andrew',
      room: 'CPC Users'
    }
    let resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let userId = '1';
    let user = users.removeUser(userId);
    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    let user = users.removeUser('10');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    let userId = '1';
    let user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    userId = '55';
    let user = users.getUser(userId);
    expect(user).toEqual(undefined);
  });

  it('should return names for node course', () => {
    let userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Andrew', 'Neil']);
  });

  it('should return names for react course', () => {
    let userList = users.getUserList('React Course');
    expect(userList).toEqual(['Mike']);
  });
});